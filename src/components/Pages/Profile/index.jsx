import './styles.css';
import {IoArrowBack} from 'react-icons/io5';
import { Button } from '../../Button';
import PropTypes from 'prop-types';
import {BsCalendar3} from 'react-icons/bs';
import profilePic from '../../../assets/images/blank-profile-pic.png';
import blankBanner from '../../../assets/images/blank-banner.png';
import { Tweet } from '../../Tweet';
import { Header } from '../../Header';
import UserContext from '../../../context/userContext';
import { useEffect, useContext,useState } from 'react';

export const Profile = (props) => {
    
    const {username, screenName, tweetCount, joinDate, followCount, followerCount} = props;
    const globalState = useContext(UserContext);
    const [tweets, setTweets] = useState([]);


    const getTweets = async() => {
        try {
            const res = await fetch("https://firestore.googleapis.com/v1/projects/final-assignment-3e1d7/databases/(default)/documents/tweets/");
            const data = await res.json();
            console.log(data);

            const formatData = data.documents.map( (tweet) => {
                return tweet.fields;
            })
            const userTweets = formatData.filter(tweet => formatData.username === globalState.username);
            console.log(userTweets);
            setTweets(userTweets);

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
        <div>
            <Header hasArrow={true} title="Profile" hasSubtitle={true} subtitle={tweetCount + " Tweets"}/>
            <div className='profile'>
                <div className='banner'>
                    <img src={blankBanner}/>
                </div>
                <div className='profile-img'>
                    <img src={profilePic}/>
                    <Button type="tertiary" text="Set up profile"/>
                </div>
                
                <div className='profile-details'>
                    <p id='screen-name'>{screenName}</p>
                    <p id='username'>@{username}</p>
                    <p id='join-date'><BsCalendar3/> Joined {joinDate}</p>
                    <a href='/user/following'>{followCount} Following</a>
                    <a href='/user/followers'>{followerCount} Followers</a>
                </div>
            </div>
            <div id='user-tweets'>
                {
                    tweets.map((tweet) => <Tweet username={tweet.username.stringValue} screenName={tweet.screenName.stringValue} timePosted={getTimeDiff(tweet.datePosted.timestampValue)} content={tweet.content.stringValue} />)
                }
            </div>
        </div>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired, 
    screenName: PropTypes.string.isRequired, 
    tweetCount: PropTypes.number.isRequired, 
    joinDate: PropTypes.string.isRequired, 
    followCount: PropTypes.number.isRequired, 
    followerCount: PropTypes.number.isRequired
}

Profile.defaultProps = {
    username: "ArchivistShadow", 
    screenName: "Shadow", 
    tweetCount: 0, 
    joinDate: "May 2021", 
    followCount: 0, 
    followerCount: 0
}