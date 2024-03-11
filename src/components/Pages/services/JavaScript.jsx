import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import pageContent from "../services/Models/javaScript";
import imgOne from "../../../static1/photo_2024-02-29_09-51-37.jpg"
import imgTwo from "../../../static1/photo_2024-03-04_08-50-39.jpg";
import imgThree from "../../../static1/alberto-juarez-cPm8HPRL04w-unsplash.jpg";

export default function JavaScriptDev() {
    return(
        <ServiceTemplate title={pageContent.title} article={pageContent.article}
        carouselImgOne = {imgOne}
        carouselImgTwo = {imgTwo}
        carouselImgThree = {imgThree}/>
    )
}