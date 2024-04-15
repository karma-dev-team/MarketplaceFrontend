import "./Navbar.css"; // Убедитесь, что путь к CSS файлу верный
import { Dispatch } from "react";
import NotificationLogo from "@images/Notefication.svg";
import PaymantLogo from "@images/paymant.svg";
import NavbarSearchInput from "./Search";
import arrow from "@images/Arrow.svg"
import { useNavigate } from "react-router-dom";
import testico from "@images/testico255.png"
import { UserEntity } from "restclient";

type Props = {
    user?: UserEntity | undefined;
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
            {props.user !== undefined ? 
            <>
                <div className="navbar_notification navbar-item" onClick={() => navigate("/user/123/notifications")}>
                    <img src={NotificationLogo} alt="notification" />
                    <p>Уведомления</p>
                </div>
                <div className="navbar_payment navbar-item" onClick={() => navigate("/wallet/132")}>
                    <img src={PaymantLogo} alt="paymant" />
                    <p>0 ₽</p>  
                </div>
                <div className="navbar_User navbar-item" onClick={() => navigate(`/user/123`)}>
                    <p>User</p>
                    <img src={testico} alt="" width={30} height={30} className="navbar-user-image"/>
                    <img src={arrow} alt="" width={20} height={20}/>
                </div>
            </>
            : <div className="navbar_Login navbar-item" onClick={() => navigate("/login")}>
                Войти
            </div>}
        </div>
    );
};

export default NavbarComponent;
