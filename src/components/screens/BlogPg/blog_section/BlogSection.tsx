import { useEffect, useState } from "react";
import { IBlogs, ICount } from "../../../../interfaces/components.interface";
import BlogSideBar from "../../../../ui/blog_side_bar/BlogSideBar";
import NewsCard from "../../../../ui/ui_components/news_card/NewsCard";
import styles from "./BlogSection.module.scss"
import { IoFilterSharp } from "react-icons/io5";
import { useActions } from "../../../../hooks/useActions";
import { useLastNews, useNews, useTags } from "../../../../hooks/blog_hooks/useNews";

const BlogSection = () => {

    const [visible, setVisible] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const [count, setCount] = useState<number>(1);
    const [blogData, setBlogData] = useState<object[]>()

    const {getNews, getLastNews, getNewsTags} = useActions()

    const {blog} = useNews()
    const {blogLastNews} = useLastNews()
    const {blogTags} = useTags()

    useEffect(() => {
        if (count > 1) {
            getNews(count)
        }
    }, [count])


    useEffect(() => {
        getNews(count)
        getLastNews()
        getNewsTags()
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

    useEffect(() => {
        setBlogData(blog)
    }, [blog])
    
    const resizeEvent = () => {
        if (window.innerWidth <= 1000) {
            setOpen(false)
            setVisible(true)
        } else {
            setVisible(false)
            setOpen(true)
        }
    }

    const flattenArrayToObject = (arr: object[]) => {
        return arr.reduce((acc, obj) => {
            Object.assign(acc, obj);
            return acc;
        }, {});
    };

    let data = null

    if (blogData) {

        try {
            data = flattenArrayToObject(blogData)
        } catch (err) {
            data = blogData
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.content} style={visible ?
                { flexDirection: "column-reverse" } : {}}>
                <div className={styles.news}>
                    {data ?  (
                        <div className={styles.double_news_box}>
                            {data.news.reduce((acc: JSX.Element[], news: IBlogs, index: number) => {
                                if (index % 2 === 0) {
                                    acc.push(
                                        <div key={index} className={styles.news_row}>
                                            <NewsCard props={news} />
                                            {data.news[index + 1] && <NewsCard props={data.news[index + 1]} />}
                                        </div>
                                    );
                                }
                                return acc;
                            }, [])}
                        </div>
                    ) : null}
                    <div className={styles.btn_box}>
                        <button onClick={() => setCount(count + 4)}  className={styles.btn}>View More</button>
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
                        { position: "absolute", 
                        right: "0",
                        top: "630px",
                        boxShadow: "rgba(12, 12, 12, 0.9) 0 0 0 1000px",
                         background: "rgba(12, 12, 12, 0.9)"
                         } : {}}>
                        <BlogSideBar props={[blogTags.tags, blogLastNews]} />
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    );
}

export default BlogSection;