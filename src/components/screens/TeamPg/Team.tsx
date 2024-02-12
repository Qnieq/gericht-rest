import Footer from "../../../ui/footer/Footer";
import Header from "../../../ui/header/Header";
import HeroSection from "../../../ui/hero_section/HeroSection";
import VideoSection from "../../../ui/video_section/VideoSection";
import TeamAwards from "./team_awards/TeamAwards";
import TeamBgElem from "./team_bg_elem/TeamBgElem";
import TeamSection from "./team_section/TeamSection";

const Team = () => {
    return (
        <>
            <Header props={"#0C0C0C"} />
            <HeroSection props={"Our Chefs"} />
            <TeamBgElem />
            <TeamSection  />
            <VideoSection props={"#0C0C0C"} />
            <TeamAwards />
            <Footer props={"#0C0C0C"}/>
        </>
    );
}

export default Team;