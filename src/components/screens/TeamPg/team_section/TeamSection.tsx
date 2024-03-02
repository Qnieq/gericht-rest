import styles from "./TeamSection.module.scss"
import { useEffect } from "react";
import { useAllTeam } from "../../../../hooks/team_hooks/useAllTeam";
import { useActions } from "../../../../hooks/useActions";
import { IChefs } from "../../../../interfaces/store.interface";
import ChefCard from "../chef_card/ChefCard";

const TeamSection = () => {

    const { getAllTeam } = useActions()
    const { team } = useAllTeam()

    useEffect(() => {
        getAllTeam()
    }, []);

    const teamArray: IChefs[] = Object.values(team.data)

    return (
        <div className={styles.container}>
            <div className={styles.content}>

                {team.fulfilled ? teamArray.reduce((acc: JSX.Element[], chef: IChefs, index: number) => {
                    if (index % 3 === 0) {
                        acc.push(
                            <div className={styles.chefs}>
                                <ChefCard chef={chef} />
                                {teamArray[index + 1] &&
                                    <>
                                        <ChefCard chef={teamArray[index + 1]} />

                                    </>
                                }
                                {teamArray[index + 2] &&
                                    <>
                                        <ChefCard chef={teamArray[index + 2]} />

                                    </>
                                }
                            </div>
                        )
                    }
                    return acc
                }, [])
                    :
                    null}
            </div>
        </div>
    );
}

export default TeamSection;