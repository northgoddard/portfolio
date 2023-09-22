import React from "react";
import { useState } from "react";

function Contact() {
    const [email, setEmail] = useState('');
    const [inputName, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) =>{

        const {name, value} = e.target;
        console.log(e.target);

        if(name === 'name'){
            console.log(value);
             setName(value)
        }else if (name === 'email'){
            console.log(value);
             setEmail(value)
        }else if (name === 'message'){
            console.log(value);
             setMessage(value)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault(); 
        setName('')
        setEmail('')
        setMessage('')
    }
    return (
        <div class="form-center">
            <form className="contact-form">
                <div className="mb-3">
                    <input type="email" value={email} onChange={handleInputChange} placeholder='email' className="form-control" name="email"/> 
                </div>
                <div className="mb-3">
                    <input type="text" value={inputName} onChange={handleInputChange} placeholder='name' className="form-control" name="name"/> 
                </div>
                <div className="mb-3">
                    <input type="textarea" value={message} onChange={handleInputChange} placeholder='message' className="form-control" name="message"/> 
                </div>
                <button type="submit" onClick={handleFormSubmit} className="btn">Submit</button>
            </form>
        </div>
    );
}

export default Contact;