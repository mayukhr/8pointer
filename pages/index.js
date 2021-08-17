import { useState, useEffect, useContext } from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import LoginBox from '../components/LoginBox';
import {useRouter} from "next/router";
import AuthContext from '../components/AuthContext';

export default function Home() {
  const {userData} = useContext(AuthContext);
  const { push } = useRouter();

  useEffect(()=> {
    if(userData?.nickname && userData?.project) {
      push('/room/' + userData?.project);
    } 
  }, [userData?.nickname, userData?.project]);
  
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <LoginBox nickname={userData?.nickname} project={userData?.project}/>
      </main>
    </div>
  )
}
