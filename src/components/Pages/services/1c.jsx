
import ServiceTemplate from './ServiceTemplate';
import pageContent from "./Models/OneC";
import imgOne from "../../../static1/steve-johnson-RZV4bUyDWUM-unsplash.jpg"
import imgThree from "../../../static1/jigar-panchal-0nMAg7FBGuw-unsplash.jpg";

export default function OneCDev() {
    return(
        <ServiceTemplate title={pageContent.title} 
        article={pageContent.article}
        carouselImgOne = {imgOne}
        carouselImgTwo = {imgThree}
        carouselImgThree = {imgThree}
        />
    )
}