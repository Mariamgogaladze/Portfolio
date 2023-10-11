import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
} from "./SidebarElements";

import close from "./../../images/close.png";

interface SidebarProps {
  isOpen: boolean;
  toggle: any;
}

function Sidebar({ toggle, isOpen }: SidebarProps) {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      toggle();
    }
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon src={close} onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={() => scrollToSection("home")}>
            Home
          </SidebarLink>
          <SidebarLink onClick={() => scrollToSection("about")}>
            About
          </SidebarLink>
          <SidebarLink onClick={() => scrollToSection("skills")}>
            Skills
          </SidebarLink>
          <SidebarLink onClick={() => scrollToSection("projects")}>
            Projects
          </SidebarLink>
          <SidebarLink onClick={() => scrollToSection("contact")}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
