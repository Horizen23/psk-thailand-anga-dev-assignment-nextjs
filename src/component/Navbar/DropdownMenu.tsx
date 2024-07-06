import React, { useState } from "react";
import styled from "styled-components";
import Image from 'next/image'

const DropdownMenu = styled.ul<{ x: number; y: number; open: boolean }>`
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  background: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  display: ${props => (props.open ? "block" : "none")};
  padding: 10px 0;
  z-index: 1000;

  a {
    display: block;
    padding: 10px 20px;
    color: #000;
    transition: background 0.3s;
    font-size: .9rem;
    &:hover {
      background: #f1f1f1;
    }
  }
`;

const Dropdown = ({ label, items }: { label: string; items: { href: string; text: string }[] }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });

  const toggleDropdown = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDropdownPosition({ x: rect.left, y: rect.bottom });
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div>
      <a
        href="#"
        className="menu active btnDropdown"
        onClick={toggleDropdown}
        onMouseLeave={closeDropdown}
      >
        <span>
          {label}
        </span>
        {items.length >0 && 
        <Image
        src="/arrow.svg"
        alt="arrow"
        width={9}
        height={4.5}
        priority
        />
      }
      </a>
      {items.length >0 &&
        <DropdownMenu
        x={dropdownPosition.x}
        y={dropdownPosition.y}
        open={dropdownOpen}
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={closeDropdown}
        >
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </DropdownMenu>
      }
    </div>
  );
};

export default Dropdown;
