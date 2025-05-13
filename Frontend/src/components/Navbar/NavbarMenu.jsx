import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  children,
  className = "",
}) => {
  const isDropdown = !!children;
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (setActive) setActive(item);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (setActive) setActive(null);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      ref={itemRef}
    >
      {isDropdown ? (
        <>
          <div className="relative z-10">
            <motion.button
              transition={{ duration: 0.3 }}
              className={`cursor-pointer text-black font-medium whitespace-nowrap px-3 py-1.5 relative ${className}`}
            >
              {item}
              {(isHovered || active === item) && (
                <motion.span
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-0 bg-gray-200 rounded-full -z-10"
                />
              )}
            </motion.button>
          </div>

          <AnimatePresence>
            {(isHovered || active === item) && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{
                  ...transition,
                  delay: 0.2,
                }}
                className="absolute top-full left-0 mt-5 z-50"
              >
                <motion.div
                  layoutId="dropdown"
                  className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200 overflow-hidden max-h-[80vh] overflow-y-auto w-max px-2"
                >
                  {children}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <motion.a
          href={href}
          transition={{ duration: 0.3 }}
          className={`cursor-pointer text-black font-medium whitespace-nowrap px-3 py-1.5 relative ${className}`}
        >
          {item}
          {(isHovered || active === item) && (
            <motion.span
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 bg-gray-200 rounded-full -z-10"
            />
          )}
        </motion.a>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children, activeItem }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex items-center justify-center space-x-1 sm:space-x-2"
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { active: activeItem, setActive })
      )}
    </nav>
  );
};

export function HoveredLink({ href, children }) {
  return (
    <a
      href={href}
      className="block px-3 py-2 text-black font-medium hover:text-blue-600 transition whitespace-nowrap text-sm"
    >
      {children}
    </a>
  );
};