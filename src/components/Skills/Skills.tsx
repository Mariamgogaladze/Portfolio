import {
  AboutSpan,
  Skill,
  SkillHeadin,
  SpanContainer,
  SpanParagraph,
  SkillParagraph,
  EachSpan,
  SkillContainer,
  SpanCircle,
  CircleContainer,
  Title,
} from "./SkillsElements";
import "aos/dist/aos.css";

function Skills() {
  return (
    <Skill>
      <SkillContainer data-aos="fade-down" data-aos-duration="1000">
        <SkillHeadin>Technology Stack </SkillHeadin>
        <SkillParagraph>
          In the realm of web development, I have carefully curated a modern and
          robust technology stack that empowers me to create exceptional online
          experiences. My knowledge spans across the following areas:
        </SkillParagraph>
      </SkillContainer>
      <SpanContainer>
        <EachSpan
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <CircleContainer>
            <SpanCircle></SpanCircle>
            <Title>Tech 1</Title>
          </CircleContainer>
          <AboutSpan
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            target="_blank"
          >
            HTML
          </AboutSpan>
          <SpanParagraph>
            I am well-versed in semantic markup, ensuring clean and structured
            web content that meets the latest industry standards.
          </SpanParagraph>
        </EachSpan>
        <EachSpan
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <CircleContainer>
            <SpanCircle></SpanCircle>
            <Title>Tech 2</Title>
          </CircleContainer>
          <AboutSpan href="https://www.w3.org/TR/CSS/#css" target="_blank">
            CSS
          </AboutSpan>
          <SpanParagraph>
            With an eye for aesthetics and a keen understanding of design
            principles, I skillfully blend CSS styles to create visually
            stunning and responsive interfaces.
          </SpanParagraph>
        </EachSpan>

        <EachSpan
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <CircleContainer>
            <SpanCircle></SpanCircle>
            <Title>Tech 3</Title>
          </CircleContainer>
          <AboutSpan
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            JavaScript
          </AboutSpan>
          <SpanParagraph>
            Harnessing the power of JavaScript, I bring interactivity and
            dynamic functionality to websites, enhancing user engagement and
            experience.
          </SpanParagraph>
        </EachSpan>
        <EachSpan
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          data-aos-delay="400"
        >
          <CircleContainer>
            <SpanCircle></SpanCircle>
            <Title>Tech 4</Title>
          </CircleContainer>
          <AboutSpan href="https://react.dev/" target="_blank">
            React
          </AboutSpan>
          <SpanParagraph>
            I have a deep focus on React. By harnessing its component-based
            architecture, I craft scalable and efficient web solutions that
            captivate users and streamline development processes.
          </SpanParagraph>
        </EachSpan>

        <EachSpan
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <CircleContainer>
            <SpanCircle></SpanCircle>
            <Title>Tech 5</Title>
          </CircleContainer>
          <AboutSpan href="https://www.typescriptlang.org/" target="_blank">
            TypeScript
          </AboutSpan>
          <SpanParagraph>
            I am well-versed in semantic markup, ensuring clean and structured
            web content that meets the latest industry standards.
          </SpanParagraph>
        </EachSpan>
        <EachSpan
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          data-aos-delay="600"
        >
          <CircleContainer>
            <SpanCircle></SpanCircle>
            <Title>Tech 6</Title>
          </CircleContainer>
          <AboutSpan href="https://styled-components.com/" target="_blank">
            Styled-components
          </AboutSpan>
          <SpanParagraph>
            With a deep understanding of Styled Components, I seamlessly
            integrate styling and functionality, enabling the creation of
            elegant and maintainable CSS-in-JS solutions that elevate the
            overall user experience.
          </SpanParagraph>
        </EachSpan>
      </SpanContainer>
    </Skill>
  );
}

export default Skills;
