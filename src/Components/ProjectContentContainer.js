import React from 'react'
import '../Styles/ProjectContentContainer.css';

export const ProjectContentContainer = (props) => {

    return (
        <div className='container background-light-black'>
            {props.children}
        </div>
    )
}