import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://picsum.photos/200"
        alt="Your profile picture"
      />
      <div>
        <p spellCheck="false" contentEditable="true">
          Seu nickname
        </p>

        <p>
          <img src="icons/level.svg" alt="Icone Level UP" />{" "}
          Nível {level}{" "}
        </p>
      </div>
    </div>
  );
}
