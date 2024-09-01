import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function ImageCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        prevArrow: <CustomPrevArrow />,  // Use custom previous arrow component
        nextArrow: <CustomNextArrow />,  // Use custom next arrow component
        appendDots: dots => (
            <div
                style={{
                    position: "absolute",
                    bottom: "10px",
                    width: "100vw",
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "5px",
                    opacity:"100%",
                }}
            >
                <ul style={{ margin: "", padding: "0", display: "flex" , gap:"6px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "6px",
                    height:"6px",
                    borderRadius:"50%", 
                    background:  "lightgrey",
                    color:"transparent",
                    margin: "0 1px",
                    padding:"2px 0",
                    display: "inline-block",
                }}
            >
                
            </div>
        )
    };
    const img= [
        "https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/6edfa42b8a1dfcf4.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/ff247317042dbda8.jpeg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/ce4bbeffa6c000f3.png?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/63bfbacd7071eb3d.jpeg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/e9a7bcd47edbdfa4.jpeg?q=20",
    ];

    const images = [
        "https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/dd1571b059e80b2e.jpg?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/39b352d7d7ae094b.jpg?q=20",
        "https://rukminim1.flixcart.com/fk-p-flap/3000/3000/image/ea9f8b7b2d583e06.png?q=20",
        "https://rukminim2.flixcart.com/fk-p-flap/3000/3000/image/5181f4243989e0b4.jpg?q=20",
        "https://rukminim1.flixcart.com/fk-p-flap/3000/3000/image/44fe68e438b997c9.jpeg?q=20",
    ];

    return (
        <div className="{slider-container} relative w-[97w] ml-1 mr-1 md:mr-3 md:ml-3"  >
            <Slider {...settings} className='!overflow-x-hidden !hidden md:!grid'>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '50%' }} className='!h-[25vh] !w-full  md:!h-[50%]'/>
                    </div>
                ))}
            </Slider>
            <Slider {...settings} className='!overflow-x-hidden flex md:!hidden'>
                {img.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '50%' }} className='!h-[25vh] !w-full '/>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

// Custom Previous Arrow Component
function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div 
            className={`${className} !hidden lg:!flex`}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "45px",
                height: "90px",
                backgroundColor: "white",
                paddingRight:"14px",
                position: "absolute",
                left: "0px",
                zIndex: 1,
                cursor: "pointer",
                borderRadius: "0 8% 8% 0",
                boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
            }}
            onClick={onClick}
        >
            <ArrowBackIosNewIcon style={{ fontSize: "15px", color: "grey" }} />
        </div>
    );
}

// Custom Next Arrow Component
function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} !hidden lg:!flex`}
            style={{
              ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "45px",
                height: "90px",
                backgroundColor: "white",
                paddingRight:"12px",
                position: "absolute",
                right: "0px",
                zIndex: 1,
                cursor: "pointer",
                borderRadius: "8% 0 0 8%",
                boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
            }}
            onClick={onClick}
        >
            <ArrowForwardIosIcon style={{ fontSize: "15px", color: "gray" }} />
        </div>
    );
}

export default ImageCarousel;
