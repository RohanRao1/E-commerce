import React, {useRef, useState, useContext} from "react";
import classes from './Login.module.css'
import { useHistory } from "react-router-dom";
import AuthContext from "./AuthContext";

const Login = () => {
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const [isLoading , setIsLoading] = useState(false)
    const [isLogin, setIsLogin] = useState(true) 
    const history = useHistory()
    const authCtx = useContext(AuthContext)

    const toggleform = () => {
      setIsLogin(prev => !prev)
    }

    const submitHandler = event => {
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value
        setIsLoading(true)

        if (isLogin) {
        fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDqqCcw_UvAfSEB8BYNWnEKrbmO3sDjlqU",{
            method : "POST",
            body : JSON.stringify({
                email : enteredEmail,
                password : enteredPassword,
                returnSecureToken : true
            }),
            headers : {
                'Content-Type' : 'application/json'
            }
          }
        ).then(res => {
            setIsLoading(false)
            if (res.ok){
                console.log(res)
                return res.json()
            } else {
                return res.json().then(data => {
                    console.log(data)
                    let errormsg = 'Authentication failed'
                    if (data && data.error.message) {
                        errormsg = data.error.message
                    }
                    
                    throw new Error(errormsg)
                })
            }
        }).then(data => {
          console.log(data)
          authCtx.login(data.idToken)
           history.replace('/store')
        }).catch(err => alert(err) )
      } 
      else {
        fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDqqCcw_UvAfSEB8BYNWnEKrbmO3sDjlqU",{
            method : 'POST',
            body : JSON.stringify({
              email : enteredEmail,
              password : enteredPassword,
              returnSecureToken : true
            }),
            headers : {
              "Content-Type" : "application/json"
            }
          }
        ).then(res => {
          setIsLoading(false)
          if (!res.ok) {
          return res.json().then(data => {
            alert(data.error.message)
          })
          } 
        })
    }
  }


    return (
      <React.Fragment>
        <form onSubmit={submitHandler} className={classes.form}>
          <h1>{isLogin ? 'LOGIN' : 'SIGNUP'}</h1>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
          {isLoading ? "Loading..." : <button type="submit">{isLogin? 'LOGIN' : 'SIGNUP'}</button>}
          <div className={classes.action}>
            <button type="button" className={classes.toggle} onClick={toggleform} >
              {isLogin ? 'Dont Have an Account?? Create New One' : 'Login To Existing Account' }
            </button>
          </div>
        </form>
      </React.Fragment>
    );
}


export default Login