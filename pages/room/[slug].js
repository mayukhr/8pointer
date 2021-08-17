import { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import AuthContext from '../../components/AuthContext';

const Room = (props) => {
    const { push, query } = useRouter();
    const { slug } = query;
    const {userData} = useContext(AuthContext);

    useEffect(()=> {
        if(!userData?.nickname || !userData?.project) {
          push('/');
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
}
  
export default Room;