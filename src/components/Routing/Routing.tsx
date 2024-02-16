import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../screens/HomePg/Home";
import Bar from "../screens/BarPg/Bar";
import OurServices from "../screens/OurServicesPg/OurServices";
import AboutUs from "../screens/AboutUsPg/AboutUs";
import ContactUs from "../screens/ContactUsPg/ContactUs";
import Team from "../screens/TeamPg/Team";
import ChefsDetails from "../screens/ChefsDetailsPg/ChefsDetails";
import Blog from "../screens/BlogPg/Blog";


const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Bar" element={<Bar />} />
                <Route path="/Home/Our Services" element={<OurServices />} />
                <Route path="/Home/About Us" element={<AboutUs />} />
                <Route path="/Home/Contact Us" element={<ContactUs />} />
                <Route path="/Home/Our Team" element={<Team />} />
                <Route path="/Home/Our Team/Chefs Details" element={<Team />} />
                <Route path="/Home/Our Team/Chefs Details/:id" element={<ChefsDetails />} />
                <Route path="/Home/Our Blogs" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;