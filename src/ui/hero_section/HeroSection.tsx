import { Link } from "react-router-dom";
import styles from "./HeroSection.module.scss"

const HeroSection = ({ props }) => {
    const pathname = window.location.pathname;
    const words = pathname.split("/").filter(word => word !== "" && word !== "Home").map(word => decodeURIComponent(word.replace("%20", " ")));

    return (
        <div className={styles.container}>
            <img src="/images/hero/hero_section.png" alt="" className={styles.hero} />
            <div className={styles.content}>
                <h1 className={styles.title}>{props}</h1>
                <div className={styles.link_box}>
                    <Link to="/" className={styles.link}>Home</Link>
                    {words.map((word, index) => {
                        const linkPath = words.slice(0, index + 1).join('/');
                        return (
                            <>
                                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.68831 5.72388L1.76624 0.291016C1.35065 -0.0969238 0.727272 -0.0969238 0.311687 0.291016C-0.103897 0.679199 -0.103897 1.26123 0.311687 1.64917L5.4026 6.5L0.311687 11.3508C-0.103897 11.7388 -0.103897 12.3208 0.311687 12.709C0.519482 12.9031 0.727272 13 1.03896 13C1.35065 13 1.55844 12.9031 1.76624 12.709L7.68831 7.27612C8.1039 6.79102 8.1039 6.20898 7.68831 5.72388Z" fill="#DCCA87" />
                                </svg>
                                <Link to={`/Home/${linkPath}`} className={styles.link}>{word}</Link>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default HeroSection;