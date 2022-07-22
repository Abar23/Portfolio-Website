import { React, useEffect } from 'react'
import { ProjectImage } from "./ProjectImage";
import { ProjectContentContainer } from "./ProjectContentContainer";

export const PortalMario = (props) => {

    useEffect(() => {
        props.setViewingResume(true);
      }, [props]);

    return (
        <div className='project-image-container'>
            <ProjectImage 
                imageUrl='https://images2.alphacoders.com/602/thumb-1920-602223.jpg'
                imageParallaxStrength={0}
                imageAlt='halo'
            />
        </div>
    )
}