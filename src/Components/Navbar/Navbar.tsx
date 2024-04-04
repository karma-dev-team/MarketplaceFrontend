import React from "react";
import "./Navbar.css"; // Убедитесь, что путь к CSS файлу верный
import { Dispatch } from "react";
import ContentLine from "../ContentLine/ContentLine";
import { Link } from "react-router-dom";
import UserRoles from "../../Schemas/UserRoles";
import NotificationLogo from "@images/Notefication.svg";
import PaymantLogo from "@images/paymant.svg";
import SeacrhLoopLogo from "@images/SearchLoop.svg";
type Props = {
    Role: UserRoles;
    setCategory: Dispatch<string>;
    category: string;
  };

const NavbarComponent = (props: Props) => {
    return (
        <div className="navbar-root">
            <div className="navbar_searchbar">
                <div className="navbar_searchbar_content">
                    <img src={SeacrhLoopLogo} alt="SeacrhLoop" />
                    <p>Поиск</p>
                </div>
            </div>
            <div className="navbar_notification">
                <div className="navbar_notification_content">
                    <img src={NotificationLogo} alt="notification" />
                    <p>Уведомление</p>
                </div>
            </div>
            <div className="navbar_payment">
                <div className="navbar_payment_content">
                    <img src={PaymantLogo} alt="paymant" />
                    <p>0 ₽</p>
                </div>
            </div>
            <div className="navbar_User">
                 <p>User</p>
                 <a href="/" className="navbar-home-link">
                    <img src="path_to_your_logo.png" alt="Home" />
                </a>
                <p>˅</p>
            </div>
        </div>
    );
};

export default NavbarComponent;
