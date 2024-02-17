import styles from "./NewsCard.module.scss"

const NewsCard = ({ props }) => {
    return (
        <div className={styles.container_card}>
            {props?
                <div key={props.id} className={styles.blog}>
                    <img src={props.image} alt="" className={styles.blog_img} />
                    <div className={styles.text}>
                        <div className={styles.date_author}>
                            <h5 className={styles.info}>
                                {props.date}
                            </h5>
                            <h5 className={styles.info}>
                                {props.author}
                            </h5>
                        </div>
                        <h3 className={styles.title}>
                            {props.title}
                        </h3>
                        <p className={styles.description}>
                            {props.description}
                        </p>
                        {/* url here */}
                        <button className={styles.read_more_btn}>Read More</button>
                    </div>
                </div>
                :
                <></>
            }
        </div>

    );
}

export default NewsCard;