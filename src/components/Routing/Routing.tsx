import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../screens/HomePg/Home";
import Bar from "../screens/BarPg/Bar";
import OurServices from "../screens/OurServicesPg/OurServices";


const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Bar" element={<Bar />} />
                <Route path="/Home/Our Services" element={<OurServices />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;