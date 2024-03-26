import { NavLink } from "react-router-dom";
import "./Profile.css"

type props = { userId: string, avatarUrl: string }

const ProfileComponent: React.FC<props> = (props: props) => { 
    return (
        <div className="profile-root">
            <NavLink to={"/user/" + props.userId} className="profile-link">
                <img src={props.avatarUrl} alt="" className="profile-image"/>
            </NavLink>
        </div>
    )
}

export default ProfileComponent; 
