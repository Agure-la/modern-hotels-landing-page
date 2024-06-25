import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={ images.H} alt='H_overlay' />
      </div>

      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
            <h1 className='headtext__cormorant'>About Us</h1>
            <img src={images.spoon} alt="about_spoon" className="spoon__img" />
            <p className='p__opensans'>Step into a world of luxury and comfort at our hotel, where elegance meets modern amenities. Whether you're here for a weekend getaway or an extended stay, our spacious rooms, gourmet dining, and top-notch service promise an unforgettable experience. Relax by the pool, rejuvenate at our spa, or explore the vibrant city just steps from our door. </p>
            <button type='button' className='custom__button'>Know More</button>
        </div>

        <div className='app__aboutus-content_knife flex__center'>
            <img src={ images.knife } alt='abou_knife' />
        </div>

        <div className='app__aboutus-content_history'>
            <h1 className='headtext__cormorant'>Our History</h1>
            <img src={images.spoon} alt="about_spoon" className="spoon__img" />
            <p className='p__opensans'>Step back in time and immerse yourself in the rich history of our distinguished hotel. Nestled in the heart of the city, our hotel has been a beacon of elegance and charm for over a century. Each room tells a story, adorned with timeless decor and modern comforts.</p>
            <button type='button' className='custom__button'>Know More</button>
        </div>

      </div>
    </div>
  )
}

export default AboutUs;
