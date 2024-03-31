import { useState } from "react";
import googleIcon from "@images/google-icon.png"; 
import { Link } from "react-router-dom";
import ContentLine from "src/Components/ContentLine/ContentLine";
import InputField from "src/Components/InputField/InputField";
import LogoComponent from "src/Components/Logo/Logo";
import "./Register.css"
import ToHomeComponent from "src/Components/ToHome/ToHome";

const RegisterPage: React.FC = () => {  
    const [email, setEmail] = useState<string>(''); 
    const [username, setUsername] = useState<string>(''); 

    const handleRegister = () => { 

    }

    return (
        <div className="root-register">
            <ToHomeComponent text={"На главную"}/>
            <div className="register-cotainer">
                <div className="register-header">
                    <LogoComponent />
                    <h2 className="">Регистрация</h2>
                </div>

                <div className="register-form">

                    <div className="register-input-fields">
                        <InputField 
                            placeholder="Введите свою почту..." 
                            text={email} 
                            onChange={setEmail} 
                            titleText="Введите свою почту" 
                            required={true}
                            width={"100%"}
                        /> 
                        <InputField
                            placeholder="Введите свое имя..." 
                            text={username} 
                            onChange={setUsername} 
                            titleText="Введите свое имя" 
                            required={true}
                            width={"100%"}
                            type="password"
                        /> 
                        <InputField 
                            placeholder="Введите свой пароль..." 
                            text={email} 
                            onChange={setEmail} 
                            titleText="Введите свой пароль" 
                            required={true}
                            width={"100%"}
                        /> 
                        <InputField 
                            placeholder="Повторите свой пароль..." 
                            text={email} 
                            onChange={setEmail} 
                            required={true}
                            width={"100%"}
                        /> 
                    </div>
                    <button className="general-button" onClick={handleRegister}>
                        <h4>Регистрация</h4>
                    </button>
                </div>
                <ContentLine />
                <p className="continue-with">Войти через</p>
                <button className="general-button google-login">
                    <img src={googleIcon} alt="войти через Google" className="google-icon"/>
                    <p className="google-text">Google</p>
                </button>
                <Link to={"/login"} className="register-button">Есть аккаунт? Войти</Link>
            </div>
        </div>
    ); 
}

export default RegisterPage; 