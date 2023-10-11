import {
  HeadingContainer,
  HeadingText,
  HeroText,
  HeadingSpan,
  HeroLinks,
  HeroLinksIcon,
  HeroLink,
  HeadingSpanName,
  TechstackContainer,
  TechHeading,
  TechLink,
  TechIcon,


} from "./HeroElements";
import AOS from "aos"
import 'aos/dist/aos.css';
import {useEffect} from "react";

import linkendin from "./../../images/link.png";
import github from "./../../images/github-mark.png";
import HTML5 from "./../../images/html5.svg";
import css from "./../../images/css.svg";
import JS from "./../../images/js.svg";
import React from "./../../images/React.svg";
import TypeScript from "./../../images/typescript.svg";
import stledcomp from "./../../images/styled-components-1.svg";


function Hero() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <HeadingContainer data-aos="fade-right" 
    data-aos-easing="ease-in-sine" >
      <HeadingText>Front-end React Developer</HeadingText>
      <HeroText>
        Hi, I'm <HeadingSpanName>Mariam Gogaladze</HeadingSpanName>. A
        passionate Front-end React Developer based in{" "}
        <HeadingSpan
          href="https://www.google.com/maps/place/Georgia/@42.2945711,40.7178822,7z/data=!4m6!3m5!1s0x40440cd7e64f626b:0x4f907964122d4ac2!8m2!3d42.315407!4d43.356892!16zL20vMGQwa24?entry=ttu"
          target="_blank"
        >
          Georgia, Tbilisi 📍
        </HeadingSpan>
      </HeroText>
      <HeroLinks>
        <HeroLink href="#" target="_blank" title="LinkedIn">
          <HeroLinksIcon src={linkendin} />
        </HeroLink>
        <HeroLink href="https://github.com/Mariamgogaladze" target="_blank">
          <HeroLinksIcon src={github} title="GitHub" />
        </HeroLink>
      </HeroLinks>
      <TechstackContainer>
        <TechHeading>Tech Stack</TechHeading>
        <TechLink
          href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
          target="_blank"
        >
          <TechIcon src={HTML5} alt="HTML5" title="HTML5" />
        </TechLink>
        <TechLink href="https://www.w3.org/TR/CSS/#css" target="_blank">
          <TechIcon src={css} alt="CSS" title="CSS" />
        </TechLink>
        <TechLink
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
        >
          <TechIcon src={JS} alt="JS" title="JavaScript" />
        </TechLink>
        <TechLink href="https://reactjs.org/" target="_blank">
          <TechIcon src={React} alt="React" title="React" />
        </TechLink>
        <TechLink href="https://www.typescriptlang.org" target="_blank">
          <TechIcon src={TypeScript} alt="TypeScript" title="TypeScript" />
        </TechLink>
        <TechLink href="https://styled-components.com/" target="_blank">
          <TechIcon
            src={stledcomp}
            alt="styled-components"
            title="styled-components"
          />
        </TechLink>
      </TechstackContainer>

 
    </HeadingContainer>
  );
}

export default Hero;
