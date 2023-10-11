import styled from "styled-components";

export const AboutContainer = styled.div.attrs((props) => ({
  id: "about",
}))`
  display: flex;
  padding-inline: 135px;
  padding-block: 50px;
  margin-top: 230px;
  gap: 70px;
  align-items: center;

  color: #fff;
  height: 100%;
  border-top: 0;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  padding-bottom: 10%;

  @media screen and (max-width: 1000px) {
    margin-top: 150px;
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 640px) {
    padding: 90px;
  }

`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  max-width: 600px;

  @media screen and (max-width: 1220px) {
    max-width: 500px;
  }
  @media screen and (max-width: 1000px) {
    max-width: unset;
  }
`;

export const AboutHeading = styled.h1`
  color: #141414;
  font-weight: 900;
  font-size: 20px;
  letter-spacing: 1px;
  font-family: "Indie Flower", cursive;
  @media screen and (max-width: 640px) {
    font-size: 15px;
  }
`;

export const AboutSecHeading = styled.h1`
  background: linear-gradient(
    75deg,
    rgba(181, 4, 26, 1) 0%,
    rgba(226, 5, 33, 1) 50%,
    rgba(74, 22, 17, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  @media screen and (max-width: 640px) {
    font-size: 20px;
  }
`;

export const AboutParagraph = styled.p`
  color: #141414;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  @media screen and (max-width: 640px) {
    font-size: 13px;
  }
`;

export const AboutImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: 100%;
`;
export const AboutImageContainer = styled.div`
  background-color: white;
  text-align: center;
  width: 100%;
`;
