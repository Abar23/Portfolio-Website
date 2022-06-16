import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Styles/NotFound.css';

export const NotFound = (props) => {

  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/');
  }

  useEffect(() => {
    props.setViewingResume(true);

    window.document.body.style.overflow = 'hidden';

    window.scrollTo({
      top: 90,
      behavior: 'instant'
    })
    
    window.setTimeout(redirectToHome, 5000);

    return () => {
      props.setViewingResume(false);
      window.document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='contact container background-light-black'>
      <div className='container-inner-no-padding'>
        <div className='not-found'>
          <div className='not-found-header'>
            <h1>
              404
            </h1>
          </div>
          <div className='not-found-text'>
            <p>Looks like your page is another castle.</p>
          </div>
        </div>
      </div>
    </div>
  )
}