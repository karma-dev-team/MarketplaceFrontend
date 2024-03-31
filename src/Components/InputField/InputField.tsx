import { Dispatch } from "react"
import "./InputField.css"

type props = { 
    placeholder: string,
    text: string, 
    onChange: Dispatch<string>,
    required?: boolean | undefined, 
    titleText?: string | undefined, 
    width?: number | undefined, 
    height?: number | undefined, 
    bgcolor?: string | undefined
}

const InputField: React.FC<props> = (props: props) => { 
    if (props.bgcolor === undefined) { 
        props.bgcolor = "var(--input-field-default)";  
    }
    if (props.required === undefined) { 
        props.required = false; 
    }
    return ( 
        <div className="root-inputfield">
            {props.titleText !== undefined ? <div className="input-title-text">
                {props.titleText} {props.required === true ? <span style={{color: "red"}}>*</span> : null}
            </div> : null}
            <input 
                style={{ 
                    width: props.width, 
                    height: props.height, 
                    background: props.bgcolor, 
                }}
                type="text" 
                className="inputfield-input" 
                value={props.text}
                onChange={(e) => props.onChange(e.target.value)}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default InputField; 