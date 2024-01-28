import BlogSection from "../../../../ui/ui_components/blog_section/BlogSection";
import TitleCenter from "../../../../ui/ui_components/title_center/TitleCenter";
import styles from "./BlogsUpdate.module.scss"
import Slider from "react-slick";

const BlogsUpdate = () => {

    const settings: object = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className={styles.dots}></div>
        )
    };


    interface IBlogs {
        id: number
        image: string
        date: string
        author: string
        title: string
        description: string
        url: string
    }

    const blogs: IBlogs[] = [
        {
            id: 1,
            image: "/images/blogs_update/blog_1.png",
            date: "16 Apr 2023",
            author: "- Annalisa L",
            title: "tips for prepping and caring for your grill",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
            url: "",
        },
        {
            id: 2,
            image: "/images/blogs_update/blog_2.png",
            date: "23 May 2023",
            author: "- John Micheal",
            title: "summer cocktails and mocktails",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
            url: "",
        },
        {
            id: 3,
            image: "/images/blogs_update/blog_3.png",
            date: "06 Aug 2023",
            author: "- Fred W",
            title: "easy cooking for college students",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
            url: "",
        },
    ]

    const text: string[] = ["Blogs", "Gerícht updates"];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <TitleCenter props={text} />
                <div className={styles.blogs_update_box}>
                    <BlogSection props={blogs} />
                </div>
                <div className={styles.slider_bx}>
                    <Slider {...settings} className={styles.slider}>
                        {blogs.map(blog =>
                            <div key={blog.id} className={styles.blog}>
                                <img src={blog.image} alt="" className={styles.blog_img} />
                                <div className={styles.text}>
                                    <div className={styles.date_author}>
                                        <h5 className={styles.info}>
                                            {blog.date}
                                        </h5>
                                        <h5 className={styles.info}>
                                            {blog.author}
                                        </h5>
                                    </div>
                                    <h3 className={styles.title}>
                                        {blog.title}
                                    </h3>
                                    <p className={styles.description}>
                                        {blog.description}
                                    </p>
                                    {/* url here */}
                                    <button className={styles.read_more_btn}>Read More</button>
                                </div>
                            </div>
                        )}
                    </Slider>
                </div>
                <button className={styles.view_more_btn}>View More</button>
            </div>
        </div>
    );
}

export default BlogsUpdate;