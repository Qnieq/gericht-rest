import { useEffect, useState } from "react";
import { IBlogs } from "../../../../interfaces/components.interface";
import BlogSideBar from "../../../../ui/blog_side_bar/BlogSideBar";
import NewsCard from "../../../../ui/ui_components/news_card/NewsCard";
import styles from "./BlogSection.module.scss"
import { IoFilterSharp } from "react-icons/io5";

const BlogSection = () => {

    const [visible, setVisible] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
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

    return (
        <div className={styles.container}>
            <div className={styles.content} style={visible ?
                { flexDirection: "column-reverse" } : {}}>
                <div className={styles.news}>
                    {blogs.length > 0 && (
                        <div className={styles.double_news_box}>
                            {blogs.reduce((acc: JSX.Element[], blog: IBlogs, index: number) => {
                                if (index % 2 === 0) {
                                    acc.push(
                                        <div key={blog.id} className={styles.news_row}>
                                            <NewsCard props={blog} />
                                            {blogs[index + 1] && <NewsCard props={blogs[index + 1]} />}
                                        </div>
                                    );
                                }
                                return acc;
                            }, [])}
                        </div>
                    )}
                    <div className={styles.btn_box}>
                        <button className={styles.btn}>View More</button>
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