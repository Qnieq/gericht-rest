import { useEffect } from "react";
import { useNews } from "../../../../hooks/blog_hooks/useNews";
import { useActions } from "../../../../hooks/useActions";
import NewsCard from "../../../../ui/ui_components/news_card/NewsCard";
import TitleCenter from "../../../../ui/ui_components/title_center/TitleCenter";
import styles from "./BlogsUpdate.module.scss"
import Slider from "react-slick";
import { Link } from "react-router-dom";

const BlogsUpdate = () => {

    const { getNews } = useActions()

    const { blog } = useNews()

    useEffect(() => {
        getNews(1)
    }, [])

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
        appendDots: (dots: string) => <ul>{dots}</ul>,
        customPaging: () => (
            <div className={styles.dots}></div>
        )
    };

    const text: string[] = ["Blogs", "Gerícht updates"];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <TitleCenter title={text} />
                <div className={styles.blogs_update_box}>
                    {blog.news ? blog.news.slice(0, 3).map((item, index) =>
                        <NewsCard key={index} news={item} />
                    ) : null}
                </div>
                <div className={styles.slider_bx}>
                    <Slider {...settings} className={styles.slider}>
                        {blog.news ? blog.news.slice(0, 3).map((item, index) =>
                            <NewsCard key={index} news={item} />
                        ) : null}
                    </Slider>
                </div>
                <Link to={"/Home/Our Blogs"} className={styles.view_more_btn}>View More</Link>
            </div>
        </div>
    );
}

export default BlogsUpdate;