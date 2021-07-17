import LoginStyles from '../styles/LoginBox.module.css';

const LoginBox = () => {
    return (
        <div className={LoginStyles.loginbox}>
            <div className={LoginStyles.inputFieldsWithLabel}>
                <label className={LoginStyles.label}>Nickname:</label>
                <input className={LoginStyles.text} type='text' name='nickname'></input>
            </div>
            <div className={LoginStyles.inputFieldsWithLabel}>
                <label className={LoginStyles.label}>Project Name:</label>
                <input className={LoginStyles.text} type='text' name='projectname'></input>
            </div>
            <div className={LoginStyles.inputFieldsWithLabel}>
                <label className={LoginStyles.label}>I am the master:</label>
                <input className={LoginStyles.checkbox} type='checkbox' name='ismaster'></input>
            </div>
            <button type='button'> Enter </button>
        </div>
    );
};

export default LoginBox;