import './styles.css';
import {IoArrowBack} from 'react-icons/io5';
import { Button } from '../../Button';
import PropTypes from 'prop-types';
import {BsCalendar3} from 'react-icons/bs';
import profilePic from '../../../assets/images/blank-profile-pic.png';
import blankBanner from '../../../assets/images/blank-banner.png';

export const Profile = (props) => {
    
    const {username, screenName, tweetCount, joinDate, followCount, followerCount} = props;
    
    return(
        <div>
            <header>
                <IoArrowBack/>
                <div id='header-text'>
                    <h3>Profile</h3>
                    <p>{tweetCount} Tweets</p>
                </div>                
            </header>
            <div className='profile-info'>
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