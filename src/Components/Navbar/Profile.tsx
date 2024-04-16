import React, { useEffect, useState } from 'react';
import { UserEntity } from "restclient";
import { asFileUrl, setAccessTokenForClient } from "src/Gateway/Config";
import arrow from "@images/Arrow.svg";
import settingsIcon from "@images/settings.svg"
import helpIcon from "@images/help.svg"
import logoutIcon from "@images/exit-icon.svg"
import "./Profile.css"
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { AuthKey } from 'src/Gateway/Consts';

interface NavbarProfileComponentProps {
  user: UserEntity;
}

const NavbarProfileComponent: React.FC<NavbarProfileComponentProps> = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()
  const [cookies, setCookies, deleteCookies] = useCookies([AuthKey])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenuOnRouteChange = () => {
      setIsMenuOpen(false);
    };

    closeMenuOnRouteChange()
  }, [navigate]);

  const logoutAction = () => { 
    if (cookies.Authorization !== undefined || cookies.Authorization !== "") { 
        console.log("Logout completed")
        setAccessTokenForClient("")
        deleteCookies(AuthKey)
        setTimeout(() => {
            navigate("/")
        }, 200)
        window.location.reload()
    }
  }

  return (
    <div className="root-navbarprofile">
      <div onClick={toggleMenu} className="navbar-profile-trigger">
        <p>User</p>
        <img src={asFileUrl(user.image?.id)} alt="User Avatar" width={30} height={30} className="navbar-user-image" />
        <img src={arrow} alt="Dropdown Arrow" width={20} height={20} className={`navbar-dropdown-arrow ${isMenuOpen ? 'open' : ''}`} />
      </div>
      {isMenuOpen && (
        <div className={`navbar-profile-dropdown`}>
          <div className="user-info-dropdown">
            <img src={asFileUrl(user.image?.id)} alt="User Avatar" width={30} height={30} className="dropdown-avatar" />
            <Link to={`/user/${user.id}`} className="dropdown-user-name">
                <p>{user.userName}</p>
                <p>Мой профиль</p>
            </Link>
          </div>
          <ul className="dropdown-options">
            <li onClick={(e) => { 
                navigate(`/user/${user.id}/settings`)
                toggleMenu()
            }} className='dropdown-settings'>
                <img src={settingsIcon} alt="" width={24} height={24}/>
                Настройки
            </li>
            <li onClick={(e) => {
                navigate(`/contact`)
                toggleMenu()
            }} className='drowdown-help'>
                <img src={helpIcon} alt="" width={24} height={24}/>
                Помощь
            </li>
            <li onClick={(e) => {
                logoutAction()
                toggleMenu()
            }} className='dropdown-logout'>
                <img src={logoutIcon} alt="" width={24} height={24}/>
                Выйти
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarProfileComponent;
