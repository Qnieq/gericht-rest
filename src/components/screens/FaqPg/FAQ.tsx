import Footer from "../../../ui/footer/Footer";
import Header from "../../../ui/header/Header";
import HeroSection from "../../../ui/hero_section/HeroSection";
import FAQBgElem from "./faq_bg_elem/FAQBgElem";
import FAQSection from "./faq_section/FAQSection";

const FAQ = () => {
    return (
        <>
            <Header props={"#0C0C0C"} />
            <HeroSection props={"Frequently Asked Questions"} />
            <FAQBgElem />
            <FAQSection />
            <Footer props={"#0C0C0C"} />
        </>
    );
}

export default FAQ;