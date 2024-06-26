import React from 'react';
import { images } from '../../constants';

const SubHeading = ({ title }) => {
  return (
    <div style={{marginBottom: '1rem' }}>
      <p className='p__cormorant'>{title}</p>
      <img
        src={images.spoon}
        alt='spoon_image'
        className='spoon_img'
        style={{ width: '50px', height: '50px' }} // Adjust width and height as needed
      />
    </div>
  )
}

export default SubHeading;
