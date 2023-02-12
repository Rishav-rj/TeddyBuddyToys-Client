import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { useState } from "react";



const ImageSlider = (props)=>{

    let settings = {
        dots:false,
        infinite:true,
        speed:800,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    }

    const [images, setImages] = useState();
    
    const binaryImg = props.img;
 
    const imgSlider = binaryImg.map((e,key)=>{
        return(
            <Wrap key={key}>
                <a>
                    <img src={e} alt=""/>
                </a>
            </Wrap>
        )
    })



    return (
        <Conatiner>
            <Carousel {...settings}>
            {imgSlider} 
            </Carousel>
        </Conatiner>
    )
};


const Conatiner = styled.div`
    width:270px;
    height:240px; 
    overflow:hidden;
    @media(max-width:768px){
        height: 160px;
        width: 160px;
    }
`;

const Carousel = styled(Slider)`
 & > button{
        opacity:0;
    }
`;

const Wrap = styled.div`
    border-radius:5px;
    cursor:pointer;
    position: relative;
    width: 20vw;

    a{
        cursor:pointer;
        display: block;
        position: relative;
        padding:10px;
        @media(max-width:768px){
            padding:5px;
            }
        img{
            border-radius:5px;
            width: 250px;
            height: 220px;

            @media(max-width:768px){
                height: 150px;
                width: 150px;
            }
        }

    }
    
    
`;

export default ImageSlider;