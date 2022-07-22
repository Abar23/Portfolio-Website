import React, { useState, useEffect, useRef } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md'
import '../Styles/ScrollToTopButton.css';

export const ScrollToTopButton = () => {

    const scrollToTopButton = useRef();
    
    const [scrollButtonVisibility, setscrollButtonVisibility] = useState(null);

    const toggleScrollButtonVisibility = () => {
        let scrollYOffset = window.document.documentElement.scrollTop;
        if (scrollYOffset > 300) {
            setscrollButtonVisibility(true); 
        } else {
            setscrollButtonVisibility(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleScrollButtonVisibility);

        return () => {
            window.removeEventListener("scroll", toggleScrollButtonVisibility);
        };
    }, []);

    return (
        <button className={'scroll-to-top-button ' + (scrollButtonVisibility ? 'scroll-button-animate-show' : 'scroll-button-animate-hide')} onClick={scrollToTop} ref={scrollToTopButton}>
            <MdKeyboardArrowUp />
        </button>
    )
}