import { Link } from "react-router-dom";
import { IChefs } from "../../../../interfaces/store.interface";
import SocialMedia from "../../../../ui/ui_components/social_media/SocialMedia";
import styles from "./ChefCard.module.scss"

const ChefCard: React.FC<{chef: IChefs}> = (props) => {
    return (
        <div className={styles.chef}>
            <div className={styles.image}>
                <img src={props.chef.image} alt="" className={styles.chef_image} />
                <div className={styles.media}>
                    <div className={styles.links}>
                        <SocialMedia />
                        <div className={styles.read_more}>
                            <svg width="17" height="1" viewBox="0 0 17 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="0.5" x2="16.5" y2="0.5" stroke="#DCCA87" />
                            </svg>
                            <Link to={`/Home/Our Team/Chefs Details/${props.chef.name}`} className={styles.more}>
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                <h3 className={styles.name} style={{ color: props.chef.color }}>
                    {props.chef.name}
                </h3>
                <h5 className={styles.role}>
                    {props.chef.role}
                </h5>
            </div>
        </div>
    );
}

export default ChefCard;