import React, { useState } from "react";

const UserContext = React.createContext({
    username: "",
    screenName: "",
    userID: null,
    userTweets: [],
    initUserData: () => {},
    initUserID: () => {},
    initTweets: () => {}
});

export const UserContextProvider = (props) => {
    const [username, setUsername] = useState("");
    const [screenname, setScreenname] = useState("");
    const [userTweets, setUserTweets] = useState([]);
    const [userID, setUserID] = useState(null);

    const initUserData = (username, screenName) => {
        setScreenname(screenName);
        setUsername(username);
    }

    const initUserID = (userID) => {
        setUserID(userID);
    }

    const initTweets = (apiTweets) => {
        setUserTweets(apiTweets);
    }

    return(
        <UserContext.Provider
        value={{username: username, screenname: screenname, userTweets, userID: userID, initUserData: initUserData, initUserID: initUserID,initTweets: initTweets}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;