import HeroSlider, { Overlay, Slide } from "hero-slider";
import Nav from './Nav';
import rabatcat from "./assets/rabatcat.jpg";
import amiens1 from "./assets/2014Amiens_garg3.jpg";
import amiens2 from "./assets/2014Amiens1.jpg";
import gaillard3 from "./assets/2014Gaillard3.jpg";
import gaillard4 from "./assets/2014Gaillard4.jpg";
import gaillard6 from "./assets/2014Gaillard6.jpg";
import chantilly from "./assets/2015chantilly1.jpg";


export default function BasicSlider() {
  return (

    <HeroSlider
      // we initially used className="hero-image", maybe mistakenly
      height={"500px"}
      // autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }
      }
    >
      <Overlay>
        <div className="slider-container">
          {/* <h1 className="hero_image">Marie-France Han</h1> */}
          <div className="slider-subtitle">
            Marie-France Han
          </div>
          <div className="social">

            <a href="https://www.github.com/mfhan" rel="noreferrer" target="_blank">
              <img className='social-logo' src={require("./assets/social/github.png")} alt="" />
            </a>
            <a href="https://www.LinkedIn.com/in/mariefr" rel="noreferrer" target="_blank">
              <img className='social-logo' src={require("./assets/social/linked25.png")} alt="" />
            </a>
          </div>
        </div>
      </Overlay>


      <Slide

        shouldRenderMask={false}
        label="rabatcat"
        background={{
          backgroundImageSrc: rabatcat,
          backgroundAnimation: false
        }}
      />

      <Slide
        shouldRenderMask={false}
        label="gaillard3"
        background={{
          backgroundImageSrc: gaillard3
        }}
      />


      <Slide
        shouldRenderMask={false}
        label="gaillard6"
        background={{
          backgroundImageSrc: gaillard6
        }}
      />


      <Slide
        shouldRenderMask={false}
        label="gaillard4"
        background={{
          backgroundImageSrc: gaillard4
        }}
      />
      <Slide
        shouldRenderMask={false}
        label="amiens1"
        background={{
          backgroundImageSrc: amiens1
        }}
      />

      <Slide
        shouldRenderMask={false}
        label="amiens2"
        background={{
          backgroundImageSrc: amiens2
        }}
      />

      <Slide
        shouldRenderMask={false}
        label="chantilly"
        background={{
          backgroundImageSrc: chantilly
        }}
      />

    </HeroSlider >
  );
}
