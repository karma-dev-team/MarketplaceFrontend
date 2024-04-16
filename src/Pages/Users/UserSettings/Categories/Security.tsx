import ContentLine from "src/Components/ContentLine/ContentLine";
import "./Security.css"
import { NavbarProps } from "src/Utils/NavbarProps";
import { useCookies } from "react-cookie";
import { AuthKey } from "src/Gateway/Consts";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserSecurityPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('')  
    const [cookies] = useCookies([AuthKey])
    const navigate = useNavigate()

    useEffect(() => { 
        if (cookies.Authorization === undefined || cookies.Authorization === "") { 
            navigate("/login")
        }
    }, [cookies, navigate])


    return (
        <div className="root-usersecurity">
            <div className="korobka">
                <h1>Настройки</h1>
                <ContentLine/>
                <h2>Безопастность</h2>
                <ContentLine/>
                <div className="password-container">
                    <div className="password">
                        <img src="" alt="" />
                        <div className="textinfo1">Пароль</div>
                        <div className="textinfo2">Рекомендуем периодически менять пароль</div>
                    </div>
                    <div className="knopka123"><button className="knopka">Изменить</button></div>
                </div>
                <ContentLine/>
                <div className="telegram-container">
                    <div className="telegram">
                        <img src="" alt="" />
                        <div className="textinfo1">Telegram</div>
                        <div className="textinfo2">Поменять привязанный телеграмм аккаунт</div>
                    </div>
                    <div className="knopka123"><button className="knopka">Изменить</button></div>
                </div>
                <ContentLine/>
            </div>
        </div>
    ); 
}

export default UserSecurityPage; 