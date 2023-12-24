import React from 'react';
import bannerImage1 from '../../assets/images/banner.jpg';
import bannerImage2 from '../../assets/images/banner2.jpeg';
import bannerImage3 from '../../assets/images/banner.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.module.css';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="banner-container">
        <img src={bannerImage1} alt="Nexus E-Commerce" className="img-fluid" />
        <div className="banner-text">
          <h1 className="display-4">Welcome to Nexus</h1>
          <p className="lead">Your one-stop destination for all your shopping needs.</p>
        </div>
      </div>
      <div className="banner-container">
        <img src={bannerImage2} alt="Nexus E-Commerce" className="img-fluid" style={{ maxHeight: '500px' }} />
        <div className="banner-text">
          <h1 className="display-4">Discover the Latest Trends</h1>
          <p className="lead">Explore a wide range of products and stay in style.</p>
        </div>
      </div>
      <div className="banner-container">
        <img src={bannerImage3} alt="Nexus E-Commerce" className="img-fluid" style={{ maxHeight: '500px' }} />
        <div className="banner-text">
          <h1 className="display-4">Shop with Confidence</h1>
          <p className="lead">Secure and seamless shopping experience for our customers.</p>
        </div>
      </div>
    </Slider>
  );
}

export default Banner;
