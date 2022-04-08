import React, { Component } from "react";
import Slider from "react-slick";
import Container from '@mui/material/Container';

export default class Carousel extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        rtl: true,
        arrows:false
    };
    return (
        <Container component="section" sx={{ mt: 8, mb: 4 }}>

        <div>
        <h2 style={{'textAlign' : "center"}}>Right to Left</h2>
        <Slider {...settings}>
          <div>
            <h3 className="slick_h3">1</h3>
          </div>
          <div>
            <h3  className="slick_h3">2</h3>
          </div>
          <div>
            <h3  className="slick_h3">3</h3>
          </div>
          <div>
            <h3  className="slick_h3">4</h3>
          </div>
          <div>
            <h3  className="slick_h3">5</h3>
          </div>
          <div>
            <h3  className="slick_h3">6</h3>
          </div>
        </Slider>
      </div>

        </Container>
     
    );
  }
}