import { useEffect, useState } from "react";
import Header from "../../../ui/header/Header";
import HeroSection from "../../../ui/hero_section/HeroSection";
import Chef from "./chef/Chef";
import { useParams } from "react-router-dom";
import { TeamService } from "../../../services/team.service";
import PersAchievements from "./pers_achiev/PersAchievements";
import Footer from "../../../ui/footer/Footer";
import CDBgElem from "./cd_bg_elem/CDBgElem";

const ChefsDetails = () => {

    const { id } = useParams()

    const [chefData, setChefData] = useState<object>()

    useEffect(() => {
        const fetchData = async () => {
            const data = await TeamService.getChefsById(id);
            setChefData(data);
        };

        fetchData();
    }, []);


    return (
        <>
            <Header props={"#0C0C0C"} />
            <HeroSection props={"Our Chefs"} />
            <CDBgElem />
            <Chef props={chefData}/>
            <PersAchievements props={chefData}/>
            <Footer props={"#0C0C0C"}/>
        </>
    );
}

export default ChefsDetails;