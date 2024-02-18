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
                    <img src={data.Image} alt="" className={styles.blog_img} />
                    <div className={styles.text}>
                        <div className={styles.date_author}>
                            <h5 className={styles.info}>
                                {data.date}
                            </h5>
                            <h5 className={styles.info}>
                                {data.author}
                            </h5>
                        </div>
                        <h3 className={styles.title}>
                            {data.Title}
                        </h3>
                        <p className={styles.description}>
                            {data.description}
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