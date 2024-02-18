import Header from "../../../ui/header/Header";
import HeroSection from "../../../ui/hero_section/HeroSection";
import BlogSection from "./blog_section/BlogSection";

const Blog = () => {

    return (
        <>
            <Header props={"#0C0C0C"} />
            <HeroSection props={"Our Blogs"} />
            <BlogSection />
        </>
    );
}

export default Blog;