import "./Navbar.css"; // Убедитесь, что путь к CSS файлу верный
import { Dispatch } from "react";
import UserRoles from "../../Schemas/UserRoles";
import NotificationLogo from "@images/Notefication.svg";
import PaymantLogo from "@images/paymant.svg";
import SeacrhLoopLogo from "@images/SearchLoop.svg";
import SearchInput from "../Search/Search";
type Props = {
    Role: UserRoles;
    setCategory: Dispatch<string>;
    category: string;
  };

const NavbarComponent = (props: Props) => {
    return (
        <div className="navbar-root">
            <div className="navbar_searchbar navbar-item">
                <SearchInput placeholder="Поиск"/>
            </div>
            <div className="navbar_notification navbar-item">
                <img src={NotificationLogo} alt="notification" />
                <p>Уведомление</p>
            </div>
            <div className="navbar_payment navbar-item">
                <img src={PaymantLogo} alt="paymant" />
                <p>0 ₽</p>
            </div>
            <div className="navbar_User navbar-item">
                 <p>User</p>
                 <a href="/" className="navbar-home-link">
                    <img src="path_to_your_logo.png" alt="" />
                </a>
                <p>˅</p>
            </div>
        </div>
    );
};

export default NavbarComponent;
