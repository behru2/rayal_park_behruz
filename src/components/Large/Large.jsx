import React from "react";
import { Zoom, Fade } from "react-reveal";
import s from "./Large.module.css";
import hotel from "../img/hotel.mp4";
import imgIframe from '../img/imgIframe.png'
import image from "../img/a.svg"
import svg1 from '../img/c.svg'
import rctngl from '../img/rctngl.svg'
import svg2 from '../img/5.svg'
import svg3 from '../img/6.svg'
import svg4 from '../img/7.svg'
import card1 from '../img/card1.svg'
import card_ttl1 from '../img/card_ttl1.svg'
import card2 from '../img/card2.svg'
import card3 from '../img/card3.svg'
import card4 from '../img/card4.svg'
import card5 from '../img/card5.svg'

const Large = () => {
  return (
    <div className="parent">

        <div class={s.vidMom}>
          <iframe
            class="ifarmeVideo"
            width="500px"
            height="282px"
            src={hotel}
            title="YouTube video player"
            frameborder="0"
            allowFullScreen
            
          ></iframe>
          <div className={s.imgIframe}><img src={imgIframe} alt="" /></div>
        </div>

     <Fade id='features'  right>
        <div className={s.title}>
        dream holidays
        </div>
        <div className={s.title2}>
        Enjoy unforgetable experiences in dream hotels.
        </div>
        <div className={s.btn_container}>
        <a name = 'features'>
          <button className={s.btn}>
          
            View more
          </button>
          </a>
        </div>
        </Fade>
       <Fade top>
         
            <div className={s.title3}>
            Why you choose us!
            </div>
         
    
        <div className={s.title4}>
        Naturally, it’s becoming even more important for hotel and hospitality brands to stand out from the crowd. Content marketing remains a key way for hotels to do this.
        </div>
        </Fade>
      <div className={s.card_container}>

 {/* Card1 */}
<Fade left>
  
          <div className={s.card}>
            <img src={rctngl} alt="" />
            <div className={s.photo1}>
  <img src={svg1} alt="" />
            </div>
            <div className={s.txt}>
            Easy booking 
            </div>
            <div className={s.txt2}>
            The booking process should include minimal steps.
            </div>
          </div> 
  
   {/* Card2 */}
  
          <div className={s.card2}>
            <img src={rctngl} alt="" />
            <div className={s.photo2}>
  <img src={svg2} alt="" />
            </div>
            <div className={s.txt_b}>
            Friendly interface
            </div>
            <div className={s.txt2}>
            A hotel booking engine with a good user-friendly.
            </div>
          </div>
</Fade>
{/* Card3 */}

<Fade right>
  
  <div className={s.card3}>
            <img src={rctngl} alt="" />
            <div className={s.photo3}>
  <img src={svg3} alt="" />
            </div>
            <div className={s.txt_c}>
            Responsibility
            </div>
            <div className={s.txt3}>
            You should be able to add rooms to your system.
            </div>
          </div>
  
  {/* Card4 */}
  
  <div className={s.card4}>
            <img src={rctngl} alt="" />
            <div className={s.photo4}>
  <img src={svg4} alt="" />
            </div>
            <div className={s.txt_d}>
            Quick order supply
            </div>
            <div className={s.txt4}>
            The booking process should include minimal steps.
            </div>
          </div>

</Fade>
      </div>

{/* Gallery */}

      <div className={s.gallery}>
<Fade up>
  <div className={s.glry_title}>
  About hotel gallery
  </div>
  <div className={s.glry_title2}>
  While some of these examples are real – actually offering guests a stay in the locations advertised – it’s mainly just a way.
  </div>
  </Fade>
  
  <div className={s.glry_btn_prnt}>
    <button className={s.glry_btn} >
      View more
    </button>
  </div>

<div className={s.cards_container}>

{/* Card1 */}

 {/* <Fade right> */}
    <div className={s.glry_card1}>
      <img src={card1} alt="" />
      <div className={s.card_ttl1}>
       <div className={s.card_ttl1_desc}>
       Lux Room
       </div>
       <div className={s.card_ttl1_price}>
       $60 night
       </div>
       <div className={s.ttl_btn_cntr}>
       <a href="/book"><button className={s.ttl_btn} >Book now</button></a>
       </div>
      </div>
    </div>
 {/* </Fade> */}

{/* Card2 */}

  {/* <Fade right > */}
    <div className={s.glry_card2}>
      <img src={card2} alt="" />
      <div className={s.card_ttl2}>
       <div className={s.card_ttl2_desc}>
       Mini Room
       </div>
       <div className={s.card_ttl2_price}>
       $70 night
       </div>
       <div className={s.ttl_btn_cntr}>
       <a href="/book"><button className={s.ttl_btn} >Book now</button></a>
       </div>
      </div>
    </div>
  {/* </Fade> */}

  {/* Card3 */}

 {/* <Fade left> */}
    <div className={s.glry_card3}>
      <img src={card3} alt="" />
      <div className={s.card_ttl3}>
       <div className={s.card_ttl3_desc}>
       Stande Room
       </div>
       <div className={s.card_ttl3_price}>
       $65 night
       </div>
       <div className={s.ttl_btn_cntr}>
       <a href="/book"><button className={s.ttl_btn} >Book now</button></a>
       </div>
      </div>
    </div>
{/* 
 </Fade>  */}
    {/* Card4 */}

    {/* <Fade left> */}
      <div className={s.glry_card4}>
      <img src={card4} alt="" />
      <div className={s.card_ttl4}>
       <div className={s.card_ttl4_desc}>
       Single Room
       </div>
       <div className={s.card_ttl3_price}>
       $55 night
       </div>
     
       <div className={s.ttl_btn_cntr}><a href="/book">
       <button className={s.ttl_btn} >Book now</button></a>
       </div>
      </div>
    </div>

    {/* </Fade>   */}
  {/* Card5 */}

  
  {/* <Fade right> */}
    <div className={s.glry_card5}>
      <img src={card5} alt="" />
      <div className={s.card_ttl4}>
       <div className={s.card_ttl4_desc}>
       Elite Room
       </div>
       <div className={s.card_ttl3_price}>
       $65 night
       </div>
       <div className={s.ttl_btn_cntr}>
        <a href="/book"><button className={s.ttl_btn} >Book now</button></a>
       </div>
      </div>
    </div>

  {/* </Fade>  */}
</div>

{/* Feedbacks */}   

<div className={s.feedback_prnt}>
  {/* FEEDBACK1 */}
  <div className={s.fdbck1}>

  </div>
</div>

  <div className={s.prefooter_prnt}>
  
    <div className={s.prefooter}>
    STAY IN TOUCH
    </div>
    <div className={s.prefooter_ttl}>
    Join our email. First to know about specials,events and more!
    </div>
    
  </div>
  
  <div className={s.email}>
  
  <input type="text" placeholder="Enter your email adress" className={s.mail1} />
  {/* <input type='submit' placeholder="subscribe" className={s.submit}/> */}
  <button className={s.submit}> Subscribe</button>
  
  </div>

 

      </div>
      
    </div>

  );
};



export default Large;
