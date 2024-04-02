import React from "react";
import { Link } from "react-router-dom";
import UserRoles from "../../Schemas/UserRoles";
import HartCartLogo from "@images/Group.svg";
import SearchLogo from "@images/Search.svg";
import ChatLogo from "@images/Chat.svg";
import CartLogo from "@images/Cart.svg";
import CorzineLogo from "@images/Corzine.svg";
import AnaliticLoopLogo from "@images/AnaliticLoop.svg";
import PlusLogo from "@images/PlusLog.svg";
import DiscordLogo from "@images/Discord.svg";
import TelegramLogo from "@images/Telegram.svg";
import SteamLogo from "@images/Steam.svg";
import "./LeftNavbar.css";
import LogoComponent from "../Logo/Logo";
import { Dispatch } from "react";
import ContentLine from "../ContentLine/ContentLine";

type Props = {
  Role: UserRoles;
  setCategory: Dispatch<string>;
  category: string;
};

const LeftNavbarComponent = (props: Props) => {
    const buttons = [
      { id: 1, icon: HartCartLogo, label: 'Товары' },
      { id: 2, icon: SearchLogo, label: 'Каталог игр' },
      { id: 3, icon: ChatLogo, label: 'Сообщение' },
      { id: 4, icon: CartLogo, label: 'Покупки' },
      { id: 5, icon: CorzineLogo, label: 'Продажи' },
      { id: 6, icon: AnaliticLoopLogo, label: 'Аналитика' },
      { id: 7, icon: PlusLogo, label: 'Продать' },
    ];
  
    const buttonsLine = [2, 3, 6];
  
    const handleButtonClick = (label: string) => {
      props.setCategory(label);
    };
  
    return (
      <div className="navbar">
        <div className="logo-section">
          <LogoComponent />
        </div>
        <div className="buttons-section">
          {buttons.map((button, index) => {
            const contentLineAfterButton = buttonsLine.includes(button.id);
            return (
              <React.Fragment key={button.id}>
                <div className="navbar-button" onClick={() => handleButtonClick(button.label)}>
                  <img src={button.icon} alt={`${button.label} Icon`} className="button-icon"/>
                  <p>{button.label}</p>
                </div>
                {contentLineAfterButton && <ContentLine color="#696969"/>}
              </React.Fragment>
            );
          })}
        </div>
        <div className="footer">
            <div className="footer_icon">
                <a href="#"><img src={DiscordLogo} alt="Discord" /></a>
                <a href="#"><img src={TelegramLogo} alt="Telegram" /></a>
                <a href="#"><img src={SteamLogo} alt="Steam" /></a>
            </div>
            <div className="footer_link">
                <a href="#">Помощь</a>
                <a href="#">О проекте</a>
                <a href="#">Правила</a>
                <a href="#">Соглашение</a>
                <a href="#">Конфидиценциальность</a>
                <a href="#">Контакты</a>
            </div>
            <div className="footer_copyright">
                <p>@ 2024 ООО «Karma Team»</p>
            </div>
        </div>
      </div>
    );
  };
  
  export default LeftNavbarComponent;