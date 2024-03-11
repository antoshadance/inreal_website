import React, { useEffect } from "react";
import  "./styles/Carousel.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


export default function Carousel(props) {

    gsap.registerPlugin(ScrollTrigger)


    let mm = gsap.matchMedia();


    useEffect(()=>{

        mm.add("(max-width: 1085px)",()=>{
            gsap.to(".carousel_container",{display: "none"})
        })
        
        gsap.from(".carousel_image",{
            x:"100%"
        })
        gsap.to(".carousel_image",{
            x:"0",
            duration:0.5
        })
        gsap.to(".carousel_image1",{
            scrollTrigger:{
                trigger:".left_side_article",
                start: "30%  center",
                end: "30% center",
                toggleActions: "restart none reverse none",
            },
            opacity: 0,
        })

        gsap.to(".carousel_image2",{
            scrollTrigger:{
                trigger:".left_side_article",
                start: "70% center",
                end: "70% center",
                toggleActions: "restart none reverse none",
            },
            opacity: 0
        })

        
    },[])

    return(
        <div className = "carousel_container">
            <div className="carousel_self">
            <img src={props.img3} alt="" className="carousel_image carousel_image3"></img>
            <img src={props.img2} alt="" className="carousel_image carousel_image2"></img>
            <img src={props.img1} alt="" className="carousel_image carousel_image1"></img>
            </div>
        </div>
    )
}