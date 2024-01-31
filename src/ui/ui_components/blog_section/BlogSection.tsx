import styles from "./BlogSection.module.scss"

const BlogSection = ({props}) => {
    return (
        <>
            {props.map(blog =>
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
        </>
    );
}

export default BlogSection;