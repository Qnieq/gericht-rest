import { useEffect, useState } from "react";
import Header from "../../../ui/header/Header";
import HeroSection from "../../../ui/hero_section/HeroSection";
import Chef from "./chef/Chef";
import { useParams } from "react-router-dom";
import PersAchievements from "./pers_achiev/PersAchievements";
import Footer from "../../../ui/footer/Footer";
import CDBgElem from "./cd_bg_elem/CDBgElem";
import { useActions } from "../../../hooks/useActions";
import { useChefById } from "../../../hooks/team_hooks/useChefById";

const ChefsDetails = () => {

    const { id } = useParams()
    const { chefById } = useChefById()
    const { getChefsById } = useActions()

    useEffect(() => {
        getChefsById(id)
    }, []);


    return (
        <>
            <Header props={"#0C0C0C"} />
            <HeroSection props={"Our Chefs"} />
            <CDBgElem />
            {chefById.fulfilled ?
                <Chef props={chefById} />
                :
                <></>}

            <PersAchievements props={chefById} />
            <Footer props={"#0C0C0C"} />
        </>
    );
}

export default ChefsDetails;