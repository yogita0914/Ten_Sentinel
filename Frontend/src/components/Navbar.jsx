import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Services",
      submenu: [
        { label: "Web Design", href: "/web-design" },
        { label: "Development", href: "" },
        { label: "Marketing", href: "/marketing" },
        { label: "Training & Certificate", href: "" },
        { label: "Cloud Security", href: "/cloud-security" },
      ],
    },
    {
      label: "Careers",
      submenu: [
        {
          label: "Internship",
          href: "https://internships.entrepreneurshipnetwork.net/",
        },
        {
          label: "Job Openings",
          href: "https://jobs.entrepreneurshipnetwork.net/",
        },
      ],
    },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact Us", href: "/contact" },
  ];

  const handleMouseEnter = (label) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
    setTimeoutId(id);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="bg-white w-full z-50 shadow-md fixed top-0 left-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
            <span className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
              Ten Sentinel
            </span>
          </div>

          <div className="hidden lg:flex space-x-6 items-center">
            {menuItems.map((item, idx) =>
              item.submenu ? (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center font-medium gap-1 text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                    {item.label}
                    {openDropdown === item.label ? (
                      <ChevronUp size={14} className="text-blue-600" />
                    ) : (
                      <ChevronDown size={14} className="text-blue-600" />
                    )}
                  </button>
                  {openDropdown === item.label && (
                    <div
                      className="absolute bg-white rounded shadow-md mt-2 min-w-[160px] z-50"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.submenu.map((sub, i) => (
                        <a
                          key={i}
                          href={sub.href || "#"}
                          className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                        >
                          {sub.label || sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={idx}
                  href={item.href}
                  className="font-medium text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          <div className="hidden lg:block">
            <button className="bg-blue-600 text-white hover:bg-white hover:text-blue-700 font-semibold px-4 py-2 rounded">
              Get Help NOW!
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4 }}
            className="lg:hidden bg-white rounded-lg px-4 py-3 space-y-2 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 border-b border-transparent hover:border-blue-600 transition"
          >
            {menuItems.map((item, idx) =>
              item.submenu ? (
                <div key={idx}>
                  <button
                    className="flex items-center w-full font-semibold"
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    {mobileDropdown === item.label ? (
                      <ChevronUp size={16} className="text-blue-600" />
                    ) : (
                      <ChevronDown size={16} className="text-blue-600" />
                    )}
                  </button>
                  {mobileDropdown === item.label && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.submenu.map((sub, i) => (
                        <a
                          key={i}
                          href={sub.href || "#"}
                          className="block text-sm hover:brightness-110 py-1 border-b border-transparent hover:border-blue-600 transition"
                        >
                          {sub.label || sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={idx}
                  href={item.href}
                  className="block font-medium hover:text-gray-300 py-1 border-b border-transparent hover:border-blue-600"
                >
                  {item.label}
                </a>
              )
            )}
            <button className="w-full mt-2 bg-blue-700 text-white hover:bg-gray-200 hover:text-blue-600 font-semibold py-2 rounded">
              Get Help NOW!
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;