import React from "react";
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
import { useNavigate } from "react-router-dom";
import { NavbarCategories } from "src/Utils/NavbarProps";

type Props = {
  Role: UserRoles;
  setCategory: Dispatch<string>;
  category: string;
  navpath: string;
};

type Button = {
  id: number;
  icon: any;  // Тип 'any' здесь использован для упрощения, замените на более конкретный тип, если он известен
  label: NavbarCategories, 
  navpath: string;
};

const LeftNavbarComponent = (props: Props) => {
    const buttons: Button[] = [
      { id: 1, icon: HartCartLogo, label: 'Товары', navpath: '/' },
      { id: 2, icon: SearchLogo, label: 'Каталог игр', navpath: '/games' },
      { id: 3, icon: ChatLogo, label: 'Сообщение', navpath: '/chats'  },
      { id: 4, icon: CartLogo, label: 'Покупки', navpath: '/user/1/purchases/'  },
      { id: 5, icon: CorzineLogo, label: 'Продажи', navpath: '/user/1/sales/'  },
      { id: 6, icon: AnaliticLoopLogo, label: 'Аналитика', navpath: '/user/1/analytics'  },
      { id: 7, icon: PlusLogo, label: 'Продать', navpath: '/products/create'  },
      { id: 8, icon: PlusLogo, label: "Управление", navpath: "/control"}
    ];
  
    const buttonsLine = [2, 3, 6, 7];
  
    const navigate = useNavigate()
    const handleButtonClick = (label: string, navpath: string) => {
      props.setCategory(label);

      navigate(navpath)
    };
  
    return (
      <div className="navbar">
        <div className="buttons-section">
          <div className="logo-section">
            <LogoComponent />
          </div>
          {buttons.map((button, index) => {
            const contentLineAfterButton = buttonsLine.includes(button.id);
            return (
              <React.Fragment key={button.id}>
                <div className="navbar-button" onClick={() => handleButtonClick(button.label, button.navpath)}>
                  <img src={button.icon} alt={`${button.label} Icon`} className="button-icon"/>
                  <p>{button.label}</p>
                </div>
                {contentLineAfterButton && <ContentLine color="#2F3241" margin="5px"/>}
              </React.Fragment>
            );
          })}
        </div>
        <div className="footer">
            <div className="footer_icon">
                <a href="https://discord.gg/4BxZEjhetP"><img src={DiscordLogo} alt="Discord" /></a>
                <a href="#"><img src={TelegramLogo} alt="Telegram" /></a>
                <a href="https://steamcommunity.com/groups/IgraKarma"><img src={SteamLogo} alt="Steam" /></a>
            </div>
            <div className="footer_link">
                <a href="http://localhost:3000/contact/#">Помощь</a>
                <a href="#">О проекте</a>
                <a href="#">Правила</a>
                <a href="https://www.google.com/intl/ru/policies/terms/changes/">Соглашение</a>
                <a href="#">Конфидиценциальность</a>
                <a href="http://localhost:3000/contact/#">Контакты</a>
            </div>
            <div className="footer_copyright">
                <p>@ 2024 ООО «Karma Team»</p>
            </div>
        </div>
      </div>
    );
  };
  
  export default LeftNavbarComponent;