import React from 'react'
import { Parallax } from 'react-parallax';
import '../Styles/ProjectImage.css';

export const ProjectImage = (props) => {

    return (
        <div className='project-image-container background-light-black'>
            <Parallax className='project-image-container'
                bgImage={props.imageUrl}
                strength={props.imageParallaxStrength}
                bgImageAlt={props.imageAlt}
                bgImageStyle={{
                    position: 'absolute',
                    maxWidth: '100%',
                    objectFit: 'cover'
                }}
            />
        </div>
    )
}