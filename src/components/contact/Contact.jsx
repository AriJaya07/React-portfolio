import React, { useRef, useState, useContext } from 'react';
import './contact.css';
import github from '../../img/github.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_9y2tcxs',
            'template_v89vddb',
            formRef.current,
            'BCebU5kxcGtnh2P7v'
        )
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={github} alt="" className="c-icon" />
                            AriJaya07
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            arijaya130@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Bali, Indonesia
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333", color: darkMode && 'white' }} type="text" placeholder="Name" name="user_name" />
                        <input style={{ backgroundColor: darkMode && "#333", color: darkMode && 'white' }} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{ backgroundColor: darkMode && "#333", color: darkMode && 'white' }} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{ backgroundColor: darkMode && "#333", color: darkMode && 'white' }} rows="5" placeholder="Message" name="message" />
                        <button type="submit" style={{ borderRadius: '15px'}}>Submit</button>
                        {done && " Thank You. I will respond soon..."}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;