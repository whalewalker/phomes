import React, {useState} from 'react';
import "./Quote-form.css";
import {sendMail} from "../../../EmailJs";

const QuoteForm = () => {

    const validEmailRegex = RegExp( /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    const validateForm = errors =>{
        let valid = true;
        Object.values(errors).forEach(value => value.length > 0 && (valid = false));
        return valid;
    }
    // const data = {};

    const [quote, setQuote] = useState({});
    const [errors, setErrors] = useState({
            fullName: "",
            email: '',
            phoneNumber: '',
    })





    const changeHandler = event => {
        event.preventDefault();
        const {name, value} = event.target;

        // eslint-disable-next-line default-case
        switch (name) {
            case "fullName":
                errors.fullName = value.length < 5 ? "Full Name must be at least 5 characters long!" : "";
                break;

            case "email":
                errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
                break;

            case "phoneNumber":
                errors.phoneNumber = (isNaN(value) && (value.length < 11 || value.length > 11)) ? "Number must be a number and contain 11 digit" : "";
                break;
        }


        const updatedDetails = {
            ...quote
        };
        updatedDetails[name] = value;
        setQuote(updatedDetails);


        const updatedError = {
            ...errors
        }
        updatedError[name] = errors[name];
        setErrors(updatedError);

    }

    const submitHandler = event =>{
        event.preventDefault();
        if (validateForm(errors)){
            sendMail(quote)
            console.log(quote);
        }else {
            console.log("Invalid Form")
        }
    }

    return (
        <div className="form-wrapper">
            <div className="wrapper-section media-content">
                <h1>Let's <span>Talk</span></h1>
                <p>We’ll love to hear from you. Please use any of the options below to reach out to us. You can also
                    drop a message via the form on the right side of the screen.</p>

                <div className="media">
                    <div className="media-section">
                        <img src={require("../../../static/images/phone.png").default} alt="phone"/>
                        <p>(+234) - 810 - 987 - 7665 <br/>
                            (+234) - 810 - 987 - 7665.</p>
                    </div>
                    <div className="media-section">
                        <img src={require("../../../static/images/mail.png").default} alt="mail"/>
                        <p>sample@gmail.com</p>
                    </div>
                    <div className="media-section">
                        <img src={require("../../../static/images/address.png").default} alt="address"/>
                        <p>22, Address Street, City, Lagos, Nigeria.</p>
                    </div>
                </div>
            </div>
            <div className="wrapper-section form">
                <h3>Send message</h3>
                <p>Please, enter the details of your message below.</p>

                <form onSubmit={submitHandler} noValidate>
                    <div className="input-control">
                        <input type="text" placeholder="Your Name" name="fullName" value={quote.fullName} onChange={changeHandler}/>
                        {errors.fullName.length > 0 &&
                        <span className='error'>{errors.fullName}</span>}
                    </div>
                    <div className="input-wrapper">
                        <div className="input-control">
                            <input type="email" value={quote.email}  name="email" placeholder="Email Address" onChange={changeHandler}/>
                            {errors.email.length > 0 &&
                            <span className='error'>{errors.email}</span>}
                        </div>
                        <div className="input-control">
                            <input type="text" value={quote.phoneNumber}   name="phoneNumber" placeholder="Phone Number" onChange={changeHandler}/>
                            {errors.phoneNumber.length > 0 &&
                            <span className='error'>{errors.phoneNumber}</span>}
                        </div>
                    </div>

                    <div className="input-control">
                        <textarea name="text"  value={quote.text} cols="10" rows="10"  placeholder="Type Message" onChange={changeHandler}/>
                    </div>
                    <p>By clicking the send button, you agree to our <span>Terms of Use</span> .</p>
                    <div className="input-control">
                        <input type="submit" value="Send Message"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuoteForm;