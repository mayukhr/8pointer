import { useEffect } from 'react';
import { gun } from '../utils/utils';

// This hook updates gun with user's isActive status
export default function useUserLogInOut(nickname, project) {
    useEffect(() => {
        const userIsActive$ = gun
                                .get('projects')
                                .get(project)
                                .get(`${project}-users`)
                                .get(nickname)
                                .get('isActive');
        const handleInactive = (event) => {
            userIsActive$.put(false);
        };
        const handleActive = (event) => {
            userIsActive$.put(true);
        };

        window.addEventListener("beforeunload", handleInactive);
        window.addEventListener('offline', handleInactive);
        window.addEventListener('online', handleActive);

        return () => {
            window.removeEventListener("beforeunload", handleInactive);
            window.removeEventListener("offline", handleInactive);
            window.removeEventListener("online", handleActive);
        }
    }, [nickname, project]);
}