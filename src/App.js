import React, { createRef, useEffect } from "react";
import { Navbar } from "./Components/Navbar";
import { Element } from 'react-scroll';
import './App.css';

function App() {
  const refs = [];

  const newRef = () => {
    let ref = createRef();
    refs.push(ref);
    return ref;
  };

  const callback = (sections) => {
    sections.forEach(section => {
      let navLinks = window.document.querySelectorAll('.' + section.target.classList[0] + 'NavLink');
      navLinks[0].classList.toggle('activeClass', section.isIntersecting);

      navLinks = window.document.querySelectorAll('.' + section.target.classList[0] + 'NavLink-Mobile');
      navLinks[0].childNodes[0].classList.toggle('activeClassMobileIcon', section.isIntersecting)
      navLinks[0].childNodes[1].classList.toggle('activeClassMobileText', section.isIntersecting)
    })
  }

  const options = {
    threshold: 0.008,
    rootMargin: "-44% 0px -55% 0px"
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    refs.forEach((ref) => {
      if(ref.current != null) {
        observer.observe(ref.current);
      }
   });

    return () => {
      refs.forEach((ref) =>{
         ref.current && observer.unobserve(ref.current);
      });
    };
  })

  return (
    <div>
      <Navbar />
      <Element>
        <div className='home' ref={newRef()}>
          Hi
        </div>
      </Element>
      <Element>
        <div className='about' ref={newRef()}>
          About
        </div>
      </Element>
      <Element>
        <div className='projects' ref={newRef()}>
          Projects
        </div>
      </Element>
      <Element>
        <div className='connect' ref={newRef()}>
          Connect
        </div>
      </Element>
    </div>
  );
}

export default App
