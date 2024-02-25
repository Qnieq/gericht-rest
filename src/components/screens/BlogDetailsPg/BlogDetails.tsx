import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../ui/header/Header";
import { useActions } from "../../../hooks/useActions";
import { useNewsById } from "../../../hooks/blog_hooks/useNews";
import HeroSection from "../../../ui/hero_section/HeroSection";
import Footer from "../../../ui/footer/Footer";
import BlogDetailsSection from "./blog_details_section/BlogDetailsSection";

const BlogDetails = () => {
    const { title } = useParams()
    const { getNewsById } = useActions()
    const { blogNewsById } = useNewsById()
    useEffect(() => {
        getNewsById(title)
    }, [title])

    let last = null;
    if (blogNewsById.newsById) {
        last = Object.keys(blogNewsById.newsById)[Object.keys(blogNewsById.newsById).length - 1];
        console.log(blogNewsById.newsById[last]);
    }

    return (
        <>
            <Header props={"#0C0C0C"} />
            <HeroSection props={"Our Blogs"} />
            {   
                blogNewsById.fulfilled ?
                    <BlogDetailsSection props={blogNewsById.newsById[last]} />
                    :
                    null 
            }
            <Footer props={"#0C0C0C"} />
        </>
    );
}

export default BlogDetails;