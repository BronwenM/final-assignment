import './styles.css';
import { NavLink } from 'react-router-dom';
import {RiHome7Line, RiHome7Fill, RiFileList2Line} from 'react-icons/ri';
import {BiHash} from 'react-icons/bi';
import {IoNotificationsOutline, IoLogoTwitter} from 'react-icons/io5';
import {MdMailOutline} from 'react-icons/md';
import {BsBookmark, BsPerson} from 'react-icons/bs';
import {CgMoreO, CgSearch} from 'react-icons/cg';
import { useState } from 'react';

export const Navbar = () => {

    {/* For later to set active link so that icons can be set conditionally */}
    const [activeLink, setActiveLink] = useState(null);

    return(
        <nav className="navbar">
            {/* Nav for desktop */}
            <ul className='navbar-links nav-side'>
                <li className='twitter-icon'>
                    <NavLink to="/home"><IoLogoTwitter/></NavLink>
                </li>
                <li>
                    <NavLink to="/home"><RiHome7Line/><span className="link-title"> Home</span></NavLink>
                </li>
                <li>
                    <NavLink to="/explore"><BiHash/> <span className="link-title">Explore</span></NavLink>
                </li>
                <li>
                    <NavLink to="/notifications"><IoNotificationsOutline/> <span className="link-title">Notifications</span></NavLink>
                </li>
                <li>
                    <NavLink to="/messages"><MdMailOutline/> <span className="link-title">Messages</span></NavLink>
                </li>
                <li>
                    <NavLink to="/i/bookmarks"><BsBookmark/> <span className="link-title">Bookmarks</span></NavLink>
                </li>
                <li>
                    <NavLink to="/user/lists"><RiFileList2Line/> <span className="link-title">Lists</span></NavLink>
                </li>
                <li>
                    <NavLink to="/user"><BsPerson/> <span className="link-title">Profile</span></NavLink>
                </li>
                <li>
                    <a className="logo" href='#'><CgMoreO/> <span className="link-title">More</span></a>
                </li>
            </ul>

            {/* Nav for mobile */}
            <ul className="nav-bottom">
                <li>
                    <NavLink to="/home"><RiHome7Line/></NavLink>
                </li>
                <li>
                    <NavLink to="/explore"><CgSearch/></NavLink>
                </li>
                <li>
                    <NavLink to="/notifications"><IoNotificationsOutline/></NavLink>
                </li>
                <li>
                    <NavLink to="/messages"><MdMailOutline/></NavLink>
                </li>
            </ul>
        </nav>
    );
}