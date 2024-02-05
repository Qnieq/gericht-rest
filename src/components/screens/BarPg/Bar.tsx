import BookATable from "../../../ui/book_a_table/BookATable";
import BarAbout from "./barAbout/BarAbout";
import BarHero from "./barHero/BarHero";

const Bar = () => {
    return (
        <>
            <BarHero />
            <BookATable />
            <BarAbout />
        </>
    );
}

export default Bar;