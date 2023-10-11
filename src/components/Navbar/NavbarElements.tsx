import styled from "styled-components";
import { Link } from "react-scroll";
interface NavBarContainerProps {
  background: string;
  shadow:string;
}

export const NavBarContainer = styled.div<NavBarContainerProps>`
  padding-inline: 64px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.background};
  position: sticky;
  box-shadow:${props => props.shadow};
  top: 0;
  z-index: 999;
`;

export const NavLogo = styled.h1`
  font-size: 50px;
  font-family: "Indie Flower", cursive;
  background: linear-gradient(
    75deg,
    rgba(181, 4, 26, 1) 0%,
    rgba(226, 5, 33, 1) 50%,
    rgba(74, 22, 17, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-animation: tracking-in-contract 0.8s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) both;

  @-webkit-keyframes tracking-in-contract {
    0% {
      letter-spacing: 1em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      letter-spacing: normal;
      opacity: 1;
    }
  }
  @keyframes tracking-in-contract {
    0% {
      letter-spacing: 1em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    60% {
      opacity: 0.9;
    }
    100% {
      letter-spacing: normal;
      opacity: 1;
    }
  }
`;

export const NavLinks = styled(Link)`
  text-decoration: none;
  color: #141414;
  padding-bottom: 25px;
  position: relative;
  font-weight: 400;
  cursor: pointer;

  &:hover{
    background: linear-gradient(
    75deg,
    rgba(181, 4, 26, 1) 0%,
    rgba(226, 5, 33, 1) 50%,
    rgba(74, 22, 17, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    border-bottom: 3px solid #e20521;
    transition: width 0.5s ease;
  }
  &:hover::after  {
    width: 100%;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  font-weight: 600;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const NavItem = styled.li``;

export const NavMenuIcon = styled.img.attrs((props) => ({
  src: props.src,
  alt: "Menu Icon",
}))`
  width: 24px;
  height: 24px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    cursor: pointer;
  }
`;
