import React, {useState} from "react"

const AuthContext = React.createContext({
    token : '',
    isLoggedIn :  false,
    login : (token) => {},
    logout : () => {}
})

export const AuthContextProvider = (props) => {
    console.log('came')
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken)

    const userIsLoggedIN = token ? true : false

    const loginHandler = (token) => {
        setToken(token)
        localStorage.setItem('token', token)
    }

    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
    }

    const contextValue = {
        token : token,
        isLoggedIn : userIsLoggedIN,
        login : loginHandler,
        logout : logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}


export default AuthContext