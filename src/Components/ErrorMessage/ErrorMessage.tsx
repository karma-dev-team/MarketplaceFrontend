import {Dispatch} from 'react' 
import "./ErrorMessage.css"

type props = { errorMessage: string | undefined, setErrorMessage: Dispatch<string> }


const ErrorMessage: React.FC<props> = (props: props) => { 
    if (props.errorMessage === undefined) { 
        return null 
    }

    return ( 
        <div className="error-message">
            <div className="error-message">
                {props.errorMessage}
            </div>
        </div>
    )
}

export default ErrorMessage;