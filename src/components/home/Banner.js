import React, { useState } from 'react';
import Slider from "react-slick";
import {bannerImgOne,bannerImgTwo,bannerImgThree,bannerImgFour,bannerImgFive} from "../../assets/index";

const Banner = () => {
    const [dotActive,setDotActive]=useState(0);
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (prev,next)=>{
            setDotActive(next);
        },
        appendDots: dots => (
            <div
              style={{
                position: "absolute",
                top: "70%",
                left:"45%",
                transform :"translate(-50%,-50%)",
                width:"210px",
              }}
            >
              <ul style={{
                width:"100%",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between"
              }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width:"20px",
                height:"20px",
                borderRadius:"50%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                color:"white",
                background:"#FFFFFF",
                padding:"8px 0",
                cursor:"pointer",
                border:"1px solid #f3a847"
              }}
            >
              {/* {i + 1} */}
            </div>
          )
      };
      return (
        <div className='w-full'>
        <div className='w-full h-full relative'>
          <Slider {...settings}>
            <div>
              <img src={bannerImgOne} alt="/ban"/>
            </div>
            <div>
              <img src={bannerImgTwo} alt="/ban"/>
            </div>
            <div>
              <img src={bannerImgThree} alt="/ban"/>
            </div>
            <div>
              <img src={bannerImgFour} alt="/ban"/>
            </div>
            <div>
              <img src={bannerImgFive} alt="/ban"/>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/1780/7915/files/Game_Monitor_6a7a1deb-2d61-4307-99ac-f8c5a18d298f.jpg?8000210842524768871" alt="/ban"/>
            </div>
          </Slider>
        </div>
        </div>
      );
}

export default Banner