import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../screens/HomePg/Home";
import Bar from "../screens/BarPg/Bar";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Bar" element={<Bar />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;