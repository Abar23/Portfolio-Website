import React from 'react';

const ResumeInfoSection = ({ title, company, location, date, description, listItems }) => {
  return (
    <div className='resume-info-section'>
      <h2><strong>{title}</strong></h2>
      <hr className='resume-info-section-line' />
      <div className='date-location-info'>
        <p><strong>{company}</strong>, {location}</p>
        <p>{date}</p>
      </div>
      <p className='resume-info-section-description'>{description}</p>
      {/* <ul className='section-list'>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default ResumeInfoSection;