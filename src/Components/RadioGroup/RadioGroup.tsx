import { OptionType } from "src/Schemas/Option";
import "./RadioGroup.css"
import { Dispatch } from "react";
import VerifiedIcon from "../Icons/VerfiedIcon";
import { asFileUrl } from "src/Gateway/Config";

type props = { options: OptionType[], selected: string, setSelected: Dispatch<string>}

const RadioGroupComponent: React.FC<props> = (props: props) => { 
    // when clicking on option, component takes its VALUE!
    // and uses setSelected to set its proper value
    return ( 
        <div className="root-radiogroup">
            {props.options.map((value) => { 
                return ( 
                    <div className="radiogroup-member" key={value.value} onClick={() => props.setSelected(value.value)}>
                        <div className="radiogroup-header">
                            {value.icon !== undefined ? <div className="radiogroup-memeber-image">
                                <img src={asFileUrl(value.icon)} alt="" width={34} height={34}/>
                            </div> : null}
                            <div className="radiogroup-member-text">{value.label}</div>
                        </div>
                        <div className={`radiogroup-member-button ${value.value === props.selected ? "active" : "notactive"}`}>
                            {props.selected === value.value ? 
                                <VerifiedIcon /> 
                            : null }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default RadioGroupComponent; 