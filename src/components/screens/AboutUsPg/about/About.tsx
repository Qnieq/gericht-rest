import TitleCenter from "../../../../ui/ui_components/title_center/TitleCenter";
import VideoSection from "../../../../ui/video_section/VideoSection";
import styles from "./About.module.scss"

const About = () => {

    const text: string[] = ["About Us", "Happy Hours with Us"]

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <TitleCenter props={text} />
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quis pharetra adipiscing ultrices vulputate posuere tristique. 
                        In sed odio nec aliquet eu proin mauris et.
                    </p>
                </div>
                <VideoSection />
            </div>
        </div>
    );
}

export default About;