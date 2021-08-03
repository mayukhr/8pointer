import { useState, useEffect, createContext } from "react";
import LoginStyles from '../styles/LoginBox.module.css';
import Router from "next/router";

const LoginBox = (props) => {
    const [nickname, setNickname] = useState(props.nickname);
    const [project, setProject] = useState(props.project);
    const [isMaster, setIsMaster] = useState(false);

    // useEffect(()=> {
    //     if(nickname && project) {
    //         Router.push('/room/'+project);
    //     }
    // }, [nickname, project])

    const handleSubmit = e => {
        e.preventDefault();
        if(window && nickname && project) {
            sessionStorage.setItem('nickname', nickname?.toLowerCase());
            sessionStorage.setItem('project', project?.toLowerCase());
            sessionStorage.setItem('isMaster', isMaster);
            Router.push('/room/'+project);
        }
        console.log('Login Clicked');
    };

    return (
            <div className={LoginStyles.loginbox}>
                <form onSubmit={handleSubmit}>
                    <ul className={LoginStyles.flexOuter}>
                        <li>
                            <label className={LoginStyles.label}>Nickname:</label>
                            <input type='text' name='nickname' onChange={({target:{value}}) => setNickname(value)} value={nickname} ></input>
                        </li>
                        <li>
                            <label className={LoginStyles.label}>Project Name:</label>
                            <input className={LoginStyles.text} type='text' name='projectname' onChange={({target:{value}}) => setProject(value)} value={project}></input>
                        </li>
                        <li>
                            <label className={LoginStyles.label}>I am the master:</label>
                            <input className={LoginStyles.checkbox} type='checkbox' name='ismaster' onChange={({target:{checked:value}}) => setIsMaster(value)} value={isMaster}></input>
                        </li>
                        <li>
                            <button type='submit'> Enter </button>
                        </li>
                    </ul>
                </form>
            </div>
    );
};

export default LoginBox;