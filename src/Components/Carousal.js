/*
  This file is used to display the corousal component of the page
*/
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

const imgStyle = {
  width: window.innerWidth,
  height: "400px",
};

export default function Carousal() {
  /* 
    store the links of all the images to be rendered
    In the later stage, map function is used to render 
    individual item in the array.
  */
  let imgs = [
    "https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg",
    "https://res.cloudinary.com/stealthman22/image/upload/v1586308023/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905.jpg",
  ];
  return (
    <Carousel>
      {imgs.map((img) => {
        return (
          <Carousel.Item>
            <img style={imgStyle} src={img} alt="Second slide" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
