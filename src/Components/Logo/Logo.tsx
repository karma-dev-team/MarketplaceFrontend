import logo from "@images/karmastore-logo.png"
import "./Logo.css"
import { useNavigate } from "react-router-dom"

const LogoComponent = () => { 
    const navigate = useNavigate()

    return ( 
        <div className="root-logo" onClick={() => navigate("/")}>
            <img src={logo} alt="home" className="logo-image"/>
            <p className="logo-text">Karma store</p>
        </div>
    )
}

export default LogoComponent; 