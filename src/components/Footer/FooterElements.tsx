import styled from "styled-components";

export const FooterContainer = styled.div.attrs((props) => ({
  id: "contact",
}))`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  position: relative;
  height: 90vh;
  align-items: center;
`;

export const FooterSection = styled.div`
  width: 100%;
  height: 600px;
  margin-inline: 20px;
  position: relative;
  border: 1px solid black;
  clip-path: polygon(19% 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 22%);
`;

export const FooterTitle = styled.p`
  width: 200px;
  font-weight: bold;
  font-family: "Indie Flower", cursive;
  margin-left: 30px;
  margin-top: 30px;
  font-size: 15px;
  position: absolute;
  top: 80px;
  left: 50px;
  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;
export const FooterTalk = styled.h1`
  position: absolute;

  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 110px;
  display: flex;
  align-items: center;
  gap: 15px;
  background: linear-gradient(
    75deg,
    rgba(181, 4, 26, 1) 0%,
    rgba(226, 5, 33, 1) 50%,
    rgba(74, 22, 17, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Space Grotesk", sans-serif;
`;

export const FooterMainText = styled.div`
  position: absolute;
  bottom: -30px;
  right: 10px;

  display: flex;
  gap: 10px;
  font-family: "Space Grotesk", sans-serif;
  @media screen and (max-width: 770px) {
    bottom: -20px;
  }
  @media screen and (max-width: 580px) {
    bottom: -15px;
  }
  @media screen and (max-width: 580px) {
    bottom: -10px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
`;

export const FooterText = styled.h1`
  font-size: 100px;
  letter-spacing: 3px;
  background: linear-gradient(
    75deg,
    rgba(181, 4, 26, 1) 0%,
    rgba(226, 5, 33, 1) 50%,
    rgba(74, 22, 17, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 770px) {
    font-size: 70px;
  }
  @media screen and (max-width: 580px) {
    font-size: 50px;
  }
  @media screen and (max-width: 580px) {
    font-size: 30px;
  }
`;
export const ReachOut = styled.p`
  font-size: 40px;
  letter-spacing: 3px;
  color: #a39d9db5;
  font-family: "Indie Flower", cursive;
  background: linear-gradient(
    75deg,
    rgba(181, 4, 26, 1) 0%,
    rgba(226, 5, 33, 1) 50%,
    rgba(74, 22, 17, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const ContactSection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

export const EmailLine = styled.a`
  text-decoration: none;
  color: black;
  font-size: 20px;

  letter-spacing: 3px;

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    border-bottom: 3px solid #e20521;
    transition: width 0.5s ease;
  }
  &:hover::after {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;
