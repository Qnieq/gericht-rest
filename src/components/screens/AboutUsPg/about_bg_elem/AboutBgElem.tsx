import Emblem from "../../HomePg/background_elem/Emblem";
import styles from "./AboutBgElem.module.scss"

const AboutBgElem = () => {
    return (
        <div className={styles.container}>
            <div className={styles.arrow}>
                <svg width="1609.020386" height="10693.097656" viewBox="0 0 1609.02 10693.1" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <defs />
                    <g opacity="0.200000">
                        <path id="Vector 15" d="M0.036499 0.999512C432.87 16.833 1352.44 219.299 1568.04 902.5C1783.64 1585.7 1073.2 2323.5 691.036 2607C279.87 2878.33 -295.764 3983.5 691.036 6233.5C1924.54 9046 1758.54 9260.5 691.036 10692.5" stroke="#ABABAB" stroke-opacity="1.000000" stroke-width="2.000000" />
                    </g>
                </svg>
                <svg width="2230.394043" height="14909.839844" viewBox="0 0 2230.39 14909.8" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <defs />
                    <g opacity="0.200000">
                        <path id="Vector 14" d="M2126.04 0.999512C1693.21 16.833 773.643 219.299 558.043 902.5C342.443 1585.7 1052.88 2323.5 1435.04 2607C1846.21 2878.33 2421.84 3983.5 1435.04 6233.5C201.543 9046 367.543 9260.5 1435.04 10692.5L2228.54 11721.5C1961.88 11756.8 1454.14 12026.9 1556.54 12824.5C1658.94 13622.1 561.876 14546.5 0.542847 14909" stroke="#ABABAB" stroke-opacity="1.000000" stroke-width="2.000000" />
                    </g>
                </svg>
            </div>
            <div className={styles.emblem}>
                <Emblem />
                <Emblem />
                <Emblem />
                <Emblem />
            </div>

        </div>
    );
}

export default AboutBgElem;