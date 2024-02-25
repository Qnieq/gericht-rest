import { FaSearch } from "react-icons/fa";
import styles from "./SearchInput.module.scss"
import { useActions } from "../../../hooks/useActions";
import { useSearchNews, useTags } from "../../../hooks/blog_hooks/useNews";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchInput = () => {

    const [search, setSearch] = useState<string>("")
    const [req, setReq] = useState<boolean>(false)

    const { getNewsBySearch } = useActions()
    const { blogSearch } = useSearchNews()
    const { blogTags } = useTags()


    useEffect(() => {
        if (req == true) {
            getNewsBySearch()
            setReq(false)
        }
        setReq(true)
    }, [search, blogTags.activeTags])




    const filteredSearchWithTags = blogSearch.search.filter(item => {
        return (item.Title.toLowerCase().includes(search.toLowerCase())
            &&
            blogTags.activeTags.some(tag => item.tags.includes(tag)))
            &&
            search
    })
    const filteredSearchWithOnlyTags = blogSearch.search.filter(item => {
        return (blogTags.activeTags.some(tag => item.tags.includes(tag)))
    })
    const filteredSearch = blogSearch.search.filter(item => {
        return (item.Title.toLowerCase().includes(search.toLowerCase()) && search)
    })


    let filetered = null
    if (blogTags.activeTags.length > 0 && search.length > 0) {
        filetered = filteredSearchWithTags
    } else if (blogTags.activeTags.length >= 1 && search.length < 1) {
        filetered = filteredSearchWithOnlyTags
        console.log(filteredSearchWithOnlyTags)
    } else {
        filetered = filteredSearch
    }

    const eventSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }


    return (
        <>
            <div className={styles.search_input_container}>
                <input type="text" placeholder="Search..." className={styles.search_input} onChange={eventSearch} />
                <FaSearch className={styles.search_icon} />
            </div>
            {filetered.length > 0 ?
                <div className={styles.result_box}>
                    {filetered.map((item, index) =>
                        <div key={index} className={styles.result}>
                            <Link to={`/Home/Our Blogs/${item.Title}`}>
                                <img src={item.Image} alt="" className={styles.search_image} />
                                <h4 className={styles.title}>{item.Title}</h4>
                            </Link>
                        </div>
                    )}
                </div>
                :
                <></>
            }
        </>
    );
}

export default SearchInput;