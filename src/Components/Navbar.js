import React, { useState, useEffect } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import { AiFillHome } from 'react-icons/ai';
import { BsPersonFill, BsFillBriefcaseFill, BsLinkedin, BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { Link } from 'react-scroll';
import { IoIosPaper } from 'react-icons/io';
import { Link as RouterLink } from 'react-router-dom';
import '../Styles/Navbar.css';

export const Navbar = (props) => {
    const [mobileNavbar, setMobileNavbar] = useState(false);

    const handleMobileToggle = () => {
        setMobileNavbar(!mobileNavbar);

        window.document.body.style.overflow = !mobileNavbar ? "hidden" : "auto";

        let mobileNavOverlay = window.document.querySelector('.navbar-smallscreen-overlay');
        if (!mobileNavbar) {
            mobileNavOverlay.classList.add('show');
            mobileNavOverlay.classList.remove('hide');
            mobileNavOverlay.classList.remove('animated-hide');
            window.document.body.classList.add('overlay');
        } else {
            mobileNavOverlay.classList.remove('show');
            window.document.body.classList.remove('overlay');
            mobileNavOverlay.classList.add('animated-hide');
        }
    }

    const handleResumeView = () => {
        props.setViewingResume(true);
    }

    const handleHomeViewTransition = (event) => {
        homeViewTransition(event);
    }

    const handleMobileHomeViewTransition = (event) => {
        homeViewTransition(event);
        handleMobileToggle();
    }

    const homeViewTransition = (event) => {
        props.setViewingResume(false);
        props.setElementScrollData({
            element: event.target.childNodes[0].data.toLowerCase()
        });
        window.document.body.style.overflow = "auto";
    }

    const handleLogoClick = () => {
        if(mobileNavbar) {
            handleMobileToggle();
        }

        if(props.viewingResume) {
            props.setViewingResume(false);
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });        
        }
    }

    useEffect(() => {
        const handleMobileResize = () => {
            if (window.innerWidth > 1024) {
                window.document.body.style.overflow = "auto";
    
                setMobileNavbar(false);
    
                let mobileNavOverlay = window.document.querySelector('.navbar-smallscreen-overlay');
                mobileNavOverlay.classList.remove('show');
                mobileNavOverlay.classList.add('animated-hide');
            }
        }
        
        window.addEventListener("resize", handleMobileResize);

        return () => {
            window.removeEventListener("resize", handleMobileResize);
        };
    }, [props]);

    return (
        <div className='navbar-header'>
            <div className='navbar-header-inner'>
                <div className='navbar'>
                    <RouterLink to='/' className='p-nav-link-text' onClick={handleLogoClick}>
                        <div className='navbar-logo'>
                            <h3 className='navbar-logo-name'>Anthony Bartholomew</h3>
                            <p className='navbar-logo-subtext'>Graphics, Game, Full Stack Programmer</p>
                        </div>
                    </RouterLink>
                    <div>
                        <ul className='navbar-links p-nav-link-text'>
                            {!props.viewingResume &&
                                (<>
                                    <Link to='home' offset={-90} spy={true} smooth={true} duration={100}>
                                        <li className='homeNavLink underline'>
                                            Home
                                        </li>
                                    </Link>
                                    <Link to='about' offset={-90} spy={true} smooth={true} duration={100}>
                                        <li className=' aboutNavLink underline'>
                                            About
                                        </li>
                                    </Link>
                                    <Link to='projects' offset={-90} spy={true} smooth={true} duration={100}>
                                        <li className='projectsNavLink underline'>
                                            Projects
                                        </li>
                                    </Link>
                                    <Link to='contact' offset={-90} spy={true} smooth={true} duration={100}>
                                        <li className='contactNavLink underline'>
                                            Contact
                                        </li>
                                    </Link>
                                </>
                                )
                            }
                            {props.viewingResume &&
                                (<>
                                    <RouterLink to='/' className='p-nav-link-text' onClick={handleHomeViewTransition}>
                                        <li className='homeNavLink underline'>
                                            Home
                                        </li>
                                    </RouterLink>
                                    <RouterLink to='/' className='p-nav-link-text' onClick={handleHomeViewTransition}>
                                        <li className=' aboutNavLink underline'>
                                            About
                                        </li>
                                    </RouterLink>
                                    <RouterLink to='/' className='p-nav-link-text' onClick={handleHomeViewTransition}>
                                        <li className='projectsNavLink underline'>
                                            Projects
                                        </li>
                                    </RouterLink>
                                    <RouterLink to='/' className='p-nav-link-text' onClick={handleHomeViewTransition}>
                                        <li className='ContactNavLink underline'>
                                            Contact
                                        </li>
                                    </RouterLink>
                                </>
                                )
                            }
                            <RouterLink to='/resume' className='p-nav-link-text' onClick={handleResumeView}>
                                <li className='resumeNavLink underline'>
                                    Resume
                                </li>
                            </RouterLink>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='navbar-smallscreen'>
                <div className='navbar-smallscreen-toggle no-highlight'>
                    <Hamburger size={27} color='var(--color-white)' easing="ease" duration={0.85} toggled={mobileNavbar} onToggle={handleMobileToggle} />
                </div>
                <div className='navbar-smallscreen-overlay hide'>
                    <RouterLink to='/' className='p-nav-link-text' onClick={handleMobileHomeViewTransition}>
                        <div className='navbar-smallscreen-logo'>
                            <h3 className='navbar-logo-name'>Anthony Bartholomew</h3>
                            <h5 className='navbar-logo-subtext'>Full Stack, Graphics, Game Programmer</h5>
                        </div>
                    </RouterLink>
                    <ul className='navbar-smallscreen-overlay-links p-nav-link-text'>
                        {!props.viewingResume && (
                            <>
                                <Link to='home' spy={true} smooth={true} duration={100} onClick={handleMobileToggle}>
                                    <li>
                                        <div className='navbar-smallscreen-overlay-icon-text homeNavLink-Mobile'>
                                            <AiFillHome />
                                            <span>Home</span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to='about' spy={true} smooth={true} duration={100} onClick={handleMobileToggle}>
                                    <li>
                                        <div className='navbar-smallscreen-overlay-icon-text aboutNavLink-Mobile'>
                                            <BsPersonFill />
                                            <span>About</span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to='projects' spy={true} smooth={true} duration={100} onClick={handleMobileToggle}>
                                    <li>
                                        <div className='navbar-smallscreen-overlay-icon-text projectsNavLink-Mobile'>
                                            <BsFillBriefcaseFill />
                                            <span>Projects</span>
                                        </div>
                                    </li>
                                </Link>
                                <Link to='contact' spy={true} smooth={true} duration={100} onClick={handleMobileToggle}>
                                    <li>
                                        <div className='navbar-smallscreen-overlay-icon-text contactNavLink-Mobile'>
                                            <GrMail />
                                            <span>Contact</span>
                                        </div>
                                    </li>
                                </Link>
                            </>
                        )}
                        {props.viewingResume && (
                            <>
                                <RouterLink to='/' className='p-nav-link-text' onClick={handleMobileHomeViewTransition}>
                                    <li>
                                        <div className='navbar-smallscreen-overlay-icon-text homeNavLink-Mobile'>
                                            <AiFillHome />
                                            <span>Home</span>
                                        </div>
                                    </li>
                                </RouterLink>
                                <RouterLink to='/' className='p-nav-link-text' onClick={handleMobileHomeViewTransition}>
                                    <li>
                                        <div className='navbar-smallscreen-overlay-icon-text aboutNavLink-Mobile'>
                                            <BsPersonFill />
                                            <span>About</span>
                                        </div>
                                    </li>
                                </RouterLink>
                                <RouterLink to='/' className='p-nav-link-text' onClick={handleMobileHomeViewTransition}>
                                    <li>
                                        <div className='navbar-smallscreen-overlay-icon-text projectsNavLink-Mobile'>
                                            <BsFillBriefcaseFill />
                                            <span>Projects</span>
                                        </div>
                                    </li>
                                </RouterLink>
                                <RouterLink to='/' className='p-nav-link-text' onClick={handleMobileHomeViewTransition}>
                                    <li>
                                        <div className='navbar-smallscreen-overlay-icon-text contactNavLink-Mobile'>
                                            <GrMail />
                                            <span>Contact</span>
                                        </div>
                                    </li>
                                </RouterLink>
                            </>
                        )}
                        <RouterLink to='/resume' className='p-nav-link-text' onClick={handleMobileToggle}>
                            <li>
                                <div className='navbar-smallscreen-overlay-icon-text resumeNavLink-Mobile'>
                                    <IoIosPaper />
                                    <span>Resume</span>
                                </div>
                            </li>
                        </RouterLink>
                    </ul>
                    <ul className='navbar-smallscreen-overlay-socials'>
                        <li className='no-highlight'>
                            <a href='https://www.linkedin.com/in/anthony-bartholomew/' onClick={handleMobileToggle}>
                                <BsLinkedin />
                            </a>
                        </li>
                        <li className='no-highlight'>
                            <a href='https://github.com/Abar23' onClick={handleMobileToggle}>
                                <BsGithub />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}