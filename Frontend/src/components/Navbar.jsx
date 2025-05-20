import React, { useState } from "react";
import { Menu, MenuItem, HoveredLink } from "./Navbar/NavbarMenu";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

// BrandLogo component
const BrandLogo = ({ mobile = false }) => (
  <div className={`flex items-center ${mobile ? 'min-w-[120px]' : ''}`}>
    <img
      src={logo}
      alt="Logo"
      className={`${mobile ? 'h-6' : 'h-5 sm:h-6'} w-auto`}
    />
    <span className={`${mobile ? 'ml-3 text-lg' : 'ml-2 text-sm sm:text-base'} font-bold text-transparent bg-gradient-to-r ${mobile ? 'from-blue-600 to-indigo-600' : 'from-blue-700 to-indigo-700'} bg-clip-text whitespace-nowrap`}>
      Ten Sentinel
    </span>
  </div>
);

// MobileMenu component
const MobileMenu = ({ items, isOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  if (!isOpen) return null;

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="mt-2 backdrop-blur-xl rounded-lg shadow-lg p-4 w-[70%] mx-auto">
      {items.map((menuItem, index) => {
        if (menuItem.type === "link") {
          return (
            <MobileMenuItem key={index} href={menuItem.href}>
              {menuItem.item}
            </MobileMenuItem>
          );
        } else {
          return (
            <MobileDropdownItem
              key={index}
              index={index}
              title={menuItem.item}
              items={menuItem.children}
              isOpen={openDropdown === index}
              onToggle={handleDropdownToggle}
            />
          );
        }
      })}
    </div>
  );
};

// MobileDropdownItem component
const MobileDropdownItem = ({ index, title, items, isOpen, onToggle }) => {
  return (
    <div className="mb-2">
      <button
        onClick={() => onToggle(index)}
        className="flex items-center justify-start w-full text-white font-medium py-2"
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`pl-4 space-y-2 overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        {items.map((child, childIndex) => (
          <MobileMenuItem
            key={childIndex}
            href={child.href}
            small
          >
            {child.item}
          </MobileMenuItem>
        ))}
      </div>
    </div>
  );
};

// MobileMenuItem component (updated to handle external links)
const MobileMenuItem = ({ href, children, small = false }) => {
  const isExternal = href.startsWith("http");
  const className = `block py-2 text-white hover:text-blue-400 transition ${small ? 'text-sm' : ''}`;

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
};

const ExternalHoveredLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block px-3 py-1.5 text-black font-medium rounded hover:bg-blue-100 hover:text-blue-700 transition"
  >
    {children}
  </a>
);


function Navbar() {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Menu Items
  const menuItems = [
    { type: "link", item: "Home", href: "/" },
    { type: "link", item: "About", href: "/about" },
    {
      type: "dropdown",
      item: "Services",
      children: [
        { item: "Web Design", href: "/web-design" },
        { item: "Development", href: "/development" },
        { item: "Marketing", href: "/marketing" },
        { item: "Training", href: "" },
        { item: "Cloud Security", href: "/cloud-security" }
      ]
    },
    {
      type: "dropdown",
      item: "Careers",
      children: [
        { item: "Internship", href: "https://internships.entrepreneurshipnetwork.net/" },
        { item: "Job Openings", href: "https://jobs.entrepreneurshipnetwork.net/" }
      ]
    },
    { type: "link", item: "Blogs", href: "/blogs" },
    { type: "link", item: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Desktop/Tablet Navbar (≥768px) */}
      <div className="hidden md:flex justify-center w-full">
        <div className={`
          fixed top-4 z-50 shadow-lg bg-white rounded-full flex items-center justify-between px-3 py-3 mt-5 w-[94%] max-w-[850px] lg:w-[90%] xl:w-[85%] 2xl:w-[75%]
        `}>

          <BrandLogo />

          {/* Centered Menu */}
          <div className="flex-1 mx-2">
            <Menu setActive={setActive} activeItem={active}>
              {menuItems.map((menuItem, index) => (
                <MenuItem
                  key={index}
                  setActive={setActive}
                  active={active}
                  item={menuItem.item}
                  href={menuItem.href}
                  className="nav-item"
                >
                  {menuItem.type === "dropdown" && (
                    <div className={`flex flex-col space-y-1 p-1.5 text-xs md:text-[0.8125rem] lg:text-sm
                    `}>
                      {menuItem.children.map((child, childIndex) => (
                        menuItem.item === "Careers" ? (
                          <ExternalHoveredLink key={childIndex} href={child.href}>
                            {child.item}
                          </ExternalHoveredLink>
                        ) : (
                          <HoveredLink key={childIndex} href={child.href}>
                            {child.item}
                          </HoveredLink>
                        )
                      ))}
                    </div>
                  )}

                </MenuItem>
              ))}
            </Menu>
          </div>

          {/* Right-side Button */}
          <button className="nav-button bg-black text-white
            px-3 py-3
            text-[13px] font-bold
            rounded-full hover:bg-gray-600 
            min-w-[90px] bg-[linear-gradient(to_right,#4776E6_0%,#8E54E9_51%,#4776E6_100%)] text-center uppercase transition-[0.5s] bg-[200%_auto] hover:bg-[right_center] hover:text-white hover:no-underline">
            Get Started
          </button>

        </div>
      </div>

      {/* Mobile Navbar (≤767px) */}
      <div className="md:hidden fixed top-6 z-50 w-full px-4">
        <div className="bg-white rounded-full shadow-lg flex items-center justify-between p-3 w-[80%] mx-auto">
          <BrandLogo mobile />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <MobileMenu items={menuItems} isOpen={mobileMenuOpen} />
      </div>
    </>
  );
}

export default Navbar;