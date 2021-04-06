import React, { useState } from 'react'
import "./ContactHero.css";
import {Button} from "./Button";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'


function ContactHero() {

    const [message, setMessage] = useState("Your message");

    const handleChange = (event) => {
        setMessage(event.target.value);
    }
    const clearValue = () => {
        setMessage("");
    }


    function sendEmail(e) {
       /* e.preventDefault();
    
        emailjs.sendForm('service_8i41bav', 'template_xnxh5ew', e.target, 'user_PQ7gyW7ogbb3RUw963d7N')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          */
      }
    
    return (
        <div className="contact--container">
            <div className="contact--wrapper">
                <div className="contact--banner-top">
                    <img src=".././images/krezzy-logo-darkbg.png" alt="krezzyy-logo" className="contact--logo-style"/>
                </div>
                <div className="contact--info-bar">
                    <div className="contact--info-bar-item">
                        <FaPhone style={{color: '#fff'}}/>
                        <h2 className="contact--item-header">Phone</h2>
                        <p className="contact--item-body">+1 708-252-1074</p>
                    </div>
                    <div className="contact--info-bar-item middle">
                        <FaEnvelope style={{color: '#fff'}}/>
                        <h2 className="contact--item-header">Email</h2>
                        <p className="contact--item-body">Krezzyy@krezzyystudios.com</p>
                    
                    </div>
                    <div className="contact--info-bar-item">
                        <FaMapMarkerAlt style={{color: '#fff'}}></FaMapMarkerAlt>
                        <h2 className="contact--item-header">Address</h2>
                        <p className="contact--item-body">266 Lake St, Oak Park, IL 60302</p>
                    </div>
                </div>

                <div className="contact--form-wrapper" >
                    
                <form className="contact--form-style" onSubmit={sendEmail}>
                    <input
                        className='contact--input'
                        name='name'
                        type='name'
                        placeholder='Your Full Name'
                    />
                    <input
                        className='contact--input'
                        name='email'
                        type='email'
                        placeholder='Your Email'
                    />
                    <input
                        className='contact--input'
                        name='phone'
                        type='phone'
                        placeholder='Your phone number'
                    />
                    <textarea onFocus={clearValue} className="contact--body" value={message} onChange={handleChange} />

                    <Button buttonStyle='btn--outline video' type='submit'>Submit</Button>
                </form>
                </div>




            </div>

            
        </div>
    )
}

export default ContactHero
