import { useRef, useContext } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context'
import {useHistory} from 'react-router-dom'

const ProfileForm = () => {
  const passwordInput = useRef()
  const authCtx = useContext(AuthContext)
  const history = useHistory()

  const submitHandler = event => {
    event.preventDefault()

    const enteredPassword = passwordInput.current.value

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDJCNUEHuD-qQhdqdtxJKjBqgSXdGB8S_c",{
      method : 'POST',
      body : JSON.stringify({
        idToken : authCtx.token,
        password : enteredPassword,
        returnSecureToken : false
      }),
      headers : {
        'Content-Type': 'application/json'
      }
    }
    ).then( res => {
        console.log(res)
        history.replace('/')
    }) 
  }

  return (
    <form className={classes.form} onSubmit={submitHandler} >
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='6' ref={passwordInput} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
