import ContentLine from "src/Components/ContentLine/ContentLine";
import "./UserSettings.css"
import InputField from "src/Components/InputField/InputField";
import { useState } from "react";
import avatarIcon from "@images/cameraicon.png"

const UserSettingsPage: React.FC = () => {  
    const [text, setText] = useState<string>(''); 
    return (
        <div className="root-usersettings">
            <div className="omegacontainer">
                <h2>Настройки</h2>
                <ContentLine/>
                <p className="textinfo">Профиль</p>
                <div className="qwerty">
                    <div className="left">
                        <p className="textinfo">Аватар</p>
                        <div className="img321">
                            <img src={avatarIcon} alt="avatar" />
                        </div>
                    </div>
                    <div className="right">
                        <p className="textinfo">Имя пользователя</p>
                        <p className="username">test</p>
                        <br />
                        <p className="textinfo">Почта</p>
                        <p className="useremail">test@gmail.com</p>
                        <br />
                        <p className="textinfo">О себе</p>
                        <InputField 
                            height={71}
                            width={338}
                            titleText=""
                            placeholder="Введите информацию"
                            type="textarea"
                            text={text}
                            onChange={setText}
                        />
                        <button className="knopka">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default UserSettingsPage; 