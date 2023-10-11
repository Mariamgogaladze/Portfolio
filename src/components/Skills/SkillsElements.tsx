import styled from "styled-components";

export const Skill = styled.div.attrs((props) => ({
  id: "skills",
}))`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  gap: 150px;
  padding-inline: 135px;
  justify-content: center;
  align-content: center;
  @media screen and (max-width: 900px) {
    padding: 70px;
  }
  @media screen and (max-width: 700px) {
    gap: 90px;
    margin-top: 100px;
  }
`;

export const SkillContainer = styled.div`
  text-align: center;
  padding-inline: 100px;
  @media screen and (max-width: 700px) {
    padding-inline: 50px;
  }
`;

export const AboutSpan = styled.a`
  font-size: 24px;
  text-decoration: none;
  background: linear-gradient(
    75deg,
    rgba(181, 4, 26, 1) 0%,
    rgba(226, 5, 33, 1) 50%,
    rgba(74, 22, 17, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 36px;
  font-weight: bold;
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;

export const SkillHeadin = styled.h1`
  background: linear-gradient(
    75deg,
    rgba(181, 4, 26, 1) 0%,
    rgba(226, 5, 33, 1) 50%,
    rgba(74, 22, 17, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 20px;
  @media screen and (max-width: 700px) {
    font-size: 30px;
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

export const SkillParagraph = styled.p`
  line-height: 28px;
  font-size: 17px;
  margin-bottom: 10px;
  color: #141414;
  @media screen and (max-width: 700px) {
    font-size: 15px;
  }
`;
export const SpanContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  position: relative;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
export const SpanParagraph = styled.p`
  font-size: 17px;
  line-height: 28px;
  margin-top: 8px;
  color: #141414;
  @media screen and (max-width: 700px) {
    font-size: 15px;
  }
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;
export const EachSpan = styled.div`
  padding: 30px;
  cursor: pointer;
  z-index: 111;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  &:hover {
    box-shadow: unset;
    border-radius: unset;
  }
`;
export const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;
export const SpanCircle = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 9999px;
  background-color: rgba(181, 4, 26, 1);
`;
export const Title = styled.p`
  color: #141414;
`;
