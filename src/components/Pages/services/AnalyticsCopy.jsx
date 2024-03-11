import React, { useEffect } from 'react';
import pageContent from './Models/analytics';
import ServiceTemplate from './ServiceTemplate';
import imgOne from "../../../static1/analytics1.jpg";
import imgTwo from "../../../static1/analytics2.jpg";

let {title,article} = pageContent;

export default function Analytics() {


    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
        <ServiceTemplate
        title={title} 
        article={article}
        carouselImgOne = {imgOne}
        carouselImgTwo = {imgTwo}
        carouselImgThree = {imgTwo}
        />
    )
}