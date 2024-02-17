import { FaSearch } from "react-icons/fa";
import styles from "./SearchInput.module.scss"

const SearchInput = () => {
    return (
        <div className={styles.search_input_container}>
            <input type="text" placeholder="Search..." className={styles.search_input} />
            <FaSearch className={styles.search_icon} />
        </div>
    );
}

export default SearchInput;