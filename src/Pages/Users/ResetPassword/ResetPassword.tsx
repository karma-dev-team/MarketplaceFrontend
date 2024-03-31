import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContentLine from "src/Components/ContentLine/ContentLine";
import InputField from "src/Components/InputField/InputField";
import googleIcon from "@images/google-icon.png"; 
import LogoComponent from "src/Components/Logo/Logo";
import ToHomeComponent from "src/Components/ToHome/ToHome";
import "./ResetPassword.css"

const ResetPasswordPage: React.FC = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState<string>(''); 
    const [status, setStatus] = useState<"code" | "email">('email'); 
    const [code, setCode] = useState<string>('')

    const handleEmail = (e: any) => { 
        setStatus('code')
    }

    const handleCode = (e: any) => { 
        navigate(`/reset-password?code=${code}`); 
    }

    return ( 
        <div className="root-resetpassword">
            <ToHomeComponent text={"На главную"}/>
            <div className="resetpassword-cotainer">
                <div className="resetpassword-header">
                    <LogoComponent />
                    <h2 className="">Сбросить пароль</h2>
                </div>

                <div className="resetpassword-form">

                    <div className="resetpassword-input-fields">
                        { status === "email" ? 
                        <InputField
                            placeholder="Введите свою почту..." 
                            text={email} 
                            onChange={setEmail} 
                            titleText="Введите свою почту" 
                            required={true}
                            width={"100%"}
                        /> 
                        : 
                        <InputField
                            placeholder="Введите код..." 
                            text={code} 
                            onChange={setCode} 
                            titleText="Введите код который вам отправили" 
                            required={true}
                            width={"100%"}
                        />  } 
                    </div>
                    { status === "email" ? 
                    <button className="general-button" onClick={handleEmail}>
                        <h4>Отправить email</h4>
                    </button>
                    : 
                    <button className="general-button" onClick={handleCode}>
                        <h4>Подвердить</h4>
                    </button>} 
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
    )
}

export default ResetPasswordPage; 