import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../screens/HomePg/Home";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;