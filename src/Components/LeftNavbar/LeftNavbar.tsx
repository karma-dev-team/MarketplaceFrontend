import { Link } from "react-router-dom";

type props = { Role: UserRoles }

const LeftNavbarComponent: React.FC<props> = (props: props) => { 
    return (
        <div className="root-leftnavbar">
            <div className="logo navbar-button">
                <Link to={"/"}>
                    <img src={karmaStoreLogo} alt="home" />
                    <div className="logo-text">Karma store</div>
                </Link>
                <Link to={"/"}>
                </Link>
            </div>
            <div className=""></div>
        </div>
    )
}

export default LeftNavbarComponent; 