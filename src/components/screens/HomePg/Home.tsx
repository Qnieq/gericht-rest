import BookATable from "../../../ui/book_a_table/BookATable";
import Header from "../../../ui/header/Header";
import About_History from "./About_History/About_History";
import HomeHero from "./homeHero/HomeHero";

const Home = () => {
    return (
        <>
            <Header />
            <HomeHero />
            <About_History />
            <BookATable />
        </>
    );
}

export default Home;