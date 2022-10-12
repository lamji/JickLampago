import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickCarrd from "../Card/SlickCard";
import { Typography } from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Box } from "@mui/system";
import data from "../../Data/personalProject.json"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{}}>
      <ArrowCircleRightIcon
        onClick={onClick}
        sx={{
          fill: "gray",
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{}}
    >
        <ArrowCircleLeftIcon 
            onClick={onClick}
            sx={{
              fill: "gray",
            }}
        />
    </div>
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Box
        sx={{
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Typography variant="h6" fontWeight={700} sx={{my: 2}}>
          Personal Projects
        </Typography>
        <Slider {...settings}>
          <SlickCarrd dataIn={data?.[0]}/>
          <SlickCarrd dataIn={data?.[1]}/>
          <SlickCarrd dataIn={data?.[2]}/>
          <SlickCarrd dataIn={data?.[3]}/>
          <SlickCarrd dataIn={data?.[4]}/>
          <SlickCarrd dataIn={data?.[5]}/>
        </Slider>
      </Box>
    );
  }
}
