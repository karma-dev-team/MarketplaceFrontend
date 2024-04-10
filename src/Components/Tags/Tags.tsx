import { Dispatch } from "react";
import "./Tags.css"

type props = { values: string[], currentValue: string, setCurrentValue: Dispatch<string>}

const TagsSearchComponent: React.FC<props> = (props: props) => { 
    return ( 
        <div className="root-searchtags">
            {props.values.map((value) => { 
                return ( 
                    <div 
                        className={`search-tag ${value === props.currentValue ? "active" : ""}`} 
                        onClick={() => props.setCurrentValue(value)}
                    >
                        {value}
                    </div>
                )
            })}
        </div>
    )
}

export default TagsSearchComponent; 