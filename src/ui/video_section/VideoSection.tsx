import { useRef, useState } from 'react';
import styles from "./VideoSection.module.scss"
const VideoSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const togglePlay = () => {
        const video = videoRef.current;
        if (video) {
            if (video.paused) {
                video.play();
                setIsPlaying(true);
            } else {
                video.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.player}>
                {isPlaying ?
                    <video ref={videoRef} controls className={styles.video} >
                        <source src="/videos/gericht_rest.mp4" type="video/mp4" />
                    </video>
                    :
                    <video ref={videoRef} className={styles.video} >
                        <source src="/videos/gericht_rest.mp4" type="video/mp4" />
                    </video>
                }
                <button onClick={togglePlay} className={styles.play_pause}>
                    {isPlaying ?
                        <></>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
                            <circle cx="60" cy="60" r="59.5" stroke="#DCCA87" />
                            <path d="M76 61.5L52 76V47L76 61.5Z" fill="white" />
                        </svg>
                    }
                </button>
            </div>
        </div>
    );
}

export default VideoSection;