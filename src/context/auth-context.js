import React, { useState, useEffect } from "react";

// AuthContext is an object that contains component
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogOut: () => { },
    onLogIn: (email, password) => { },
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider
        value={{
            isLoggedIn: isLoggedIn,
            onLogOut: logoutHandler,
            onLogIn: loginHandler
        }}>{props.children}
    </AuthContext.Provider>;
}

export default AuthContext;