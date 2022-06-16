import React, { createRef, useState } from "react";
import { Navbar, Home, Resume, NotFound } from './Components/Components'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTopButton } from './Components/Components';
import './App.css';

function App() {
    const [viewingResume, setViewingResume] = useState(false);

    const [elementScrollData, setElementScrollData] = useState({ element: null, offset: 0 });

    const refs = [];

    const newRef = () => {
        let ref = createRef();
        refs.push(ref);
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
        threshold: 0.008,
        rootMargin: "-58% 0px -41% 0px"
    }

    return (
        <Router>
            <Navbar viewingResume={viewingResume} setViewingResume={setViewingResume} setElementScrollData={setElementScrollData} />
            <Routes>
                <Route path='/' element={<Home options={options} callback={callback} ref={[newRef(), newRef(), newRef(), newRef()]} setElementScrollData={setElementScrollData} elementScrollData={elementScrollData} />} />
                <Route path='/resume' element={<Resume setViewingResume={setViewingResume} />} />
                <Route path='*' element={<NotFound setViewingResume={setViewingResume} />} />
            </Routes>
            <ScrollToTopButton />
        </Router>
    );
}

export default App
