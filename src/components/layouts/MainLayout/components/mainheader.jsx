import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Mainheader = React.memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = isScrolled ? "header_scrolled" : "header";

  return (
    <div className={`fixed top-0 w-[100%] ${headerClass}`}>
      <header className="container mx-auto flex items-center justify-between gap-[20px] pt-[30px] pb-[17px]">
        <div className="flex items-center justify-between gap-[50px]">
          <Link to="/">
            <img src="/svg/softwhere.svg" alt="" />
          </Link>
          <ul className="flex gap-[35px]">
            <a href="#about" className="font-[400 cursor-pointer">
              About
            </a>
            <a
              href="#services"
              className="text-gray-400 font-[400] cursor-pointer"
            >
              Services
            </a>
            <a href="#work" className="text-gray-400 font-[400] cursor-pointer">
              Works
            </a>
            <a href="#blog" className="text-gray-400 font-[400] cursor-pointer">
              Blog
            </a>
          </ul>
        </div>
        <div
          className="rounded-[55px] py-[14px] px-[11px] bg-white cursor-pointer"
          style={{ boxShadow: "0px 1px 19px -8px rgba(34, 60, 80, 0.2)" }}
          onClick={() => setToggle(!toggle)}
        >
          <img
            src={toggle ? "/images/bar.png" : "/images/bar.png"}
            alt="menu"
            className="cursor-pointer"
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl mt-[17px]`}
            style={{
              boxShadow: "0px 1px 19px -8px rgba(34, 60, 80, 0.2)",
              zIndex: "9999",
            }}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-black" : "text-gray-500"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
});

Mainheader.displayName = "Mainheader";
export default Mainheader;