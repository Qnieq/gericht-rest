import { FaSearch } from "react-icons/fa";
import styles from "./SearchInput.module.scss"
import { useActions } from "../../../hooks/useActions";
import { useSearchNews } from "../../../hooks/blog_hooks/useNews";
import { useEffect, useState } from "react";

const SearchInput = () => {

    const [search, setSearch] = useState<string>("")
    const [req, setReq] = useState<boolean>(false)

    const { getNewsBySearch } = useActions()
    const { blogSearch } = useSearchNews()

    useEffect(() => {
        if (req == true) {
            getNewsBySearch()
            setReq(false)
        }
        setReq(true)
    }, [search])


    const filteredSearch = blogSearch.search.filter(item => {
        return (search && item.Title.toLowerCase().includes(search.toLowerCase()))
    })

    console.log(filteredSearch)

    const eventSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }



    return (
        <>
            <div className={styles.search_input_container}>
                <input type="text" placeholder="Search..." className={styles.search_input} onChange={eventSearch} />
                <FaSearch className={styles.search_icon} />
            </div>
            {filteredSearch.length > 0 ?
                <div className={styles.result_box}>
                    {filteredSearch.map((item, index) =>
                        <div key={index} className={styles.result}>
                            <img src={item.Image} alt="" className={styles.search_image} />
                            <h4 className={styles.title}>{item.Title}</h4>
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