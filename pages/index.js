import { useState, useEffect, useContext } from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import LoginBox from '../components/LoginBox';
import Router, {useRouter} from "next/router";
import { userDetailContext } from './_app';

export default function Home() {
  const userData = useContext(userDetailContext);

  useEffect(()=> {
    if(userData?.nickname && userData?.project) {
      Router.push('/room/' + userData?.project);
    } 
  }, []);
  
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <LoginBox nickname={userData?.nickname} project={userData?.project}/>
      </main>
    </div>
  )
}
