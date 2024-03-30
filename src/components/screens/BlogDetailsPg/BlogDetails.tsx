import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../ui/header/Header";
import { useActions } from "../../../hooks/useActions";
import { useNewsById } from "../../../hooks/blog_hooks/useNews";
import HeroSection from "../../../ui/hero_section/HeroSection";
import Footer from "../../../ui/footer/Footer";
import BlogDetailsSection from "./blog_details_section/BlogDetailsSection";
import BlogDetailBgElem from "./blog_detail_bg_elem/BlogDetailBgElem";

const BlogDetails = () => {
    const { title } = useParams<{title?: string}>()
    const { getNewsById } = useActions()
    const { blogNewsById } = useNewsById()
    useEffect(() => {
        getNewsById(title)
    }, [title])


    const last: number = parseInt(Object.keys(blogNewsById.newsById)[Object.keys(blogNewsById.newsById).length - 1])


    return (
        <>
            <Header color={"#0C0C0C"} />
            <HeroSection type={"Our Blogs"} />
            <BlogDetailBgElem />
            {   
                blogNewsById.fulfilled ?
                    <BlogDetailsSection details={blogNewsById.newsById[last]} />
                    :
                    null 
            }
            <Footer color={"#0C0C0C"} />
        </>
    );
}

export default BlogDetails;