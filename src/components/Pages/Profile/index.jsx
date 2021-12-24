import './styles.css';
import {IoArrowBack} from 'react-icons/io5';
import { Button } from '../../Button';
import PropTypes from 'prop-types';
import {BsCalendar3} from 'react-icons/bs';
import profilePic from '../../../assets/images/blank-profile-pic.png';
import blankBanner from '../../../assets/images/blank-banner.png';
import { Tweet } from '../../Tweet';
import { Header } from '../../Header';

export const Profile = (props) => {
    
    const {username, screenName, tweetCount, joinDate, followCount, followerCount} = props;
    
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
                <Tweet screenName="Shadow" username="ArchivistShadow" timePosted="33s" likes={3}/>
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