import React, {useEffect} from 'react';
import classes from "./ProductTemplate.module.scss";
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Carousel from '../../Carousel';
import gsap from 'gsap';


export default function Product(props) {
  
 
  useEffect(()=>{
    window.scrollTo(0,0);
    gsap.from(".left_side_article",{
      opacity:0
  })
  gsap.to(".left_side_article",{
      opacity:1,
      duration: 0.5
  })
  },[])
 

  return (
    <div>
    <Navbar/>
      <div className={classes.productsPage}>
        <div className={classes.product}>
          <section className={`${classes.productDesc} ${"left_side_article"}`}>
              <h1 className={classes.productTitle}>{props.productTitle}</h1>
              <p className={classes.slogan}>{props.slogan}</p>
                <article className={classes.description} dangerouslySetInnerHTML={{__html:props.article}}>
                </article>
          </section>
          <Carousel img1={props.carouselImgOne} img2={props.carouselImgTwo} img3={props.carouselImgThree} />
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}
