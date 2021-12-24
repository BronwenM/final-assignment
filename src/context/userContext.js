import React, { useState } from "react";

const UserContext = React.createContext({
    username: "",
    screenName: "",
    userTweets: [],
    initUserData: () => {},
    initTweets: () => {}
});

export const UserContextProvider = (props) => {
    const [username, setUsername] = useState("");
    const [screenname, setScreenname] = useState("");
    const [userTweets, setUserTweets] = useState([]);

    const initUserData = (username, screenName) => {
        setScreenname(screenName);
        setUsername(username);
    }

    const initTweets = (apiTweets) => {
        setUserTweets(apiTweets);
    }

    return(
        <UserContext.Provider
        value={{username: username, screenname: screenname, userTweets, initUserData: initUserData, initTweets: initTweets}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;