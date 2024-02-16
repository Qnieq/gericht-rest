import { IImg } from "../../interfaces/components.interface";
import TitleLeft from "../ui_components/title_left/TitleLeft";
import styles from "./Instagram.module.scss"
import { IoLogoInstagram } from "react-icons/io5";

const Instagram = () => {

    const gallery: IImg[] = [
        {
            id: 1,
            url: "/images/gallery/gallery_2.png"
        },
        {
            id: 2,
            url: "/images/gallery/gallery_2.png"
        },
        {
            id: 3,
            url: "/images/gallery/gallery_3.png"
        },
        {
            id: 4,
            url: "/images/gallery/gallery_4.png"
        },
        {
            id: 5,
            url: "/images/gallery/gallery_3.png"
        },
    ]

    const text: string[] = ["Instagram", "Photo Gallery"];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <TitleLeft props={text} />
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
                    </p>
                    <button className={styles.view_more_btn}>
                        View More
                    </button>
                </div>
                <div className={styles.photo_gallery}>
                    {gallery.map(photo =>
                        <div key={photo.id} className={styles.photo_box}>
                            <div className={styles.icon_box}>
                                <IoLogoInstagram className={styles.icon} />
                            </div>
                            <img src={photo.url} className={styles.photo} alt="" />
                        </div>
                    )}
                    <div className={styles.end}>
                        <h4 className={styles.insta}>For More In Instagram</h4>
                        <p className={styles.sub}>
                            Subscribe to our Instagram, new photos are posted there every day
                        </p>
                        <button className={styles.view_more_btn}>View More</button>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Instagram;