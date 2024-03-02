import Footer from "../../../ui/footer/Footer";
import Header from "../../../ui/header/Header";
import HeroSection from "../../../ui/hero_section/HeroSection";
import BlogBgElem from "./blog_bg_elem/BlogBgElem";
import BlogSection from "./blog_section/BlogSection";

const Blog = () => {

    return (
        <>
            <Header color={"#0C0C0C"} />
            <HeroSection type={"Our Blogs"} />
            <BlogBgElem />
            <BlogSection />
            <Footer color={"#0C0C0C"}/>
        </>
    );
}

export default Blog;