import Footer from "../../../ui/footer/Footer";
import Header from "../../../ui/header/Header";
import HeroSection from "../../../ui/hero_section/HeroSection";
import MapSection from "./MapSection/MapSection";
import CUBgElem from "./cu_bg_elem/CUBgElem";
import SendEmailForm from "./send_email_form/SendEmailForm";

const ContactUs = () => {
    return (
        <>
            <Header props={"#0C0C0C"} />
            <HeroSection props={"Contact Us"} />
            <CUBgElem />
            <MapSection />
            <SendEmailForm />
            <Footer props={"#0C0C0C"}/>
        </>
    );
}

export default ContactUs;