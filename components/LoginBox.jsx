import { useState, useContext } from 'react';
import LoginStyles from '../styles/LoginBox.module.css';
import { useRouter } from 'next/router';
import AuthContext from './AuthContext';
import { gun } from '../utils/utils';

const LoginBox = (props) => {
    const [nickname, setNickname] = useState(props.nickname);
    const [project, setProject] = useState(props.project);
    const [isMaster, setIsMaster] = useState(false);
    const { push, pathname, query } = useRouter();
    const {login} = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        if(window && nickname && project) {
            login(nickname, project, isMaster);
            push('/room/'+project);

            // add user to gun.
            // 1: setting the current project
            // 2: Hierarchy:: project > currentProject > project-users > currentUser
            let projects = gun.get('projects');
            let currentProject = gun.get(project);
            projects.set(currentProject);

            const currentUser = gun.get(nickname);
            const user = {
                nickname,
                isMaster,
                // isActive: true,
            };
            currentUser.put(user);
            const users = gun.get(`${project}-users`);
            users.set(currentUser);
            currentProject.set(users);
            
            //setting userStatus
            const currentUserName = gun.get(`${nickname}-status`);
            const currentUserStatus = {
                nickname,
                isActive: true,
            };
            currentUserName.put(currentUserStatus);
            const userStatus = gun.get(`${project}-userStatus`);
            userStatus.set(currentUserName);
            currentProject.set(userStatus);
        }
    };

    return (
            <div className={LoginStyles.loginbox}>
                <form onSubmit={handleSubmit}>
                    <ul className={LoginStyles.flexOuter}>
                        <li>
                            <label className={LoginStyles.label}>Nickname:</label>
                            <input type='text' name='nickname' onChange={({target:{value}}) => setNickname(value?.toLowerCase())}></input>
                        </li>
                        <li>
                            <label className={LoginStyles.label}>Project Name:</label>
                            <input className={LoginStyles.text} type='text' name='projectname' onChange={({target:{value}}) => setProject(value.toLowerCase())}></input>
                        </li>
                        <li>
                            <label className={LoginStyles.label}>I am the master:</label>
                            <input className={LoginStyles.checkbox} type='checkbox' name='ismaster' onChange={({target:{checked:value}}) => setIsMaster(value)}></input>
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