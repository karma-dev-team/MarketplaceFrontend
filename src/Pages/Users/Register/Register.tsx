import { useEffect, useState } from "react";
import googleIcon from "@images/google-icon.png"; 
import { Link, useNavigate } from "react-router-dom";
import ContentLine from "src/Components/ContentLine/ContentLine";
import InputField from "src/Components/InputField/InputField";
import LogoComponent from "src/Components/Logo/Logo";
import "./Register.css"
import ToHomeComponent from "src/Components/ToHome/ToHome";
import { useCookies } from "react-cookie";
import { AuthKey } from "src/Gateway/Consts";
import { AuthControllersApi } from "restclient";
import { ApiConfig, setToken } from "src/Gateway/Config";
import ErrorMessage from "src/Components/ErrorMessage/ErrorMessage";

const RegisterPage: React.FC = () => {  
    const [email, setEmail] = useState<string>(''); 
    const [username, setUsername] = useState<string>(''); 
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const navigate = useNavigate()
    const [errorMsg, setError] = useState<string>()
    const [cookies, setCookies] = useCookies([AuthKey])

    useEffect(() => { 
        if (cookies.Authorization !== undefined) { 
            navigate("/")
        }
    }, [cookies])

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => { 
       e.preventDefault()

        if (password !== repeatPassword) { 
            setError("Ваш пароль не совпадает с повторенным паролем")
            return 
        }
        let authApi = new AuthControllersApi(ApiConfig)
        try { 
            await authApi.apiAuthRegisterPost(
                { 
                    email: email, 
                    password: password, 
                    name: username, 
            }
        )
        } catch (e: any) { 
            setError("Такой пользватель уже существует")
            return
        }
        let response = await authApi.apiAuthLoginPost(
            { 
                email: email, 
                password: password, 
            }
        )
        setToken(response.data.accessToken || "", setCookies)
        setTimeout(() => navigate("/"), 500)
    }

    return (
        <div className="root-register">
            <ToHomeComponent text={"На главную"}/>
            <div className="register-cotainer">
                <div className="register-header">
                    <LogoComponent />
                    <h2 className="">Регистрация</h2>
                </div>

                <form className="register-form" onSubmit={handleRegister}>

                    <div className="register-input-fields">
                        <InputField 
                            placeholder="Введите свою почту..." 
                            text={email} 
                            type="email"
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
                            type="text"
                        /> 
                        <InputField 
                            placeholder="Введите свой пароль..." 
                            text={password} 
                            onChange={setPassword} 
                            titleText="Введите свой пароль" 
                            required={true}
                            width={"100%"}
                            type="password"
                        /> 
                        <InputField 
                            placeholder="Повторите свой пароль..." 
                            text={repeatPassword} 
                            onChange={setRepeatPassword} 
                            required={true}
                            width={"100%"}
                            type="password"
                        /> 
                    </div>
                    <ErrorMessage errorMessage={errorMsg}/>
                    <button className="general-button" type="submit">
                        <h4>Регистрация</h4>
                    </button>
                </form>
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