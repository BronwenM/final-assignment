import './styles.css';
import  defaultProfile from '../../assets/images/blank-profile-pic.png';
import {FaRegComment} from 'react-icons/fa';
import {AiOutlineRetweet, AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {FiShare} from 'react-icons/fi';
import PropTypes from 'prop-types';

export const Tweet = (props) => {

    const {username, screenName, timePosted, content, comments, retweets, likes} = props;

    return (
        <div className="tweet">
            <img className="profile-picture" src={defaultProfile} alt="default profile picture"/>
            
            <div className='tweet-content'>
                <div className="profile-info">
                    <span className='screen-name'>{screenName}</span> <span className="username">@{username}</span> <span>·</span> <span className='timePosted'>{timePosted}</span>
                </div>
                {content}
                <div className='interactions'>
                <ul>
                    <li>
                        <button><FaRegComment/>{comments}</button>
                    </li>
                    <li>
                        <button><AiOutlineRetweet/>{retweets}</button>
                    </li>
                    <li>
                        <button><AiOutlineHeart/>{likes}</button>
                    </li>
                    <li>
                        <button><FiShare/></button>
                    </li>
                </ul>
            </div>
            </div>
            

        </div>
    );
}

Tweet.propTypes = {
    username: PropTypes.string.isRequired,
    screenName: PropTypes.string.isRequired,
    timePosted: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    comments: PropTypes.number,
    retweets: PropTypes.number,
    likes: PropTypes.number
}

Tweet.defaultProps = {
    username: "DefaultUser",
    screenName: "Default",
    timePosted: "No Date",
    content: "This tweet is super cool and the author isn't crazy for making another version of twitter.",
    comments: null,
    retweets: null,
    likes: null
}