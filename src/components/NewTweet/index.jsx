import './styles.css';
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import UserContext from '../../context/userContext';
import { useContext } from 'react';
import {GrClose} from 'react-icons/gr';

export const NewTweet = () => {

    const {register, handleSubmit} = useForm();

    const globalState = useContext(UserContext);

    const tweetID = () => {
        return Math.floor(Math.random()*100);
    }

    const postTweet = async(tweetVals) => {
        const formattedData = {
            fields: {
                id:{
                    integerValue: tweetID()
                },
                screenName:{
                    stringValue: globalState.screenName
                },
                username: {
                    stringValue: globalState.username
                },
                content: {
                    stringValue: tweetVals.content
                },
                datePosted: {
                    timestampValue: new Date()
                },
                likes: {
                    integerValue: 0
                },
                comments: {
                    integerValue: 0
                },
                retweets: {
                    integerValue: 0
                }
            }
        }

        try {
            const response = await fetch("https://firestore.googleapis.com/v1/projects/final-assignment-3e1d7/databases/(default)/documents/tweets/",
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(formattedData)
            });

        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div id='new-tweet'>
            <GrClose/>
            <form className='new-tweet' onSubmit={handleSubmit(postTweet)}>
                <input {...register("content")} type='text' maxLength={250} placeholder="What's happening?" required/>
                <input type='submit' value='Tweet'/>
            </form>
        </div>
    );
}