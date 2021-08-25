import { useEffect } from 'react';
import { gun } from '../utils/utils';

// This hook updates gun with user's isActive status
export default function useUserLogInOut(nickname, project) {
    useEffect(() => {
        if(nickname && project) {
            const userIsActiveStatus$ = gun
                                .get('projects')
                                .get(project)
                                .get(`${project}-userStatus`)
                                .get(`${nickname}-status`)
                                .get('isActive');
            
            const handleInactive = (event) => {
                userIsActiveStatus$.set(false);
            };
            const handleActive = (event) => {
                userIsActiveStatus$.set(true);
            };

            window.addEventListener("unload", handleInactive);
            window.addEventListener('offline', handleInactive);
            window.addEventListener('online', handleActive);
            window.addEventListener("onload", handleActive);

            return () => {
                window.removeEventListener("unload", handleInactive);
                window.removeEventListener("offline", handleInactive);
                window.removeEventListener("online", handleActive);
                window.removeEventListener("onload", handleActive);
            }
        }
    }, [nickname, project]);
}