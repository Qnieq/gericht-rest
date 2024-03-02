import { IBlogData } from "../../../../interfaces/store.interface";
import BlogSideBar from "../../../../ui/blog_side_bar/BlogSideBar";
import styles from "./BlogDetailsSection.module.scss"

const BlogDetailsSection: React.FC<{details: IBlogData}> = ( props ) => {

    return (
        <div className={styles.container}>
            {props ?
                <div className={styles.content}>
                    <div className={styles.title_box}>
                        <div className={styles.title}>
                            <div className={styles.author_box}>
                                <h5 className={styles.time}>

                                </h5>
                                <h5 className={styles.author}>

                                </h5>
                            </div>
                            <h1 className={styles.title_text}>
                                {props.details.Title}
                            </h1>
                        </div>
                        <img src={props.details.Image} alt="" className={styles.title_image} />
                    </div>
                    <div className={styles.text_content}>
                        <div className={styles.about}>
                            <p className={styles.description}>
                                {props.details.description}
                            </p>
                            <div className={styles.ingredients}>
                                <h4 className={styles.name}>
                                    Ingredients
                                </h4>
                                <p className={styles.description}>
                                    {props.details.description}
                                </p>
                                <div className={styles.ingredients_box}>
                                    {props.details.Ingredients.map((recipe: string) =>
                                        <div className={styles.ingredient_box}>
                                            <svg width="16.000000" height="1.000000" viewBox="0 0 16 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <defs />
                                                <line id="Line 2" x1="0.000000" y1="0.500000" x2="16.000000" y2="0.500000" stroke="#DCCA87" stroke-opacity="1.000000" stroke-width="1.000000" />
                                            </svg>

                                            <p className={styles.description}>
                                                {recipe}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={styles.instruction_box}>
                                <h4 className={styles.name}>
                                    Instruction
                                </h4>
                                <p className={styles.description}>
                                    {props.details.Instructions}
                                </p>
                            </div>
                            <div className={styles.bottom}>
                                <div className={styles.tags_box}>
                                    {props.details.tags.map(tag =>
                                        <h5 className={styles.tags}>
                                            #{tag}
                                        </h5>
                                    )}
                                </div>
                                <div className={styles.activity_box}>
                                    <div className={styles.activity}>
                                        <svg width="25.000000" height="25.000000" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <clipPath id="clip523_2877">
                                                    <rect id="chat_bubble_outline" width="25.000000" height="25.000000" fill="white" fill-opacity="0" />
                                                </clipPath>
                                            </defs>
                                            <g clip-path="url(#clip523_2877)">
                                                <path id="Vector" d="M20.8333 2.0835L4.1665 2.0835C3.02075 2.0835 2.08325 3.021 2.08325 4.16681L2.08325 22.9168L6.25 18.7502L20.8333 18.7502C21.979 18.7502 22.9165 17.8127 22.9165 16.6668L22.9165 4.16681C22.9165 3.021 21.979 2.0835 20.8333 2.0835ZM20.8333 16.6668L6.25 16.6668L4.1665 18.7502L4.1665 4.16681L20.8333 4.16681L20.8333 16.6668Z" fill="#DCCA87" fill-opacity="1.000000" fill-rule="nonzero" />
                                            </g>
                                        </svg>
                                        <h5 className={styles.activity_name}>
                                            Comment
                                        </h5>
                                    </div>
                                    <div className={styles.activity}>
                                        <svg width="20.833252" height="19.114563" viewBox="0 0 20.8333 19.1146" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <defs />
                                            <path id="Vector" d="M15.1042 0C13.2917 0 11.552 0.84375 10.4167 2.17706C9.28125 0.84375 7.54175 0 5.72925 0C2.52075 0 0 2.52081 0 5.72919C0 9.66669 3.54175 12.875 8.90625 17.75L10.4167 19.1146L11.927 17.7396C17.2917 12.875 20.8333 9.66669 20.8333 5.72919C20.8333 2.52081 18.3125 0 15.1042 0ZM10.5208 16.1979L10.4167 16.3021L10.3125 16.1979C5.35425 11.7083 2.08325 8.73956 2.08325 5.72919C2.08325 3.64581 3.64575 2.08331 5.72925 2.08331C7.33325 2.08331 8.89575 3.11456 9.448 4.54169L11.3958 4.54169C11.9375 3.11456 13.5 2.08331 15.1042 2.08331C17.1875 2.08331 18.75 3.64581 18.75 5.72919C18.75 8.73956 15.4792 11.7083 10.5208 16.1979Z" fill="#DCCA87" fill-opacity="1.000000" fill-rule="nonzero" />
                                        </svg>
                                        <h5 className={styles.activity_name}>
                                            Like
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.side_bar}>
                            <BlogSideBar />
                        </div>
                    </div>

                </div>
                :
                null
            }
        </div>
    );
}

export default BlogDetailsSection;