import ProductTemplate from "./ProductTemplate.jsx";
import React from 'react';
import pageContent from "./Models/Module1CEIS.js";
import imgOne from "../../../static1/photo_2024-02-29_09-51-37.jpg"
import imgTwo from "../../../static1/photo_2024-02-29_09-51-34.jpg";


let {title,slogan,article} = pageContent;


export default function Module1CEIS() {

  return (
    <ProductTemplate 
    productTitle={title}
    slogan={slogan}
    article={article}
    carouselImgOne = {imgOne}
    carouselImgTwo = {imgTwo}
    carouselImgThree = {imgTwo}
     />
  )
}
