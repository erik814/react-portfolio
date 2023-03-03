import React, { useState } from 'react';

function Contact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

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

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !message) {
            alert("Please fill out all fields");
        } else {
            alert(`Thank you for your message, ${name}!`);
            setName("");
            setEmail("");
            setMessage("");
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
                        />
                    </div>

                    <button className='form-button' type="button" onClick={handleFormSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )

};


export default Contact;