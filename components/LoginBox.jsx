import LoginStyles from '../styles/LoginBox.module.css';

const LoginBox = () => {
    return (
        <div className={LoginStyles.loginbox}>
            <ul className={LoginStyles.flexOuter}>
                <li>
                    <label className={LoginStyles.label}>Nickname:</label>
                    <input type='text' name='nickname'></input>
                </li>
                <li>
                    <label className={LoginStyles.label}>Project Name:</label>
                    <input className={LoginStyles.text} type='text' name='projectname'></input>
                </li>
                <li>
                    <label className={LoginStyles.label}>I am the master:</label>
                    <input className={LoginStyles.checkbox} type='checkbox' name='ismaster'></input>
                </li>
                <li>
                    <button type='button'> Enter </button>
                </li>
            </ul>
        </div>
    );
};

export default LoginBox;