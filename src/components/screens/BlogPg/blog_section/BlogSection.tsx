import { useEffect, useState } from "react";
import BlogSideBar from "../../../../ui/blog_side_bar/BlogSideBar";
import NewsCard from "../../../../ui/ui_components/news_card/NewsCard";
import styles from "./BlogSection.module.scss"
import { IoFilterSharp } from "react-icons/io5";
import { useActions } from "../../../../hooks/useActions";
import { useNews} from "../../../../hooks/blog_hooks/useNews";
import {  IBlogData } from "../../../../interfaces/store.interface";

const BlogSection = () => {

    const [visible, setVisible] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)

    const { getNews, count, tagsActive } = useActions()

    const { blog } = useNews()


    useEffect(() => {
        if (blog.count > 1) {
            getNews(blog.count)
        }
    }, [blog.count])


    useEffect(() => {
        getNews(blog.count)
        tagsActive([])
        if (window.innerWidth <= 1000) {
            setOpen(false)
            setVisible(true)
        } else {
            setVisible(false)
            setOpen(true)
        }
        window.addEventListener('resize', resizeEvent, true);
        return function () {
            window.removeEventListener('resize', resizeEvent, true);
        }
    }, [])

    const resizeEvent = () => {
        if (window.innerWidth <= 1000) {
            setOpen(false)
            setVisible(true)
        } else {
            setVisible(false)
            setOpen(true)
        }
    }

return (
    <div className={styles.container}>
        <div className={styles.content} style={visible ?
            { flexDirection: "column-reverse" } : {}}>
            <div className={styles.news}>
                {blog ? (
                    <div className={styles.double_news_box}>
                        {blog.news.reduce((acc: JSX.Element[], news: IBlogData, index: number) => {
                            if (index % 2 === 0) {
                                acc.push(
                                    <div key={index} className={styles.news_row}>
                                        <NewsCard news={news} />
                                        {blog.news[index + 1] && <NewsCard news={blog.news[index + 1]} />}
                                    </div>
                                );
                            }
                            return acc;
                        }, [])}
                    </div>
                ) : null}
                <div className={styles.btn_box}>
                    <button onClick={() => count()} className={styles.btn}>View More</button>
                </div>
            </div>

            <div className={styles.mobile_side_bar_header} style={visible ?
                { display: "flex" } : {}}>
                <button onClick={() => setOpen(!open)} className={styles.filter}>
                    <IoFilterSharp className={styles.filter_icon} />
                </button>
            </div>
            {open ?
                <div className={styles.side_bar} style={visible ?
                    {
                        position: "absolute",
                        right: "0",
                        top: "630px",
                        boxShadow: "rgba(12, 12, 12, 0.9) 0 0 0 1000px",
                        background: "rgba(12, 12, 12, 0.9)"
                    } : {}}>
                    <BlogSideBar />
                </div>
                :
                <></>
            }
        </div>
    </div>
);
}

export default BlogSection;