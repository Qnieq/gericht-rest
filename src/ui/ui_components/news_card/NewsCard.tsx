import { Link } from "react-router-dom";
import styles from "./NewsCard.module.scss"
import { useEffect, useState } from "react";
import { IBlogData } from "../../../interfaces/store.interface";

const NewsCard: React.FC<{ news: IBlogData }> = (props) => {

    const [news, setNews] = useState<IBlogData | null>(null);

    useEffect(() => {
        setNews(props.news);
    }, [props.news])

    return (
        <>
            {news ?
                <div key={news.id} className={styles.blog}>
                    <Link to={`/Home/Our Blogs/${news.Title}`}>
                        <img src={news.Image} alt="" className={styles.blog_img} />
                    </Link>
                    <div className={styles.text}>
                        <div className={styles.date_author}>
                            <h5 className={styles.info}>
                                {news.date}
                            </h5>
                            <h5 className={styles.info}>
                                {news.author}
                            </h5>
                        </div>
                        <Link to={`/Home/Our Blogs/${news.Title}`} className={styles.title}>
                            {news.Title}
                        </Link>
                        <p className={styles.description}>
                            {news.description}
                        </p>
                        <Link to={`/Home/Our Blogs/${news.Title}`} className={styles.read_more_btn}>Read More</Link>
                    </div>
                </div>
                :
                <></>
            }
        </>

    );
}

export default NewsCard;