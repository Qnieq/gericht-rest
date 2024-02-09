import Chef from "../../../ui/chef/Chef";
import Customers from "../../../ui/customers/Customers";
import Footer from "../../../ui/footer/Footer";
import Header from "../../../ui/header/Header";
import HeroSection from "../../../ui/hero_section/HeroSection";
import Instagram from "../../../ui/instagram/Instagram";
import About from "./about/About";
import AboutBgElem from "./about_bg_elem/AboutBgElem";
import OurHistory from "./ourHistory/OurHistory";

const AboutUs = () => {
    return (
        <>
            <Header props={"#0C0C0C"}/>
            <HeroSection props={"Welcome to Gerícht"} />
            <AboutBgElem />
            <OurHistory />
            <About />
            <Chef />
            <Customers props={"#0C0C0C"} />
            <Instagram />
            <Footer props={"#0C0C0C"}/>
        </>
    );
}

export default AboutUs;