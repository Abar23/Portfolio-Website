import React, { createRef } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { MainPage, Resume, NotFound, PortalMario } from './Components';
import { AnimatePresence } from 'framer-motion'

export const AnimatedRoutes = (props) => {

    const references = [];

    let location = useLocation();

    const newRef = () => {
        let ref = createRef();
        references.push(ref);
        return ref;
    };

    const callback = (sections) => {
        sections.forEach(section => {
            let navLinks = window.document.querySelectorAll('.' + section.target.classList[0] + 'NavLink');
            if (navLinks[0]) {
                navLinks[0].classList.toggle('activeClass', section.isIntersecting);
            }

            navLinks = window.document.querySelectorAll('.' + section.target.classList[0] + 'NavLink-Mobile');
            if (navLinks[0]) {
                navLinks[0].childNodes[0].classList.toggle('activeClassMobileIcon', section.isIntersecting);
                navLinks[0].childNodes[1].classList.toggle('activeClassMobileText', section.isIntersecting);
            }
        })
    }

    const options = {
        threshold: 0.0,
        rootMargin: "-58.99% 0px -41% 0px"
    }

    return (
        <AnimatePresence initial={false} exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<MainPage options={options} callback={callback} ref={[newRef(), newRef(), newRef(), newRef()]} setElementScrollData={props.setElementScrollData} elementScrollData={props.elementScrollData} />} />
                <Route path='/resume' element={<Resume setViewingResume={props.setViewingResume} />} />
                <Route path='/portal-mario' element={<PortalMario setViewingResume={props.setViewingResume} />} />
                <Route path='*' element={<NotFound setViewingResume={props.setViewingResume} />} />
            </Routes>
        </AnimatePresence>
    )
}
