import logo from "@images/karmastore-logo.png"
import "./Logo.css"

const LogoComponent = () => { 
    return ( 
        <div className="root-logo">
            <img src={logo} alt="home" className="logo-image"/>
            <p className="logo-text">Karma store</p>
        </div>
    )
}

export default LogoComponent; 