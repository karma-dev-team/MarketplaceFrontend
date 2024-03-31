import authBackgroundImage from "@images/karmastore-logo.png";  
import "./Login.css"
import ToHomeComponent from "src/Components/ToHome/ToHome";
import LogoComponent from "src/Components/Logo/Logo";
import InputField from "src/Components/InputField/InputField";
import { useState } from "react";

const LoginPage: React.FC = () => {  
    const [email, setEmail] = useState<string>(''); 

    return (
        <div className="root-login">
            <ToHomeComponent text={"На главную"}/>
            <img className="auth-background" src={authBackgroundImage} alt="" />
            <div className="login-cotainer">
                <LogoComponent />
                <h2 className="login-header">Войти в свой аккаунт</h2>
                <div className="login-input-fields">
                    <InputField 
                        placeholder="Введите свою почту" 
                        text={email} 
                        onChange={setEmail} 
                        titleText="Введите свою почту" 
                        required={true}
                    /> 
                    <InputField 
                        placeholder="Введите свою почту" 
                        text={email} 
                        onChange={setEmail} 
                        titleText="Введите свою почту" 
                        required={true}
                    /> 
                </div>
            </div>
        </div>
    ); 
}

export default LoginPage; 