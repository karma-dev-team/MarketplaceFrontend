import { NavLink } from "react-router-dom";
import "./NavigationMap.css"

type props = { elements: Map<string, string> }

const NavigationMapComponent: React.FC<props> = (props: props) => { 
    const preNavigationBar = Array.from(props.elements.keys())
    let navigationBar: Array<string> = []; 
    preNavigationBar.forEach((value, index) => { 
        navigationBar.push(value, "/")
    })
    navigationBar = navigationBar.slice(0, -1)
    
    return (
        <div className="navigationmap-root">
            {navigationBar.map((value: string) => {
                return (
                    <div className="navigationmap-element"> 
                        {value !== "/" ? 
                        <NavLink to={props.elements.get(value) || "/"} className={"navigationmap-link"}>{value}</NavLink>
                        : <p className="navigationmap-link">{value}</p> }
                    </div>
                )
            })}
        </div>
    )
}

export default NavigationMapComponent
