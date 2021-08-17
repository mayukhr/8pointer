import React, { useState, useEffect } from 'react';
import AuthContext from './AuthContext';

export function AuthProvider({children}) {
    const [userData, setUserData] = useState();

    const login = (nickname, project, isMaster=false) => {
        sessionStorage.setItem('nickname', nickname);
        sessionStorage.setItem('project', project);
        sessionStorage.setItem('isMaster', isMaster);
        setUserData({nickname, project});
    }
    useEffect(() => {
        setUserData({nickname: sessionStorage.getItem('nickname'), project: sessionStorage.getItem('project')});
    },[]);

    return (
        <AuthContext.Provider value={{ userData, login }}>
            {children}
        </AuthContext.Provider>
    );
}