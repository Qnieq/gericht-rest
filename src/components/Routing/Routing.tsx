import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../screens/HomePg/Home";
import Bar from "../screens/BarPg/Bar";
import OurServices from "../screens/OurServicesPg/OurServices";
import AboutUs from "../screens/AboutUsPg/AboutUs";
import ContactUs from "../screens/ContactUsPg/ContactUs";


const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Bar" element={<Bar />} />
                <Route path="/Home/Our Services" element={<OurServices />} />
                <Route path="/Home/About Us" element={< AboutUs />} />
                <Route path="/Home/Contact Us" element={< ContactUs />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;