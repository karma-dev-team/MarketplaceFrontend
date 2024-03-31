import "./ToHome.css"
import backLongArrow from "@images  /long-arrow.svg"

type props = { text: string }

const ToHomeComponent: React.FC<props> = (props: props) => { 
    return (
        <div className="root-tohome">
            <img src={backLongArrow} alt={props.text} className="tohome-back-long-arrow"/>
            <div className="tohome-text">{props.text}</div>
        </div>
    )
}

export default ToHomeComponent; 