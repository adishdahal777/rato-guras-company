import React from "react";
import AboutUs from "./common/container/AboutUs";
import Blogs from "./common/container/Blogs";
import ContactUs from "./common/container/ContactUs";
import FirstContainer from "./common/container/FirstContainer";
import WhyToChooseUs from "./common/container/OurServices";
import Projects from "./common/container/Projects";
import Navbar from "./common/header/Navbar";
export default function Main(){
    return(
        <>
            <Navbar />
            <FirstContainer />
            <AboutUs />
            <WhyToChooseUs />
            <Projects />
            <Blogs  />
            <ContactUs />
        </>
    );
}