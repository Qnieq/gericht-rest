import AllMenus from "../../../ui/all_menus/AllMenus";
import BookATable from "../../../ui/book_a_table/BookATable";
import Chef from "../../../ui/chef/Chef";
import Header from "../../../ui/header/Header";
import Special from "../../../ui/special/Special";
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
        </>
    );
}

export default Home;