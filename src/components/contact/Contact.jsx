import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'

function Contact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [thanksMessage, setThanksMessage] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "message") {
            setMessage(value);
        }
    };

    // service ID: service_ksxsk5o

    const handleFormSubmit = (event) => {
        event.preventDefault();
    
        if (!name || !email || !message) {
            alert("Please fill out all fields");
        } else {
            const emailjsVars = {
                from_name: name,
                from_email: email,
                message: message,
            };

            emailjs.send('service_ksxsk5o', 'template_sie47el', emailjsVars, 'Mpqlvb-S1yJ0Btw6A')
                .then((result) => {
                    console.log(result.text);
                    setName("");
                    setEmail("");
                    setMessage("");
                    setErrorMessage("");
                    setThanksMessage('Thank you for your message!');
                }, (error) => {
                    console.log(error.text);
                    setThanksMessage("");
                    setErrorMessage("There was an error sending your message. Please try again later.");
                });
        }
    };




    // const handleFormSubmit = (event) => {
    //     event.preventDefault();

    //     if (!name || !email || !message) {
    //         alert("Please fill out all fields");
    //     } else {
    //         setName("");
    //         setEmail("");
    //         setMessage("");
    //         setErrorMessage("");
    //         setThanksMessage(`Thank you for your message!`);
    //     }
    // };

    const handleInputEmpty = (event) => {
        const { name, value } = event.target;

        if (!value) {
            setErrorMessage(`Please enter your ${name}`);
        } else {
            const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

            if (!regex.test(email)) {
                setErrorMessage("Please enter a valid email address");
            } else {
                setErrorMessage("");
            }
        }
    };

    return(
        <div className='contact-container'>
            <h1>Contact Me</h1>
            <form>
                <div className="form-container">
                    <div className="form-section">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                            onBlur={handleInputEmpty}
                        />
                    </div>

                    <div className="form-section">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            onBlur={handleInputEmpty}
                        />
                    </div>

                    <div className="form-section">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            value={message}
                            onChange={handleInputChange}
                            onBlur={handleInputEmpty}
                        />
                    </div>

                    <button className='form-button' type="button" onClick={handleFormSubmit}>
                        Submit
                    </button>

                    {errorMessage && <div className="error">{errorMessage}</div>}
                    {thanksMessage && <div className="thanks">{thanksMessage}</div>}
                </div>
            </form>
        </div>
    )

};


export default Contact;