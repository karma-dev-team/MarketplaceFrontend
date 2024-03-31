import { Link } from "react-router-dom";
import UserRoles from "../../Schemas/UserRoles";

type props = { Role: UserRoles }

const LeftNavbarComponent: React.FC<props> = (props: props) => { 
    return (
        <div className="root-leftnavbar">
            <div className="logo navbar-button">
                <Link to={"/"}>

                </Link>
                <Link to={"/"}>
                </Link>
            </div>
            <div className=""></div>
        </div>
    )
}

export default LeftNavbarComponent; 