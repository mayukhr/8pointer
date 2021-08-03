import '../styles/globals.css';
import { useState, useEffect, createContext } from "react";
export const userDetailContext = createContext();

function MyApp({ Component, pageProps }) {
  const [nickname, setNickname] = useState();
  const [project, setProject] = useState();
  const [userData, setUserData] = useState();
  
  useEffect(()=> {
    console.log(222)
    async function fetchLocalStorage() {

      if(window) {
        let nick = await sessionStorage.getItem('nickname');
        let room = await sessionStorage.getItem('project');
        setNickname(nick);
        setProject(room);
        setUserData({nickname: nick, project: room});
      }
    }

    fetchLocalStorage()

    // if(window) {
    //   setNickname(sessionStorage.getItem('nickname'));
    //   setProject(sessionStorage.getItem('project'));
    //   setUserData({nickname, project});
    // }
  }, [nickname, project]);

  return (
    <userDetailContext.Provider value={userData}>
      <Component {...pageProps} />
    </userDetailContext.Provider>
  )
}

export default MyApp;
