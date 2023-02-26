import React from 'react';
import data from "./slider.json"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import styles from './slider.module.css'
// import 1 from "../../img/partner/1.jpg"
// import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
export default function Partner()
{

    // var splide = new Splide( '.splide' );

    // splide.on( 'autoplay:playing', function ( rate ) {
    //   console.log( rate ); // 0-1
    // } );
    
    // splide.mount();
    function showInfo(id){
        let partnerInfoArea = document.querySelector("#partnerInfo")
        partnerInfoArea.innerHTML = `<div class="${styles.partnerInfoArea}">

        <img style={{ width: "150px" }} class="${styles.partnerImg}" src=${data[id].image} />
        <div>
        <div class="${styles.partnerTitle}">
        ${data[id].title}
        </div>
        <div class="${styles.partnerDesc}">
        ${data[id].desc}
        </div>
        </div>

        </div>`
    }
    return (
        <div className={styles.sliderContainer}>
        <div className={styles.cards}>
            <div className={styles.slidetTitleText}>BİZİM MÜŞTƏRİLƏR</div>
   

<Splide options={ {
    fixedWidth: 250,
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    autoScroll: {
        speed: 1,
      },
      type    : 'loop',
      autoplay: 'play',
    //   autoWidth: true,
    perPage: 3,
  } } aria-label="Slider">
  {
      
      data.map(i => (<SplideSlide onClick={() => showInfo(i.id)} key={i.id}>
        <div className={styles.card}>
        <img className={styles.sliderImg} src={i.image}/>
        </div>
        </SplideSlide>))
    }

</Splide>
    </div>
    <div className={styles.partnerInfoContainer1}>

            <div id='partnerInfo' className={styles.partnerInfoContainer2}>

                </div>    
    </div>
    </div>
    )
}