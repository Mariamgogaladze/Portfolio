import React from "react";
import { useEffect } from "react";
import {
  FooterContainer,
  FooterSection,
  FooterTitle,
  TextWrapper,
  FooterText,
  FooterMainText,
  ReachOut,
  EmailLine,
  ContactSection,
} from "./FooterElements";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <FooterContainer>
      <FooterSection
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <ContactSection>
          <ReachOut>Reach out</ReachOut>
          <EmailLine href="mailto:gogaladzemariam8@gmail.com">
            GOGALADZEMARIAM8@GMAIL.COM
          </EmailLine>
        </ContactSection>

        <FooterMainText>
          <TextWrapper>
            <FooterText>We </FooterText>
          </TextWrapper>
          <TextWrapper>
            <FooterText>should </FooterText>
          </TextWrapper>
          <TextWrapper>
            <FooterText>talk </FooterText>
          </TextWrapper>
        </FooterMainText>
      </FooterSection>
      <FooterTitle>
        This is not just an application, but the start of a collaborative
        journey. I'm excited to contribute my skills and expertise to your team.
      </FooterTitle>
    </FooterContainer>
  );
}

export default Footer;
