import TitleLeft from "../ui_components/title_left/TitleLeft";
import styles from "./Instagram.module.scss"

const Instagram = () => {

    interface IGallery {
        id: number
        image: string
    }

    const gallery: IGallery[] = [
        {
            id: 1,
            image: "/images/gallery/gallery_2.png"
        },
        {
            id: 2,
            image: "/images/gallery/gallery_2.png"
        },
        {
            id: 3,
            image: "/images/gallery/gallery_3.png"
        },
        {
            id: 4,
            image: "/images/gallery/gallery_4.png"
        },
        {
            id: 5,
            image: "/images/gallery/gallery_3.png"
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
                        <img key={photo.id} src={photo.image} className={styles.photo} alt="" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Instagram;