import BookATable from "../../../ui/book_a_table/BookATable";
import Footer from "../../../ui/footer/Footer";
import HappyHours from "../../../ui/happy_hours/HappyHours";
import Special from "../../../ui/special/Special";
import BarAbout from "./barAbout/BarAbout";
import BarHero from "./barHero/BarHero";
import BgElemBar from "./bg_elem_bar/BgElemBar";
import FindUs from "./findUs/FindUs";
import PoisonVar from "./poisonVar/PoisonVar";

const Bar = () => {
    return (
        <>
            <BarHero />
            <BgElemBar />
            <BookATable />
            <BarAbout />
            <PoisonVar />
            <HappyHours />
            <Special />
            <FindUs />
            <Footer />
        </>
    );
}

export default Bar;