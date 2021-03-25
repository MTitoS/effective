import styles from '../styles/components/Sidebar.module.css';
import { ThemeSwitcher } from './ThemeSwitcher';

interface Props {
  toggleTheme(): void;
}

export function Sidebar({ toggleTheme }: Props) {
  return (
    <div className={styles.container}>
      <img src="/sidebarLogo.svg" alt="Sidebar logo"/>
      <div className={styles.icons}>
        <button><img src="/icons/homeicon.png" alt="Home icon" /></button>
        <br />
        <button><img src="/icons/leaderb-icon.png" alt="Leaderboard icon" /></button>
      </div>
      <div className={styles.switcher}>
        <ThemeSwitcher handleToggleTheme={toggleTheme}/>
      </div>
    </div>
  )
}