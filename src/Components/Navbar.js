import React, { useState, } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import { AiFillHome } from 'react-icons/ai';
import { BsPersonFill, BsFillBriefcaseFill, BsLinkedin, BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { Link } from 'react-scroll';
import '../Styles/Navbar.css';

export const Navbar = () => {
  const[mobileNavbar, setMobileNavbar] = useState(false);
  
  const handleMobileToggle = () => {
    setMobileNavbar(!mobileNavbar);
  }

  return (
    <div className='header'>
      <div className='navbar'>
        <div className='navbar-logo'>
          <h3 className='navbar-logo-name'>Anthony Bartholomew</h3>
          <h5 className='navbar-logo-subtext'>Full Stack, Graphics, Game Programmer</h5>
        </div>
        <ul className='navbar-links p-roboto-slab'>
          <Link to='home' offset={-85} spy={true} smooth={true} duration={100}> 
            <li className='homeNavLink underline'>
              Home
            </li>
          </Link> 
          <Link to='about' offset={-85} spy={true} smooth={true} duration={100}> 
            <li className=' aboutNavLink underline'>
                About
            </li>
          </Link>
          <Link to='projects' offset={-85} spy={true} smooth={true} duration={100}> 
            <li className='projectsNavLink underline'>
                Projects
            </li>
          </Link> 
          <Link to='connect' offset={-85} spy={true} smooth={true} duration={100}> 
            <li className='connectNavLink underline'>
                Connect
            </li>
          </Link> 
        </ul>
      </div>
      <div className='navbar-smallscreen'>
        <div className='navbar-smallscreen-toggle'>
          <Hamburger size={27} color='var(--color-white)' easing="ease" duration={0.85} toggled={mobileNavbar} onToggle={handleMobileToggle}/>
        </div>
        <div className={'navbar-smallscreen-overlay ' + (mobileNavbar ? 'show' : 'hide')}>
          <div className='navbar-smallscreen-logo'>
            <h3 className='navbar-logo-name'>Anthony Bartholomew</h3>
            <h5 className='navbar-logo-subtext'>Full Stack, Graphics, Game Programmer</h5>
          </div>
          <ul className='navbar-smallscreen-overlay-links p-roboto-slab'>
            <Link to='home' offset={-85} spy={true} smooth={true} duration={100} onClick={handleMobileToggle}> 
              <li className='homeNavLink-Mobile'>
                <span>
                  <AiFillHome />
                </span>
                <span>Home</span>
              </li>
            </Link> 
            <Link to='about' offset={-85} spy={true} smooth={true} duration={100} onClick={handleMobileToggle}> 
              <li className=' aboutNavLink-Mobile'>
                <BsPersonFill />
                <span>About</span>
              </li>
            </Link>
            <Link to='projects' offset={-85} spy={true} smooth={true} duration={100} onClick={handleMobileToggle}> 
              <li className='projectsNavLink-Mobile'>
                <BsFillBriefcaseFill />
                <span>Projects</span>
              </li>
            </Link> 
            <Link to='connect' offset={-85} spy={true} smooth={true} duration={100} onClick={handleMobileToggle}> 
              <li className='connectNavLink-Mobile'>
                <GrMail />
                <span>Connect</span>
              </li>
            </Link> 
          </ul>
          <ul className='navbar-smallscreen-overlay-socials'>
            <li>
              <a href='https://www.linkedin.com/in/anthony-bartholomew/'>
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a href='https://github.com/Abar23'>
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// Home, About - Pic of self with socials , Projects, Experience - all internships & professional experience, Resume - lead out to PDF, Contact