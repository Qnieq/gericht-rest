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
            <Header color={"#0C0C0C"} />
            <HeroSection type={"Our Chefs"} />
            <TeamBgElem />
            <TeamSection  />
            <VideoSection color={"#0C0C0C"} />
            <TeamAwards />
            <Footer color={"#0C0C0C"}/>
        </>
    );
}

export default Team;