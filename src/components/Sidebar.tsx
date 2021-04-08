import styles from '../styles/components/Sidebar.module.css';
import { ThemeSwitcher } from './ThemeSwitcher';

interface Props {
  toggleTheme(): void;
}

export function Sidebar({ toggleTheme }: Props) {
  return (
    <div className={styles.container}>
      <img src="/sidebarLogo.svg" alt="Sidebar logo"/>
      <div className={styles.switcher}>
        <ThemeSwitcher handleToggleTheme={toggleTheme}/>
      </div>
    </div>
  )
}
