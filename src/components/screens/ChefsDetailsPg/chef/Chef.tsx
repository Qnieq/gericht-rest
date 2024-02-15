import { useParams } from "react-router-dom";
import styles from "./Chef.module.scss"
import { useEffect, useState } from "react";
import { TeamService } from "../../../../services/team.service";
import TitleLeft from "../../../../ui/ui_components/title_left/TitleLeft";

const Chef = () => {

    const [chefData, setChefData] = useState()

    const { id } = useParams()

    const text: string[] = [chefData ? chefData.role : "", chefData ? chefData.name : ""];

    useEffect(() => {
        const fetchData = async () => {
            const data = await TeamService.getChefsById(id);
            // const chefsList = Object.keys(newData).map(key => newData[key]);
            setChefData(data);
        };

        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            {chefData ?
                <div className={styles.content}>
                    <img src={chefData.image} alt="" />
                    <div className={styles.text}>
                        <TitleLeft props={text} />
                        <p className={styles.description}>
                            {chefData.description}
                        </p>
                        <div className={styles.points}>
                            {chefData.points.map((point, index) =>
                                <div className={styles.point}>
                                    <svg width="16.000000" height="1.000000" viewBox="0 0 16 1" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <defs />
                                        <line id="Line 2" x1="0.000000" y1="0.500000" x2="16.000000" y2="0.500000" stroke="#DCCA87" stroke-opacity="1.000000" stroke-width="1.000000" />
                                    </svg>
                                    <h4 className={styles.achivment}>{point}</h4>
                                </div>
                            )}
                        </div>
                        <img src={chefData.sign} alt="" />
                    </div>
                </div>
                :
                <></>
            }
        </div>
    );
}

export default Chef;