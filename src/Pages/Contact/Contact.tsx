import ContentLine from "src/Components/ContentLine/ContentLine";
import "./Contact.css"
import InputField from "src/Components/InputField/InputField";
import { useState } from "react";


const ContactPage: React.FC = () => {  
    const [text, setText] = useState<string>(''); 
    return (
        <div className="root-contact">
            <div className="superpupercontainer">
                <div className="huinia-123">
                    <p className="zvezda">Главная</p>
                    <p className="tochka">• </p>
                    <p className="pizda">Помощь</p>
                </div>
                <div className="helpinfo">
                    <h2>Помощь</h2>
                    <ContentLine />
                    <p className="info">
                        Мы всегда готовы помочь в решении спорных ситуаций между пользователями проекта и оказать поддержку в любых других ситуациях, касающихся <br />
                        функциональной части.
                    </p>
                    <br />
                    <p className="info">
                        Наши операторы работают для вас с 10:00 до 21:00 по будним дням. В субботу, воскресенье и праздники работает дежурный оператор, время ответа <br /> может быть увеличено.
                        <br />
                        • Звоните нам по номеру: <u>8-800-600-64-51</u> - звонок по России бесплатный.
                        <br />
                        • Чат с поддержкой: <u>написать</u>
                    </p>
                </div>
                <div className="contactform">
                    <h2 className="textname123">Контектная форма</h2>
                    <ContentLine />
                    <InputField 
                        height={60}
                        width={290}
                        titleText="Текст сообщения"
                        placeholder="Введите ваше обращение"
                        type="textarea"
                        text={text}
                        onChange={setText}
                    />
                    <button className="knopka">Отправить</button>
                </div>
            </div>
        </div>
    ); 
}

export default ContactPage; 