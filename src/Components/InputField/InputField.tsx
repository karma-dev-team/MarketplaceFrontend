import { Dispatch } from "react"
import "./InputField.css"

type props = { 
    placeholder: string,
    text: string, 
    onChange: Dispatch<string>,
    required?: boolean | undefined, 
    titleText?: string | undefined, 
    width?: number | string | undefined, 
    height?: number | string | undefined, 
    bgcolor?: string | undefined
}

const InputField: React.FC<props> = (props: props) => { 
    let bgcolor, required; 
    bgcolor = props.bgcolor === undefined ? "var(--input-field-default)" : props.bgcolor; 
    required = props.required === undefined ? false : props.required; 
    return ( 
        <div className="root-inputfield">
            {props.titleText !== undefined ? <p className="input-title-text">
                {props.titleText} {required === true ? <span style={{color: "red"}}>*</span> : null}
            </p> : null}
            <input 
                style={{ 
                    width: props.width, 
                    height: props.height, 
                    background: bgcolor, 
                    caretColor: "white"
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