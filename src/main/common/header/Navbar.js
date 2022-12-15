import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../App.css";
import Logo from "../../../assets/header/logo.svg";
export default function Navbar() {
  const navRef = React.useRef(null);

  const onToggleClick = (e) => {
    navRef.current.classList.toggle("show");
   };
  return (
    <>
      <nav className=" text-gray-400  bg-white lg:px-10 lg:py-3 lg:shadow-md sticky inset-0" >
        <div className="grid space-y-5 lg:space-y-0 lg:grid-cols-2 space-x-10 ">
          <div className="grid grid-cols-2 space-x-10 lg:space-x-0 justify-items-start shadow-md lg:shadow-none px-5 py-3 lg:p-0" >
            <div className="justify-self-start">
              <img src={Logo} alt="" className="h-[70px]" />
            </div>
            <button className="lg:hidden h-[70px] grid content-center justify-self-end" onClick={onToggleClick}>  
                  <FontAwesomeIcon icon={faBars} className="h-8" />
            </button>  
          </div>
          <div className="lg:h-[70px] hide  lg:grid content-center lg:justify-self-end hidden" ref={navRef}>
            <div className="grid grid-rows-7 lg:flex lg:space-x-10">
              <div className="px-5 py-3 lg:px-0 lg:py-0">
                <div className="hover:text-[#F94F4F] cursor-pointer">Home</div>
              </div>
              <div className="px-5 py-3 lg:px-0 lg:py-0">
                <div className="hover:text-[#F94F4F] cursor-pointer">
                  <a href=""> About&nbsp;Us </a>
                </div>
              </div>
              <div className="px-5 py-3 lg:px-0 lg:py-0">
                <div className="hover:text-[#F94F4F] cursor-pointer">
                  Services
                </div>
              </div>
              <div className="px-5 py-3 lg:px-0 lg:py-0">
                <div className="hover:text-[#F94F4F] cursor-pointer">
                  Projects
                </div>
              </div>
             
              <div className="px-5 py-3 lg:px-0 lg:py-0">
                <div className="hover:text-[#F94F4F] cursor-pointer">Blog</div>
              </div>
              <div className="px-5 py-3 lg:px-0 lg:py-0">
                <div className="hover:text-[#F94F4F] cursor-pointer">
                  Contact
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
 {/* <div className="px-5 py-3 lg:px-0 lg:py-0">
                <div className="hover:text-[#F94F4F] cursor-pointer">
                  Pricing
                </div>
              </div> */}
