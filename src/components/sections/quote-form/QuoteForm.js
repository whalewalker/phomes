import React, {useState} from 'react';
import "./Quote-form.css";
import emailjs from "emailjs-com";

const QuoteForm = () => {
    const [quote, setQuote] = useState("");


    const submitHandler = event => {
        event.preventDefault();
        emailjs.sendForm('service_1sufxso', 'pthomes_template', event.target, 'user_mmydYoH3id1SB7HG5vhIi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset();
    }

    function changeHandler(e) {
        e.persist();
        setQuote(e.target.value);
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
                        <p className="phone"> (+234) - 810 - 987 - 7665 <br/>
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
                        <input type="text" placeholder="Your Name" name="name" value={quote.name}
                               onChange={changeHandler}/>

                    </div>
                    <div className="input-wrapper">
                        <div className="input-control">
                            <input type="email" value={quote.email} name="email" placeholder="Email Address"
                                   onChange={changeHandler}/>
                        </div>
                        <div className="input-control">
                            <input type="text" value={quote.number} name="number" placeholder="Phone Number"
                                   onChange={changeHandler}/>
                        </div>
                    </div>

                    <div className="input-control">
                        <textarea name="message" value={quote.message} cols="10" rows="10" placeholder="Type Message"
                                  onChange={changeHandler}/>
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