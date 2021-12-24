import './styles.css';
import {Tweet} from '../../Tweet';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../../context/userContext';
import {getAuth, onAuthStateChanged} from '@firebase/auth';
import { Header } from '../../Header';
import {NewTweet} from '../../NewTweet';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {

    const [tweets, setTweets] = useState([]);
    const navigate = useNavigate();
    const globalState = useContext(UserContext);

    useEffect(
        () => {
          const auth = getAuth();
          onAuthStateChanged(auth, (user) => {
            if(!user){
              navigate("/login");
            }
          });
        }, []
      )

    const getTweets = async() => {
        try {
            const res = await fetch("https://firestore.googleapis.com/v1/projects/final-assignment-3e1d7/databases/(default)/documents/tweets/");
            const data = await res.json();
            console.log(data);

            const formatData = data.documents.map( (tweet) => {
                return tweet.fields;
            })

            console.log(formatData);
            setTweets(formatData);

        } catch (error) {
            console.log(error);
        }
    }

    const getTimeDiff = (originalTime) => {
        const currTime = Date.now();
        const postTime = new Date(originalTime);
        console.log(postTime.toString());
        const diffMS = (currTime - postTime);
        const diffS = Math.floor((currTime - postTime)/1000);
        const diffMins = Math.round(diffS/60);
        const diffHrs = Math.floor(diffMins/60);

        if(diffS < 60){
            return diffS.toString() + "s";
        }
        if((diffS >= 60) && (diffMins < 60)) {
            return diffMins.toString() + "m";
        }
        if((diffMins >= 60) && (diffHrs < 24)) {
            return diffHrs.toString() + "h";
        }
        if(diffHrs >= 24){
            return postTime.toLocaleString('default', {month: 'short', day: 'numeric'});
        }

    }

    useEffect(
        ()=> {
            getTweets();
        }, []
    )

    return(
        <div className='page-content'>
            <div className='main-content'>
                <Header title="Home"/>
                <NewTweet/>
                <Tweet likes={3}/>
                {
                    tweets.map((tweet)=><Tweet username={tweet.username.stringValue} screenName={tweet.screenName.stringValue} timePosted={getTimeDiff(tweet.datePosted.timestampValue)} content={tweet.content.stringValue} />)
                }
            </div>                
        </div>
    );
}