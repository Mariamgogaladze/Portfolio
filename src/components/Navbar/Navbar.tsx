import {
  NavBarContainer,
  NavLogo,
  NavLinks,
  NavMenu,
  NavItem,
  NavMenuIcon,
} from "./NavbarElements";
import menu from "./../../images/menu.png";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface NavbarProps {
  toggle: any;
}
function Navbar({ toggle }: NavbarProps) {
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [navShadow, setNavShadow] = useState("none");

  useEffect(() => {
    AOS.init({});
  });

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll > 700) {
        setNavbarBackground("white");
        setNavShadow("rgba(149, 157, 165, 0.2) 0px 8px 24px;");
      } else {
        setNavbarBackground("transperent");
        setNavShadow("none");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <NavBarContainer background={navbarBackground} shadow={navShadow}>
        <>
          <NavLogo>MG</NavLogo>
        </>
        <NavMenuIcon onClick={toggle} src={menu} />
        <NavMenu data-aos="fade-left" data-aos-easing="ease-in-sine">
          <NavItem>
            <NavLinks
              to="home"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="about"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="skills"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Skills
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavBarContainer>
    </>
  );
}

export default Navbar;
