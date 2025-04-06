import React from 'react'
import { BsFillPhoneFill, BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import '../Styles/Contact.css';

export const Contact = React.forwardRef((props, refs) => {

    return (
        <div className='contact container background-light-black' ref={refs}>
            <div className='container-inner'>
                <div className='section-title align-to-center'>
                    <h2>Contact Me</h2>
                </div>
                <br />
                <div className='align-to-center'>
                    <div className='contact-box'>
                        <div className='contact-section'>
                            <div className='contact-icon-container'>
                                <GrMail className='contact-icon' />
                            </div>
                            <div className='contact-info'>
                                <h1>Email</h1>
                                <p>abar15.abb@gmail.com</p>
                            </div>
                        </div>
                        <div className='contact-section'>
                            <div className='contact-icon-container'>
                                <BsFillPhoneFill className='contact-icon' />
                            </div>
                            <div className='contact-info'>
                                <h1>Phone</h1>
                                <p>+1 614-593-2924</p>
                            </div>
                        </div>
                        <div className='contact-section'>
                            <div className='contact-icon-container'>
                                <MdLocationPin className='contact-icon' />
                            </div>
                            <div className='contact-info'>
                                <h1>Location</h1>
                                <p>Washington, United States</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='contact-socials'>
                    <div>
                        <a href='https://www.linkedin.com/in/anthony-bartholomew/'>
                            <BsLinkedin className='contact-socials-icon'/>
                        </a>
                    </div>
                    <div>
                        <a href='https://github.com/Abar23'>
                            <BsGithub className='contact-socials-icon'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
})