import { useEffect, useState } from "react";
import TitleCenter from "../../../../ui/ui_components/title_center/TitleCenter";
import TitleLeft from "../../../../ui/ui_components/title_left/TitleLeft";
import styles from "./PersAchievements.module.scss"
import { IAchiev } from "../../../../interfaces/components.interface";
import { IChefs } from "../../../../interfaces/store.interface";

const PersAchievements: React.FC<{chef: IChefs}> = (props) => {

    const [visible, setVisible] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('resize', resizeEvent, true);
        return function () {
            window.removeEventListener('resize', resizeEvent, true);
        }
    }, [])

    const resizeEvent = () => {
        if (window.innerWidth <= 1412) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const achiev: IAchiev[] = [
        {
            place: "/images/our_chefs/achiev/1.svg",
            title: "Rising Star",
            description: "Lorem ipsum dolor sit amet, consectetur."
        },
        {
            place: "/images/our_chefs/achiev/3.svg",
            title: "Outstanding Chef",
            description: "Lorem ipsum dolor sit amet, consectetur."
        },
        {
            place: "/images/our_chefs/achiev/3.svg",
            title: "Outstanding Chef",
            description: "Lorem ipsum dolor sit amet, consectetur."
        },
        {
            place: "/images/our_chefs/achiev/1.svg",
            title: "Rising Star",
            description: "Lorem ipsum dolor sit amet, consectetur."
        },
    ]

    const text: string[] = [props.chef ? props.chef.role : "", "Personal Achievements"]

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text} style={visible ?
                    {alignItems: "center" } : {}
                }>
                    {visible ?
                        <TitleCenter title={text} />
                        :
                        <TitleLeft title={text} />
                    }
                    <div className={styles.achievements_box}>
                        {[[0, 2], [2, 4]].map((item, index) =>
                            <div key={index} className={styles.achievements}>
                                {achiev.slice(item[0], item[1]).map((achiev, AIndex) =>
                                    <div key={AIndex} className={styles.achievement}>
                                        <img src={achiev.place} alt="" className={styles.place_svg} />
                                        <div className={styles.about}>
                                            <h5 className={styles.title}>
                                                {achiev.title}
                                            </h5>
                                            <p className={styles.description}>
                                                {achiev.description}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <img src="/images/our_chefs/achiev/img.png" alt="" className={styles.right_img} />
            </div>
        </div>
    );
}

export default PersAchievements;