import "./Navbar.css"; // Убедитесь, что путь к CSS файлу верный
import { Dispatch, useEffect, useState } from "react";
import NotificationLogo from "@images/Notefication.svg";
import PaymantLogo from "@images/paymant.svg";
import NavbarSearchInput from "./Search";
import { useNavigate } from "react-router-dom";
import { UserEntity, WalletControllersApi, WalletEntity } from "restclient";
import NavbarProfileComponent from "./Profile";
import { ApiConfig } from "src/Gateway/Config";

type Props = {
    user?: UserEntity | undefined;
    setCategory: Dispatch<string>;
    category: string;
};

const NavbarComponent = (props: Props) => {
    const navigate = useNavigate()
    const [wallet, setWallet] = useState<WalletEntity>()

    useEffect(() => { 
        (async () => { 
            const walletApi = new WalletControllersApi(ApiConfig)

            try { 
                let walletResponse = await walletApi.apiWalletUserUserIdGet(props.user?.id || "")
                setWallet(walletResponse.data)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [props.user])

    return (
        <div className="navbar-root">
            <div className="navbar_searchbar navbar-item">
                <NavbarSearchInput placeholder="Поиск"/>
            </div>
            {props.user !== undefined ? 
            <>
                <div className="navbar_notification navbar-item" onClick={() => navigate("/notifications")}>
                    <img src={NotificationLogo} alt="notification" />
                    <p>Уведомления</p>
                </div>
                <div className="navbar_payment navbar-item" onClick={() => navigate("/wallet")}>
                    <img src={PaymantLogo} alt="paymant" />
                    <p>{wallet?.availableBalance.amount} ₽</p>  
                </div>
                <div className="navbar_User navbar-item">
                    <NavbarProfileComponent user={props.user}/>
                </div>
            </>
            : <div className="navbar_Login navbar-item" onClick={() => navigate("/login")}>
                Войти
            </div>}
        </div>
    );
};

export default NavbarComponent;
