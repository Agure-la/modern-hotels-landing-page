import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id="home">
      <div className='app__wrapper_info'>
        <SubHeading title='Get new Taste' />
        <h1 className='app_header-h1'>The Key to fine Dishes</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}>Enjoy delicious flavors and warm hospitality. Experience gourmet dishes that delight the senses. Indulge in culinary excellence, crafted just for you.</p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.welcome} alt='header_img' />
      </div>
    </div>
  )
}

export default Header;
