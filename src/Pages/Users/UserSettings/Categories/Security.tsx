import ContentLine from "src/Components/ContentLine/ContentLine";
import "./Security.css"
import { NavbarProps } from "src/Utils/NavbarProps";

const UserSecurityPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('')  
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