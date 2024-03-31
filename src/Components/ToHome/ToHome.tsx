import { useNavigate } from "react-router-dom";
import "./ToHome.css"
import backLongArrow from "@images/long-arrow.svg";

type props = { text: string }

const ToHomeComponent: React.FC<props> = (props: props) => { 
    const navigate = useNavigate(); 

    return (
        <div className="root-tohome" onClick={() => navigate("/")}>
            <img src={backLongArrow} alt={props.text} className="tohome-back-long-arrow"/>
            <p className="tohome-text">{props.text}</p>
        </div>
    )
}

export default ToHomeComponent; 