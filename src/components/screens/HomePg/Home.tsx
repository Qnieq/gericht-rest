import AllMenus from "../../../ui/all_menus/AllMenus";
import Awards from "../../../ui/awards/Awards";
import BookATable from "../../../ui/book_a_table/BookATable";
import Chef from "../../../ui/chef/Chef";
import Customers from "../../../ui/customers/Customers";
import Header from "../../../ui/header/Header";
import Special from "../../../ui/special/Special";
import VideoSection from "../../../ui/video_section/VideoSection";
import About_History from "./About_History/About_History";
import HomeHero from "./homeHero/HomeHero";

const Home = () => {
    return (
        <>
            <Header />
            <HomeHero />
            <About_History />
            <BookATable />
            <AllMenus />
            <Special />
            <Chef />
            <Customers />
            <VideoSection />
            <Awards />
        </>
    );
}

export default Home;
