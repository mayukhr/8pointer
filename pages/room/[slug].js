import { useRouter } from 'next/router';
import { useEffect, useContext, useState, useReducer, memo } from 'react';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import AuthContext from '../../components/AuthContext';
import { gun } from '../../utils/utils';
import useUserLogInOut from '../../hooks/useUserLogInOut';

const initialState = {
    users: []
};
function reducer(state, user) {
    return {
        users: [user, ...state.users]
    }
}

const Room = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { push, query } = useRouter();
    const { slug } = query;
    const {userData} = useContext(AuthContext);
    const [loggedInUsers, setLoggedInUsers] = useState([]);
    
    // TODO: hook to change user isActive status || Here is a bug!
    // useUserLogInOut(userData?.nickname, userData?.project);

    useEffect(()=> {
        if(!userData?.nickname || !userData?.project) {
          push('/');
        } else {
            const roomUsers = gun.get('projects').get(userData?.project).get(`${userData?.project}-users`);
            const allLoggedInUsers = roomUsers.map().on(item=>{
                dispatch({
                    nickname: item.nickname,
                    isMaster: item.isMaster,
                    isActive: item.isActive
                })
            });
        }
    }, []);

    return (
        <div className={styles.container}>
          <Header/>
            <main className={styles.main}>
                <div>
                Me: {userData?.nickname} | In Room: {slug}: <br/> 
                {
                    state.users.map(item=> (
                        <span>
                            {`${item.nickname}, isMaster(${item.isMaster}), isActive(${item.isActive})`} <br/>
                        </span>
                    ))
                }
                </div>
            </main>
        </div>
    );
}
  
export default memo(Room);