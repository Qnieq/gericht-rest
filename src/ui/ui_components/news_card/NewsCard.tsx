import { Link } from "react-router-dom";
import styles from "./NewsCard.module.scss"

const NewsCard = ({ props }) => {

    const flattenArrayToObject = (arr: object[]) => {
        return arr.reduce((acc, obj) => {
            Object.assign(acc, obj);
            return acc;
        }, {});
    };

    let data = null

    try {
        data = flattenArrayToObject(props)
    } catch (err) {
        data = props
    }

    return (
        <div className={styles.container_card}>
            {data ?
                <div key={data.id} className={styles.blog}>
                    <Link to={`/Home/Our Blogs/${data.Title}`}>
                        <img src={data.Image} alt="" className={styles.blog_img} />
                    </Link>
                    <div className={styles.text}>
                        <div className={styles.date_author}>
                            <h5 className={styles.info}>
                                {data.date}
                            </h5>
                            <h5 className={styles.info}>
                                {data.author}
                            </h5>
                        </div>
                        <Link to={`/Home/Our Blogs/${data.Title}`} className={styles.title}>
                            {data.Title}
                        </Link>
                        <p className={styles.description}>
                            {data.description}
                        </p>
                        {/* url here */}
                        <Link to={`/Home/Our Blogs/${data.Title}`} className={styles.read_more_btn}>Read More</Link>
                    </div>
                </div>
                :
                <></>
            }
        </div>

    );
}

export default NewsCard;