import React, { useState } from "react";
import Video from "../../assets/video.mp4";
import { Button } from "../Button.styles";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./Hero.style";


const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Encuentra las últimas tendencias</HeroH1>
        <HeroP>
          <Button
            to="proyects"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Descubré {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroP>
        <HeroBtnWrapper>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
