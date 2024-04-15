import ContentLine from "src/Components/ContentLine/ContentLine";
import "./Contact.css"
import InputField from "src/Components/InputField/InputField";
import { useState } from "react";
import { NavbarProps } from "src/Utils/NavbarProps";
import ImageUploaderComponent from "src/Components/ImageUploader/ImageUploader";
import ImageScheme from "src/Schemas/Image";


const ContactPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('') 
    const [text, setText] = useState<string>(''); 
    const [images, setImages] = useState<ImageScheme[]>([]); 

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
                    <p className="support-info">
                        Мы всегда готовы помочь в решении спорных ситуаций между пользователями проекта и оказать поддержку в любых других ситуациях, касающихся <br />
                        функциональной части.
                    </p>
                    <br />
                    <p className="support-info">
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
                    <div className="contactform-container">
                        <InputField 
                            height={80}
                            width={"100%"}
                            titleText="Текст сообщения"
                            placeholder="Введите ваше обращение"
                            type="textarea"
                            text={text}
                            onChange={setText}
                        />
                        <ImageUploaderComponent 
                            images={images}
                            setImages={setImages}
                            elementHeight={"100px"}
                            elementWidth="100%"
                        /> 
                        <div className="knopka-container">
                        <button className="knopka1234">Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default ContactPage; 