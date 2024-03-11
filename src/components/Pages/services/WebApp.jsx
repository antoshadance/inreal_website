import React from 'react';
import pageContent from "./Models/webApp.js";
import ServiceTemplate from './ServiceTemplate.jsx';
import imgOne from "../../../static1/mob11.jpg"


let {title,article} = pageContent;



export default function WebApp() {
    return(
        <ServiceTemplate title={title} article={article} 
        carouselImgOne = {imgOne}
        carouselImgTwo = {imgOne}
        carouselImgThree = {imgOne}
        />
    )
}