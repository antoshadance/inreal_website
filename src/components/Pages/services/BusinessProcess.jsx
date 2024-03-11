import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import pageContent from './Models/businessProcess';
import imgOne from "../../../static1/kaleidico-26MJGnCM0Wc-unsplash.jpg"
import imgTwo from "../../../static1/carlos-muza-hpjSkU2UYSU-unsplash.jpg";


let {title,article} = pageContent;


export default function BusinessProcess() {
    return(
        <ServiceTemplate title={title} article={article}
        carouselImgOne = {imgOne}
        carouselImgTwo = {imgTwo}
        carouselImgThree = {imgTwo} />
    )
}