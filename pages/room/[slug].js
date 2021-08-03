import Router, { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import LoginBox from '../../components/LoginBox';
import { userDetailContext } from '../_app';

const Room = (props) => {
    const router = useRouter();
    const { slug } = router.query;
    const userData = useContext(userDetailContext);

    useEffect(()=> {
        if(!userData?.nickname || !userData?.project) {
          Router.push('/');
        } 
    }, []);

    return (
        <div className={styles.container}>
          <Header/>
            <main className={styles.main}>
                I am in {slug} room!
            </main>
        </div>
    );
    // return <p>Room: {slug}</p>
}
  
export default Room;