import React from 'react'
import Typewriter from 'typewriter-effect';
import { Parallax } from 'react-parallax';
import '../Styles/Home.css';

export const Home = React.forwardRef((props, refs) => {

    return (
        <div className='home container' ref={refs}>
            <Parallax   bgImage={'https://images2.alphacoders.com/602/thumb-1920-602223.jpg'}
                        strength={250}
                        bgImageStyle={{
                            position: 'absolute',
                            maxWidth: '100vw',
                            objectFit: 'cover'
                        }}>
                <div className='container-inner home-content'>
                    <div className='home-description'>
                        <h1>Hello!</h1>
                        <div className='home-description-typing-info'>
                            <span>I'm a&nbsp;</span>
                            <span>
                                <Typewriter
                                    options={{
                                        strings: ['Full Stack Developer.', 
                                                'Graphics Programmer.', 
                                                'Game Developer.'],
                                        cursor: ' \u2588',
                                        autoStart: true,
                                        loop: true,
                                        delay: 80
                                    }}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    )
})