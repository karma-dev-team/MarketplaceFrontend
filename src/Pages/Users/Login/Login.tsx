import authBackgroundImage from "@images/karmastore-logo.png";  

const LoginPage: React.FC = () => {  
    return (
        <div className="root-login">
            <img className="auth-background" src={authBackgroundImage} alt="" />
        </div>
    ); 
}

export default LoginPage; 