'use client'
import styled from "styled-components";
import React, { useState } from "react";
import Image from 'next/image'
import Button from "./Button";
import DropdownMenu from "./DropdownMenu";




export interface NavbarProps {
  logoSrc: string;
  logoAlt: string;
  dropdowns: Dropdown[];
  buttons: ButtonProps[];
}

interface Dropdown {
  text: string;
  dropdownItems: DropdownItem[];
}

interface DropdownItem {
  href: string;
  text: string;
}

interface ButtonProps {
  text: string;
  icon?: string;
  alt?: string;
  variant?: 'outline' | 'default';
}

const Navbar: React.FC<NavbarProps> = ({
  logoSrc,
  logoAlt,
  dropdowns,
  buttons,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Header>
        <Logo href="" className="logo">
          <Image src={logoSrc} alt={logoAlt} width={158} height={30} priority />
        </Logo>

        <NavbarList className={`navbarr ${menuOpen ? "open" : ""}`}>
          {dropdowns.map((dropdown, index) => (
            <NavbarItem key={index}>
              <DropdownMenu label={dropdown.text} items={dropdown.dropdownItems} />
            </NavbarItem>
          ))}
        </NavbarList>

        <Main className="main">
          <FeatureList>
            {buttons.map((button, index) => (
              <Button
                key={index}
                icon={ !! button.icon ?<Image
                  src={button.icon}
                  alt={button.alt ?? ''}
                  width={18.61}
                  height={18.61}
                  priority
                /> : null}
                text={button.text}
                alt={button.alt}
                variant={button.variant || 'default'}
              />
            ))}
          </FeatureList>
          <MenuIcon className={`bi-list ${menuOpen ? "bi-x" : ""}`} id="menu-icon" onClick={toggleMenu}>
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.570312 2H31.9989" stroke="white" strokeWidth="2.85714" />
              <path d="M0.570312 12.4761H31.9989" stroke="white" strokeWidth="2.85714" />
              <path d="M0.570312 22H31.9989" stroke="white" strokeWidth="2.85714" />
            </svg>
          </MenuIcon>
        </Main>
      </Header>
    </>
  );
};

export default Navbar

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 82px;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  color : white;
  padding: 20px 50px;
  transition: all 0.5s ease;

  @media only screen and (max-width: 1350px) {
    padding: 14px 2%;
    transition: 0.2s;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;

  img {
    margin-right: 3px;
    transition: all 0.5s ease;
  }

  span {
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    transition: all 0.5s ease;
  }

  @media only screen and (max-width: 1090px) {
    img {
      margin-left: 10px;
      width: 136px;
      transition: all 0.5s ease;
    }

    span {
      font-size: 1.1rem;
      transition: all 0.5s ease;
    }
  }
`;

const NavbarList = styled.ul`
  display: flex;
  list-style-type: none; /* Ensure no bullet points */
  margin-inline: -15px;
  &.open {
    @media only screen and (max-width: 1090px) {
      position: absolute;
      top: 100%;
      right: 2%;
      width: 270px;
      height: auto;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 10px;
      padding-top: 20px;
      padding-bottom: 20px;
      transition: all 0.5s ease;
      background: white;
    }
  }

  @media only screen and (max-width: 1090px) {
    position: absolute;
    top: 100%;
    right: -100vw;
    width: 270px;
    height: auto;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    transition: all 0.5s ease;
    background: white;
  }
`;

const NavbarItem = styled.li`
    align-content: center;
  a {
    font-size: 14px;
  }
  a.menu {
    font-size: 14px;
    font-weight: 400;
    margin: 0 15px;
    transition: all 0.5s ease;
    color: #fff;

    &:hover {
    }

    &.active {
    }
  }
  .btnDropdown {
    ${({theme})=>theme.style.flexRowNoWrap}
    align-items: center;
    gap: 12px
  }

  @media only screen and (max-width: 1090px) {
    a.menu {
      display: block;
      margin: 12px 0;
      padding: 0 25px;
      color: #fff;
      transition: all 0.5s ease;

      &:hover {
        color: #000000;
        transform: translateX(7px);
      }

      &.active {
        color: #000000;
      }
    }
  }

  @media only screen and (max-width: 1350px) {
    a {
      padding: 5px 0;
      margin: 0 20px;
    }
  }
`;

const Main = styled.div`

  ${({theme})=>theme.style.flexRowNoWrap}
  gap: 16px;
`;

const FeatureList = styled.div`
${({theme})=>theme.style.flexRowNoWrap}
font-size: 14px;
gap: 8px;
`
const MenuIcon = styled.div`
  color: #fff;
  cursor: pointer;
  z-index: 10001;
  display: none;

  @media only screen and (max-width: 1090px) {
    display: flex;
    align-items: center;
  }

`;
