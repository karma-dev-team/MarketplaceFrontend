import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContentLine from "src/Components/ContentLine/ContentLine";
import InputField from "src/Components/InputField/InputField";
import googleIcon from "@images/google-icon.png"; 
import LogoComponent from "src/Components/Logo/Logo";
import ToHomeComponent from "src/Components/ToHome/ToHome";
import "./ResetPassword.css"
import { AuthControllersApi } from "restclient";
import { ApiConfig } from "src/Gateway/Config";
import { useCookies } from "react-cookie";
import { AuthKey } from "src/Gateway/Consts";
import ErrorMessage from "src/Components/ErrorMessage/ErrorMessage";

const ResetPasswordPage: React.FC = () => {
    const navigate = useNavigate()
    const [errorMsg, setError] = useState<string>()
    const [cookies] = useCookies([AuthKey])
    const [email, setEmail] = useState<string>(''); 
    const [status, setStatus] = useState<"code" | "email" | "password">('email'); 
    const [code, setCode] = useState<string>('')
    const authApi = new AuthControllersApi(ApiConfig)
    const [repeatPassword, setReapeatPassword] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    useEffect(() => { 
        if (cookies.Authorization !== undefined) { 
            navigate("/")
        }
    }, [navigate, cookies])

    const handleEmail = async (e: any) => {
        e.preventDefault()
        
        if (email === "" || email === undefined) { 
            setError("Введите эмейл")
            return; 
        }
        
        try { 
            await authApi.apiAuthResetCodeEmailPost(email)
        } catch (e) { 
            console.error(e)
        }
        setStatus('code')
    }

    const handleCode = async (e: any) => { 
        if (code === "" || code === undefined) { 
            setError("Введите свой код")
            return; 
        }

        try {
            // лютый костыль! 
            await authApi.apiAuthResetCodeVerifyCodePost(code, { email: email, newPassword: ""})
        } catch (e) { 
            setError(String(e))
            console.error(e)
            return; 
        }

        setStatus("password")
    }

    const handleNewPassword = async (e: any) => { 
        if (password === "" || password === undefined || repeatPassword !== password) { 
            setError("Введите пароль и повторите его")
            return; 
        }

        try {
            await authApi.apiAuthResetCodeVerifyCodePost(code, { email: email, newPassword: password})
        } catch (e) { 
            setError(String(e))
            console.error(e)
            return; 
        }

        navigate("/")
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
                        : status === "code" ? 
                        <InputField
                            placeholder="Введите код..." 
                            text={code} 
                            onChange={setCode} 
                            titleText="Введите код который вам отправили" 
                            required={true}
                            width={"100%"}
                        /> : 
                        <>
                        <InputField 
                            placeholder="Введите новый пароль..." 
                            text={password} 
                            onChange={setPassword} 
                            titleText="Ваш новый пароль" 
                            required={true}
                            width={"100%"}
                        />
                        <InputField 
                            placeholder="Повторите новый пароль..." 
                            text={repeatPassword} 
                            onChange={setReapeatPassword} 
                            titleText="Повторите ваш новый пароль" 
                            required={true}
                            width={"100%"}
                        /> 
                        </>
                        } 
                    </div>
                    <ErrorMessage errorMessage={errorMsg}/>
                    { status === "email" ? 
                    <button className="general-button" onClick={handleEmail}>
                        <h4>Отправить email</h4>
                    </button>
                    : status === "code" ? 
                    <button className="general-button" onClick={handleCode}>
                        <h4>Отправить</h4>
                    </button> 
                    : <button className="general-button" onClick={handleNewPassword}>
                        Подвердить
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