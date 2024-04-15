import { Dispatch, CSSProperties } from "react"
import "./InputField.css"

type props = { 
    placeholder: string,
    text: string | number | readonly string[], 
    onChange: Dispatch<string>,
    required?: boolean | undefined, 
    titleText?: string | undefined, 
    width?: number | string | undefined, 
    height?: number | string | undefined, 
    bgcolor?: string | undefined, 
    type?: string | undefined, 
}

const InputField: React.FC<props> = (props: props) => { 
    let bgcolor, required, type; 
    bgcolor = props.bgcolor === undefined ? "var(--input-field-default)" : props.bgcolor; 
    required = props.required === undefined ? false : props.required;
    type = props.type === undefined ? "text" : props.type;  

    const styles: CSSProperties = { 
        width: props.width, 
        height: props.height, 
        background: bgcolor, 
        caretColor: "white", 
        verticalAlign: "baseline", 
        borderRadius: "5px", 
        paddingLeft: "10px", 
        resize: "none"
    }

    return ( 
        <div className="root-inputfield">
            {props.titleText !== undefined ? <label className="input-title-text">
                {props.titleText} {required === true ? <span style={{color: "red"}}>*</span> : null}
            </label> : null}
            {type === "textarea" ?
                <textarea 
                style={styles} 
                className="inputfield-input" 
                value={props.text}
                onChange={(e) => props.onChange(e.target.value)}
                placeholder={props.placeholder}
                autoComplete="new-password" 
                required={required}
            />
            : 
            <input 
                style={styles}
                type={type}   
                required={required}
                className="inputfield-input" 
                value={props.text}
                onChange={(e) => props.onChange(e.target.value)}
                placeholder={props.placeholder}
                autoComplete="new-password" 
            />
            } 
        </div>
    )
}

export default InputField; 