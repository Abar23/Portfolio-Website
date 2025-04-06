import React from 'react'
import '../Styles/About.css';

export const About = React.forwardRef((props, refs) => {

    return (
        <div className='about container background-light-black' ref={refs}>
            <div className='container-inner about-container-inner-border-style'>
                <div className='section-title'>
                    <h2>About Me</h2>
                </div>
                <div className='contact-description'>
                    <p>
                    Hello! My name is Anthony. I am currently an Associate Game Programmer at Heavy Iron Studios, where I develop games using Unreal Engine 5. 
                    In my spare time, I enjoy exploring 3D modeling software, experimenting with modern graphics APIs, and creating games with both custom and 
                    commercially available engines.
                    </p>
                    <br/>
                </div>
            </div>
        </div>
    )
})