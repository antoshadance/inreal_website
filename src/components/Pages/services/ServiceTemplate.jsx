import React, { useEffect } from 'react';
import Navbar from '../../Navbar';
import classes from './ServiceTemplate.module.scss'
import Footer from '../../Footer';
import Carousel from '../../Carousel';
import gsap from 'gsap';

export default function ServiceTemplate(props) {
  
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
        <div className={classes.servicePage}>
          <div className={classes.serviceWrapper}>
            <section className={`${classes.serviceDesc} ${"left_side_article"}`}>
              <h1 className={classes.serviceTitle}>{props.title}</h1>
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
