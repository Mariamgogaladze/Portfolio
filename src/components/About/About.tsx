import {
  AboutContainer,
  AboutImageContainer,
  AboutImage,
  AboutText,
  AboutHeading,
  AboutSecHeading,
  AboutParagraph,
} from "./AboutElements";

import me from "./../../images/me.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <AboutContainer>
      <AboutImageContainer
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <AboutImage src={me} alt="Programmer" />
      </AboutImageContainer>
      <AboutText
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <AboutHeading>About Me</AboutHeading>
        <AboutSecHeading>
          A dedicated Front-end Developer based in Georgia,Tbilisi 📍
        </AboutSecHeading>
        <AboutParagraph>
          As a Junior Front-End Developer, I am focused on designing and
          developing responsive interfaces that provide a seamless user
          experience. I am skilled at writing clean and well-optimized code,
          ensuring efficient performance and maintainability. With my passion
          for front-end development and willingness to grow, I am excited to
          contribute to the success of projects and make a valuable impact as a
          Junior Front-End Developer.
        </AboutParagraph>
      </AboutText>
    </AboutContainer>
  );
}

export default About;
