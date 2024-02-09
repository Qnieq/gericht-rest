import AllMenus from "../../../ui/all_menus/AllMenus";
import BookATable from "../../../ui/book_a_table/BookATable";
import Footer from "../../../ui/footer/Footer";
import HappyHours from "../../../ui/happy_hours/HappyHours";
import Header from "../../../ui/header/Header";
import HeroSection from "../../../ui/hero_section/HeroSection";
import OSBgElem from "./os_bg_elem/OSBgElem";
import ServingQuality from "./serving_quality/ServingQuality";

const OurServices = () => {
    return (
        <>
            <Header props={"#0C0C0C"}/>
            <HeroSection props={"What We offer"} />
            <OSBgElem />
            <ServingQuality />
            <AllMenus />
            <BookATable />
            <HappyHours />
            <Footer props={"#0C0C0C"}/>
        </>
    );
}

export default OurServices;