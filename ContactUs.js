import React, {useRef} from "react";
import classes from './ContactUs.module.css'


const ContactUs = () => {
    const nameInputRef = useRef()
    const emailInputRef = useRef()
    const phnoInputRef = useRef()

    const submitHandler = async(event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredEmail = emailInputRef.current.value
        const enteredPhone = phnoInputRef.current.value

        const userDetails = {
            name : enteredName,
            email : enteredEmail,
            phone : enteredPhone
        }
        
        const response = await fetch(
          "https://ecommerce-e61c7-default-rtdb.firebaseio.com/users.json",
          {
            method: "POST",
            body: JSON.stringify(userDetails),
            headers: {
              "Content-Type": "application/json",
            }
          }
        );

        console.log(response)

        nameInputRef.current.value = ''
        emailInputRef.current.value = "";
        phnoInputRef.current.value = "";
    }


    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <label>Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        <label>Email </label>
        <input type="email" id="email" ref={emailInputRef} />
        <label>Phone Number </label>
        <input type="number" id="number" minLength='10' maxLength='10' ref={phnoInputRef} />
        <button>SUBMIT</button>
      </form>
    );
}


export default ContactUs