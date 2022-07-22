import React from 'react'
import { Parallax } from 'react-parallax';
import '../Styles/ProjectImage.css';

export const ProjectImage = (props) => {

    return (
        <Parallax className='project-image-container'
            bgImage={props.imageUrl}
            strength={props.imageParallaxStrength}
            bgImageAlt={props.imageAlt}
            bgImageStyle={{
                position: 'absolute',
                width: '100%',
                height: 'auto',
                objectFit: 'cover'
            }}
        >
        </Parallax>
    )
}