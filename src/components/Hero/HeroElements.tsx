import styled from "styled-components";

export const HeroText = styled.p`
  color: #141414;
  font-weight: 600;
  font-size: 25px;
  padding-inline: 30px;
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;

export const HeadingContainer = styled.div.attrs((props) => ({
  id: "home",
}))`
  padding-top: 180px;
  display: flex;
  padding-inline: 140px;
  flex-direction: column;
  gap: 30px;
  position: relative;
  @media screen and (max-width: 900px) {
    padding-inline: 70px;
  }
  @media screen and (max-width: 700px) {
    padding-inline: 50px;
    padding-top: 130px;
  }
  @media screen and (max-width: 400px) {
    padding-inline: 30px;
    padding-top: 100px;
  }
`;

export const HeadingText = styled.h1`
  background: linear-gradient(
    75deg,
    rgba(181, 4, 26, 1) 0%,
    rgba(226, 5, 33, 1) 50%,
    rgba(74, 22, 17, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-clip: text;
  font-weight: 700;
  font-size: 70px;
  padding-top: 20px;
  padding-left: 30px;
  -webkit-animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;

  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @media screen and (max-width: 700px) {
    font-size: 50px;
  }
  @media screen and (max-width: 400px) {
    font-size: 30px;
  }
`;

export const HeadingSpan = styled.a`
  font-weight: 700;
  background: linear-gradient(
    75deg,
    rgba(181, 4, 26, 1) 0%,
    rgba(226, 5, 33, 1) 50%,
    rgba(74, 22, 17, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 30px;
  text-decoration: none;
  position: relative;

  &:hover {
    color: white;
    background: unset;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;
    background-clip: unset;
    padding-left: 10px;
  }
  &::before {
    background: linear-gradient(
      75deg,
      rgba(181, 4, 26, 1) 0%,
      rgba(226, 5, 33, 1) 50%,
      rgba(255, 255, 255, 1) 100%
    );
    content: "";
    inset: 0;
    position: absolute;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.8s ease-in-out;
    z-index: -1;
    width: 250px;
    height: 50px;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;
export const HeadingSpanName = styled.span`
  font-weight: 700;
  background: linear-gradient(
    75deg,
    rgba(181, 4, 26, 1) 0%,
    rgba(226, 5, 33, 1) 50%,
    rgba(74, 22, 17, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 30px;
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;

export const HeroLinksIcon = styled.img.attrs((props) => ({
  src: props.src,
  alt: "Link Icon",
}))`
  width: 24px;
  height: 24px;
`;

export const HeroLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const HeroLinks = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 30px;
`;

export const TechstackContainer = styled.div`
  display: flex;
  gap: 20px;
  background-color: transparent;
  align-items: center;
  padding-left: 30px;
  position: relative;
`;

export const TechHeading = styled.h1`
  font-size: 20px;
  padding-right: 10px;
  border-right: 3px solid #b4aaa3;
  background: linear-gradient(
    75deg,
    rgba(181, 4, 26, 1) 0%,
    rgba(226, 5, 33, 1) 50%,
    rgba(74, 22, 17, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media screen and (max-width: 700px) {
    font-size: 15px;
  }
`;

export const TechLink = styled.a`
  text-decoration: none;
`;

export const TechIcon = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
  title: props.title,
}))`
  width: 30px;
  height: 30px;
  @media screen and (max-width: 700px) {
    width: 20px;
    height: 20px;
  }
`;
