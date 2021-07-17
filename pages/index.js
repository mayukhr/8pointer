import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import LoginBox from '../components/LoginBox';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      
      <main className={styles.main}>
        <LoginBox/>
      </main>
    </div>
  )
}
