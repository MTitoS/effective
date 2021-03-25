import React from 'react';
import Head from 'next/head';
import {GetServerSideProps} from 'next';

import { ChallengeBox } from '../components/ChallengeBox';
import { CompleteChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { Sidebar } from '../components/Sidebar';
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext';
import { ThemeProvider } from 'styled-components';

import styles from '../styles/pages/Home.module.css';
import GlobalStyles from '../styles/globals';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import usePersistedState from '../utils/usePersistedState';

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props) {

    const [theme,setTheme] = usePersistedState('theme',light);
  
    const toggleTheme = () => {
      setTheme(theme.title === 'light' ? dark : light);
    }

  return (
    <ThemeProvider theme={theme}>
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
    <GlobalStyles />
    <Sidebar toggleTheme={toggleTheme}/>
    <div className={styles.grid}>
    <div className={styles.container}>
      <Head>
        <title>Início | MoveIt</title>
      </Head>

    <ExperienceBar />

    <CountdownProvider>
    <section>
      <div className={styles.leftContainer}>
        <Profile />
        <CompleteChallenges />
        <Countdown />
      </div>
      <div className={styles.rightContainer}>
      <ChallengeBox />
      </div>
    </section>
    </CountdownProvider>
    </div>
    </div>
    </ChallengesProvider>
    </ThemeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
}
}

