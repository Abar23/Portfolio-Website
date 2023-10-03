import React from 'react';

function Postcard({ title, description, tags, imageSrc, imageAlt }) {
  return (
    <div className='postcard'>
      <div className='postcard-image-container'>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className='postcard-description'>
        <div className='section-title'>
          <h3><span className='postcard-description-title-underline'>{title}</span></h3>
        </div>
        <div className='postcard-description-body'>
          <div className='postcard-description-tag-list'>
            {tags.map((tag, index) => (
              <div key={index} className={`postcard-description-tag ${tag.backgroundColor}`}>
                <p>{tag.text}</p>
              </div>
            ))}
          </div>
          <div>         
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Postcard;