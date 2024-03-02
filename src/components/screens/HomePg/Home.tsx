import AllMenus from "../../../ui/all_menus/AllMenus";
import Awards from "../../../ui/awards/Awards";
import BookATable from "../../../ui/book_a_table/BookATable";
import Chef from "../../../ui/chef/Chef";
import Customers from "../../../ui/customers/Customers";
import Footer from "../../../ui/footer/Footer";
import Header from "../../../ui/header/Header";
import Instagram from "../../../ui/instagram/Instagram";
import Special from "../../../ui/special/Special";
import VideoSection from "../../../ui/video_section/VideoSection";
import About_History from "./About_History/About_History";
import BackgroundElem from "./background_elem/BackgroundElem";
import BlogsUpdate from "./blogs_update/BlogsUpdate";
import HomeHero from "./homeHero/HomeHero";

const Home = () => {
    return (
        <>
            <Header color=""/>
            <HomeHero />
            <BackgroundElem />
            <About_History />
            <BookATable />
            <AllMenus />
            <Special />
            <Chef />
            <Customers color="#0C0B08" />
            <VideoSection color=""/>
            <Awards />
            <BlogsUpdate />
            <Instagram />
            <Footer color={""}/>
        </>
    );
}

export default Home;
