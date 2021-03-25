import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {

    const {level} = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/MTitoS.png" alt="Matheus Tito Foto" />
            <div>
                <strong>Matheus Tito</strong>
                <p><img src="icons/level.svg" alt="Icone Level UP" /> Nível {level} </p>
            </div>
        </div>
    )
}