import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from "./MapSection.module.scss"

const MapSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <YMaps>
                    <Map className={styles.map} defaultState={{ center: [48.398687, 10.596750], zoom: 14 }} >

                        <Placemark geometry={[48.398687, 10.596750]} />
                    </Map>
                </YMaps>
            </div>
        </div>
    );
}

export default MapSection;