import { Link } from "react-router-dom";
import styles from "./TeamSection.module.scss"
import { useEffect, useState } from "react";
import { IChef } from "../../../../interfaces/components.interface";
import SocialMedia from "../../../../ui/ui_components/social_media/SocialMedia";
import { useAllTeam } from "../../../../hooks/team_hooks/useAllTeam";
import { useActions } from "../../../../hooks/useActions";

const TeamSection = () => {

    const {getAllTeam} = useActions()
    const {team} = useAllTeam()

    useEffect(() => {
        getAllTeam()
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {[[0, 3], [3, 6]].map((item, index) =>
                    <div key={index} className={styles.chefs}>
                        {team.fulfilled ? Object.keys(team.data).map(key => team.data[key]).slice(item[0], item[1]).map((chef, index) =>
                            <div key={index} className={styles.chef}>
                                <div className={styles.image}>
                                    <img src={chef.image} alt="" className={styles.chef_image} />
                                    <div className={styles.media}>
                                        <div className={styles.links}>
                                            <SocialMedia />
                                            <div className={styles.read_more}>
                                                <svg width="17" height="1" viewBox="0 0 17 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line x1="0.5" y1="0.5" x2="16.5" y2="0.5" stroke="#DCCA87" />
                                                </svg>
                                                <Link to={`/Home/Our Team/Chefs Details/${chef.name}`} className={styles.more}>
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.title}>
                                    <h3 className={styles.name} style={{ color: chef.color }}>
                                        {chef.name}
                                    </h3>
                                    <h5 className={styles.role}>
                                        {chef.role}
                                    </h5>
                                </div>
                            </div>
                        ) : <></>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TeamSection;