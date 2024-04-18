import googleIcon from "@images/google-icon.png"; 
import "./Login.css"
import ToHomeComponent from "src/Components/ToHome/ToHome";
import LogoComponent from "src/Components/Logo/Logo";
import InputField from "src/Components/InputField/InputField";
import { useEffect, useState } from "react";
import ContentLine from "src/Components/ContentLine/ContentLine";
import { Link, useNavigate } from "react-router-dom";
import { AuthControllersApi } from "restclient";
import { ApiConfig, setToken } from "src/Gateway/Config";
import ErrorMessage from "src/Components/ErrorMessage/ErrorMessage";
import { useCookies } from "react-cookie";
import { AuthKey } from "src/Gateway/Consts";

const LoginPage: React.FC = () => {  
    const [email, setEmail] = useState<string>(''); 
    const [password, setPassword] = useState<string>(''); 
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState<string>()
    const [cookies, setCookies] = useCookies([AuthKey])
    useEffect(() => { 
        if (cookies.Authorization !== undefined) { 
            navigate("/")
        }
    }, [cookies, navigate])

    const handleLogin = async () => { 
        const authApi = new AuthControllersApi(ApiConfig)

        if (email === '' || password === '') { 
            return;
        }
        try { 
            let loginResponse = await authApi.apiAuthLoginPost({ 
                email: email, 
                password: password, 
            })

            setToken(loginResponse.data.accessToken, setCookies); 
        } catch (e) { 
            console.error(e)
            setErrorMsg(String(e))
        } 
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
                            placeholder="Введите свой пароль" 
                            text={password} 
                            onChange={setPassword} 
                            titleText="Введите свой пароль" 
                            required={true}
                            width={"100%"}
                            type="password"
                        /> 
                    </div>
                    
                    <ErrorMessage errorMessage={errorMsg}/>
                    <button className="general-button" onClick={handleLogin}>
                        <h4>Войти</h4>
                    </button>
                </div>
                <ContentLine />
                <p className="continue-with">Войти через</p>
                <button className="general-button google-login">
                    <img src={googleIcon} alt="войти через Google" className="google-icon"/>
                    <p className="google-text">Google</p>
                </button>
                <Link to={"/register"} className="register-button">Нету аккаунта? Создать аккаунт</Link>
                <Link to={"/reset-password"} className="register-button">Забыли пароль?</Link>
            </div>
        </div>
    ); 
}

export default LoginPage; 