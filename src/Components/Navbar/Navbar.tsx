import "./Navbar.css"; // Убедитесь, что путь к CSS файлу верный
import { Dispatch } from "react";
import UserRoles from "../../Schemas/UserRoles";
import NotificationLogo from "@images/Notefication.svg";
import PaymantLogo from "@images/paymant.svg";
import NavbarSearchInput from "./Search";
import arrow from "@images/Arrow.svg"
import { useNavigate } from "react-router-dom";

type Props = {
    Role: UserRoles;
    setCategory: Dispatch<string>;
    category: string;
  };

const NavbarComponent = (props: Props) => {
    const navigate = useNavigate()

    return (
        <div className="navbar-root">
            <div className="navbar_searchbar navbar-item">
                <NavbarSearchInput placeholder="Поиск"/>
            </div>
            <div className="navbar_notification navbar-item" onClick={() => navigate("/user/{userId}/notifications")}>
                <img src={NotificationLogo} alt="notification" />
                <p>Уведомление</p>
            </div>
            <div className="navbar_payment navbar-item" onClick={() => navigate("/wallet/{userId}")}>
                <img src={PaymantLogo} alt="paymant" />
                <p>0 ₽</p>  
            </div>
            <div className="navbar_User navbar-item" onClick={() => navigate("/user/{userId}")}>
                 <p>User</p>
                 <a href="/" className="navbar-home-link">
                    <img src="path_to_your_logo.png" alt="" />
                </a>
                <img src={arrow} alt="" width={20} height={20}/>
            </div>
        </div>
    );
};

export default NavbarComponent;
