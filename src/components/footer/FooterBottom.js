import React from 'react';
import {logo} from "../../assets/index";

const FooterBottom = () => {
  return (
    <div className='w-full flex gap-6 items-center justify-center py-6 bg-amazon_blue'>
      <div>
        <img className='w-20 pt-3' src={logo} alt='logo'/>
      </div>
    </div>
  )
}

export default FooterBottom