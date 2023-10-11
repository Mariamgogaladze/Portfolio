import styled from "styled-components";

export const SidebarContainer = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  gap: 40px;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarLink = styled.a`
  text-decoration: none;
  color: #141414;
  font-size: 20px;
  padding-bottom: 30px;
  position: relative;
  font-weight: 400;
  &:hover {
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
  &:hover::after {
    width: 100%;
  }
`;
export const SidebarWrapper = styled.div``;
export const CloseIcon = styled.img.attrs((props) => ({
  src: props.src,
  alt: "close",
}))`
  width: 34px;
  height: 34px;
`;


