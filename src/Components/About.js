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
                        Hello! My name is Anthony. I am a passionate games and computer graphics programmer located in the United States. In my spare time, 
                        I love learning how to develop game engines from scratch, playing around with 3D modeling software, tinkering with modern graphics 
                        APIs, and developing games using custom or commercially available engines.
                    </p>
                    <br/>
                    <p>
                        In my professional career, I have worked as a Full Stack developer in the banking industry. During my time in that role, I gained 
                        experience implementing customer facing web applications, maintaining distributed microservices, managing databases, and creating
                        REST APIs.
                    </p>
                    <br/>
                    <p>
                        Currently, I am chasing my dream of working in the games industry by pursuing an M.S. in Computer Science specializing in Computer 
                        Graphics at Digipen Institute of Technology. In the future, I hope I can share AAA or indie titles that I have contributed to!
                    </p>
                </div>
            </div>
        </div>
    )
})