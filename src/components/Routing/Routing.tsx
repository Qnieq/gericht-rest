import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../screens/HomePg/Home";
import Bar from "../screens/BarPg/Bar";
import OurServices from "../screens/OurServicesPg/OurServices";
import AboutUs from "../screens/AboutUsPg/AboutUs";


const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Bar" element={<Bar />} />
                <Route path="/Home/Our Services" element={<OurServices />} />
                <Route path="/Home/About Us" element={< AboutUs />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;