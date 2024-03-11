import React from 'react';
import pageContent from "./Models/techDoc.js";
import ServiceTemplate from './ServiceTemplate';
import imgOne from "../../../static1/sigmund-4UGmm3WRUoQ-unsplash.jpg"
import imgTwo from "../../../static1/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg";
let {title,article} = pageContent

export default function TechDoc() {

  return (
    <ServiceTemplate title={title} article={article}
        carouselImgOne = {imgOne}
        carouselImgTwo = {imgTwo}
        carouselImgThree = {imgTwo}
    />
  )
}
