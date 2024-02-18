import { ICategory } from "../../interfaces/components.interface";
import NewsCard from "../ui_components/news_card/NewsCard";
import SearchInput from "../ui_components/search_input/SearchInput";
import SocialMedia from "../ui_components/social_media/SocialMedia";
import styles from "./BlogSideBar.module.scss"

const BlogSideBar = ({ props }) => {

    const categories: ICategory[] = [
        {
            amount: 1,
            category: "Photography"
        },
        {
            amount: 2,
            category: "Baking"
        },
        {
            amount: 6,
            category: "Cooking Tips"
        },
    ]

    const tags: string[] = props[0]

    return (
        <div className={styles.side_bar}>
            <div className={styles.block_box}>
                <div className={styles.search_box}>
                    <h4 className={styles.title}>
                        Search Page
                    </h4>
                    <SearchInput />
                </div>
            </div>
            <div className={styles.block_box}>
                <div className={styles.all_categories_box}>
                    <h4 className={styles.title}>
                        All Categories
                    </h4>
                    <div className={styles.categories}>
                        {categories.map((category) =>
                            <div className={styles.category}>
                                <h5 className={styles.desc}>
                                    {category.category}
                                </h5>
                                <svg width="159.000000" height="1.000000" viewBox="0 0 159 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs />
                                    <rect id="Rectangle 14" width="159.000000" height="1.000000" fill="#FAFAFA" fill-opacity="1.000000" />
                                </svg>
                                <h5 className={styles.desc}>
                                    {`(${category.amount})`}
                                </h5>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.block_box}>
                <div className={styles.last_post}>
                    <h4 className={styles.title}>
                        Our Latest Posts
                    </h4>
                    {props[1].fulfilled ?
                        <div className={styles.news}>
                            <NewsCard props={Object.values(props[1].lastNews)} />
                        </div>
                        :
                        <></>
                    }
                </div>
            </div>
            <div className={styles.block_box}>
                <div className={styles.tags}>
                    <h4 className={styles.title}>
                        Related Tags
                    </h4>
                    <div className={styles.tags_box}>
                        {tags.length > 1 ? tags.reduce((acc: JSX.Element[], tag: string, index: number) => {
                            if (index % 3 === 0) {
                                acc.push(
                                    <div className={styles.tag_row}>
                                        <h5 className={styles.desc}>{tag}</h5>

                                        {tags[index + 1] &&
                                            <>
                                                <svg width="16.000000" height="1.000000" viewBox="0 0 16 1" fill="none">
                                                    <defs />
                                                    <line id="Line 2" x1="0.000000" y1="0.500000" x2="16.000000" y2="0.500000" stroke="#DCCA87" strokeOpacity="1.000000" strokeWidth="1.000000" />
                                                </svg>
                                                <h5 className={styles.desc}>{tags[index + 1]}</h5>
                                            </>}

                                        {tags[index + 2] &&
                                            <>
                                                <svg width="16.000000" height="1.000000" viewBox="0 0 16 1" fill="none" >
                                                    <defs />
                                                    <line id="Line 2" x1="0.000000" y1="0.500000" x2="16.000000" y2="0.500000" stroke="#DCCA87" strokeOpacity="1.000000" strokeWidth="1.000000" />
                                                </svg>
                                                <svg width="16.000000" height="1.000000" viewBox="0 0 16 1" fill="none" >
                                                    <defs />
                                                    <line id="Line 2" x1="0.000000" y1="0.500000" x2="16.000000" y2="0.500000" stroke="#DCCA87" strokeOpacity="1.000000" strokeWidth="1.000000" />
                                                </svg>
                                                <h5 className={styles.desc}>{tags[index + 2]}</h5>
                                            </>}
                                    </div>
                                );
                            }
                            return acc;
                        }, [])
                            :
                            <></>}
                    </div>
                </div>
            </div>
            <div className={styles.block_box}>
                <div className={styles.share}>
                    <h4 className={styles.title}>
                        Share
                    </h4>
                    <div className={styles.social_media}>
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogSideBar;