import { useRouter } from 'next/router';
import { useEffect, useContext, useState } from 'react';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import AuthContext from '../../components/AuthContext';
import { gun } from '../../utils/utils';
import useUserLogInOut from '../../hooks/useUserLogInOut';

const Room = (props) => {
    const { push, query } = useRouter();
    const { slug } = query;
    const {userData} = useContext(AuthContext);
    const [loggedInUsers, setLoggedInUsers] = useState([]);
    
    //hook to change user isActive status
    // useUserLogInOut(userData?.nickname, userData?.project);

    useEffect(()=> {
        if(!userData?.nickname || !userData?.project) {
          push('/');
        } else {
            // useUserLogInOut(userData?.nickname, userData?.project);
            const roomUsers = gun.get('projects').get(userData?.project).get(`${userData?.project}-users`);

            //const roomData = gun.get(userData?.project);
            const allLoggedInUsers = roomUsers.map().on(item=>{
                setLoggedInUsers(prevUsers => ([...prevUsers, `${item.nickname}, isMaster(${item.isMaster}), isActive(${item.isActive})`]));
            });
        }
        
        // Clean user from DB
        return function cleanup() {
            // gun.get('mak').put({
            //     user: 'jjii',
            //     isMaster: true,
            //     createdAt: Date.now(),
            //     isActive: false,
            // });
            // let asd = gun.get('mak').map().on();
            // console.log(`gun.get('mak').map().on(ui.show.users) => ${asd}`);
            // gun.get('mak').on(function(data, key){
            //     // {property: 'value'}, 'key'
            //     gun.put(data.filter(item=>item.user==='jjii'))
            // })

            // gun.get('mak', function(ack){
            //     if(ack.err){
            //       console.log(`ERROR OCCURED ${ack.err}`);
            //     } else
            //     if(!ack.put){
            //       // not found
            //       console.log(`DATA NOT FOUND`);
            //     } else {
            //         console.log(`DATA IS THERE++>>>${ack}`)
            //       // data!
            //         //   gun.get('home').get('lights').put({state:'on'}) 
            //         // gun.get('key').put(, function(ack){})
            //         // gun.get(userData?.project).put()
            //     }
            //   })
            // const currentRoomData = gun.get(userData?.project) || [];
            // if(currentRoomData.err) {
            //     console.log(currentRoomData.err);
            // }
            //currentRoomData.put(currentRoomData.map().filter(item=>item.user!==userData?.nickname), function(ack){})
        }
    }, []);

    return (
        <div className={styles.container}>
          <Header/>
            <main className={styles.main}>
                I am in {slug} room with: {loggedInUsers.join('|||| ')}
            </main>
        </div>
    );
}
  
export default Room;