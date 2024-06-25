import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app_wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt='chef_image' />
      </div>
      <div className='app__wrapper_info'>
        <SubHeading title="Chef Words" />
        <h1 className='headtext__cormorant'>What we believe in</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt='quote_image' />
            <p className='p__opensans'>Cooking is an art, but all art requires knowing something about the techniques and materials.</p>
          </div>
          <p className='p__opensans'>Great food is like great art: it excites, inspires, and brings people together.</p>
        </div>

        <div className='app__chef-sign'>
          <p>Salt Bae</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt='sign_images' />
        </div>
      </div>
    </div>
  )
}

export default Chef;
