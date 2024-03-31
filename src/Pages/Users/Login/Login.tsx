import googleIcon from "@images/google-icon.png"; 
import "./Login.css"
import ToHomeComponent from "src/Components/ToHome/ToHome";
import LogoComponent from "src/Components/Logo/Logo";
import InputField from "src/Components/InputField/InputField";
import { useState } from "react";
import ContentLine from "src/Components/ContentLine/ContentLine";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {  
    const [email, setEmail] = useState<string>(''); 

    const handleLogin = () => { 

    }

    return (
        <div className="root-login">
            <ToHomeComponent text={"На главную"}/>
            <div className="login-cotainer">
                <div className="login-header">
                    <LogoComponent />
                    <h2 className="">Войти в свой аккаунт</h2>
                </div>

                <div className="login-form">

                    <div className="login-input-fields">
                        <InputField 
                            placeholder="Введите свою почту" 
                            text={email} 
                            onChange={setEmail} 
                            titleText="Введите свою почту" 
                            required={true}
                            width={"100%"}
                        /> 
                        <InputField 
                            placeholder="Введите свою почту" 
                            text={email} 
                            onChange={setEmail} 
                            titleText="Введите свою почту" 
                            required={true}
                            width={"100%"}
                        /> 
                    </div>
                    <button className="general-button" onClick={handleLogin}>
                        <h4>Войти</h4>
                    </button>
                </div>
                <ContentLine />
                <p className="continue-with">Войти через</p>
                <button className="general-button google-login">
                    <img src={googleIcon} alt="войти через Google" className="google-icon"/>
                    <p className="google-login-text">Google</p>
                </button>
                <Link to={"/register"} className="register-button">Нету аккаунта? Создать аккаунт</Link>
                <Link to={"/reset-password"} className="register-button">Забыли пароль?</Link>
            </div>
        </div>
    ); 
}

export default LoginPage; 