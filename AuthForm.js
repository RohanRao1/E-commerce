import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const authctx = useContext(AuthContext)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("clicked");
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setLoading(true);
    let url ;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDJCNUEHuD-qQhdqdtxJKjBqgSXdGB8S_c"
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDJCNUEHuD-qQhdqdtxJKjBqgSXdGB8S_c"
    } 

    fetch(
      url,
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setLoading(false);
        console.log("response is ", res);

        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log("data is ", data);
            let errorMessage = "Authentication failed";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authctx.login(data.idToken)
      })
      .catch((err) => {
        alert(err.message);
      });

    // if (isLogin) {
      // fetch(
      //   "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDJCNUEHuD-qQhdqdtxJKjBqgSXdGB8S_c",
      //   {
      //     method: "POST",
      //     body: JSON.stringify({
      //       email: enteredEmail,
      //       password: enteredPassword,
      //       returnSecureToken: true,
      //     }),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // ).then((res) => {
      //   setLoading(false);
      //   console.log('response is ',res);
        
      //   if (res.ok) {
      //     console.log("login Success");
      //     return res.json();
      //   } else {
      //     return res.json().then((data) => {
      //       console.log("data is ", data);
      //       let errorMessage = "Authentication failed";
            
      //       throw new Error(errorMessage)

      //     });
      //   }
      // }).then(data => {
      //   console.log(data)
      // }).catch(err => { 
      //   alert(err.message) 
      // })
    // }
    
    // else {
    //   fetch(
    //     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDJCNUEHuD-qQhdqdtxJKjBqgSXdGB8S_c",
    //     {
    //       method: "POST",
    //       body: JSON.stringify({
    //         email: enteredEmail,
    //         password: enteredPassword,
    //         returnSecureToken: true,
    //       }),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   ).then((res) => {
    //     setLoading(false);
    //     console.log(res);
    //     if (res.ok) {
    //       console.log("success");
    //     } else {
    //       return res.json().then((data) => {
    //         console.log("data is ", data);
    //         let errorMessage = "Authentication failed";
    //         if (data && data.error && data.error.message) {
    //           errorMessage = data.error.message;
    //         }

    //         alert(errorMessage);
    //       });
    //     }
    //   });
    // }
  };



  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {isLoading ? (
            "Loading"
          ) : (
            <button>{isLogin ? "Login" : "Create Account"} </button>
          )}
        </div>
        <div className={classes.actions}>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
