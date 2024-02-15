import Header from "../../../ui/header/Header";
import HeroSection from "../../../ui/hero_section/HeroSection";
import Chef from "./chef/Chef";

const ChefsDetails = () => {



    return (
        <>
            <Header props={"#0C0C0C"} />
            <HeroSection props={"Our Chefs"} />
            <Chef />
        </>
    );
}

export default ChefsDetails;