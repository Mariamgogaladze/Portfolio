import styled from "styled-components";

export const ProjectsContainer = styled.div.attrs((props) => ({
  id: "projects",
}))`
  margin-top: 190px;
  padding-block: 100px;
  padding-inline: 135px;

  @media screen and (max-width: 600px) {
    padding-inline: 40px;

  }
`;
export const ProjectsHeading = styled.h1`
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
  font-size: 40px;
  text-align: center;
`;
export const Projectsparagraph = styled.p`
  font-family: "Indie Flower", cursive;
  text-align: center;
  color: #141414;
`;

export const ProjectInfo = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px;
  align-items: flex-end;
  box-sizing: border-box;
`;

export const ProjectDesc = styled.p`
  color: white;
  transition: 0.5s;
  font-size: 14px;
  transform: translateY(200px);
  transition-delay: 0.4s;

  &:hover {
    transform: translateY(0px);
  }
`;

export const ProjectTitle = styled.h1`
  color: white;
  transition: 0.5s;
  text-transform: uppercase;
  margin-bottom: 5px;
  font-size: 20px;
  transform: translateY(400px);
  transition-delay: 0.3s;
  &:hover {
    transform: translateY(0px);
  }
`;
export const Project = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  transition: 0.5s;
  transform-style: preserve-3d;
  overflow: hidden;
  margin-right: 15px;
  margin-top: 45px;
  cursor: pointer;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 1.5rem;;
  &:hover {
    transform: rotateY(10deg);
  }

  &:hover ~ & {
    transform: rotateY(-10deg);
  }

  &:hover {
    transform: rotateY(0deg) scale(1.25);
    box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
  &:hover ${ProjectTitle} {
    transform: translateY(0px);
  }

  &:hover ${ProjectDesc} {
    transform: translateY(0px);
  }
`;
export const Mari = styled.a`
  text-decoration: none;
  color: white;
  opacity: 0;
  font-weight: 700;
  letter-spacing: 1.6;
  font-size: 15px;
  transform: translateY(50px);

  ${Project}:hover & {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.5s;
  }
`;

export const ProjectsSection = styled.div`
  margin-top: 150px;
  position: relative;
  width: 100%;
  display: flex;
  gap: 50px;
  justify-content: center;
  flex-wrap: wrap;
  transform-style: preserve-3d;
  perspective: 500px;
`;

export const ProjectImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.src,
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    /* z-index: 3; */
    z-index: 3;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.5s;
    mix-blend-mode: multiply;
    background: linear-gradient(
      180deg,
      rgba(181, 4, 26, 1),
      rgba(74, 22, 17, 1)
    );
  }

  &:hover:before {
    opacity: 1;
  }
  ${Project}:hover & {
    &:before {
      opacity: 1;
    }
  }
  ${Project}:hover ${ProjectInfo} {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.2s;
  }
`;

export const Wrapper2 = styled.div`
  z-index: 3;
`;
