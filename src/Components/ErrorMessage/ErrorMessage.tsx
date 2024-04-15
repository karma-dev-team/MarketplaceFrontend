import "./ErrorMessage.css"

type props = { errorMessage: string | undefined }


const ErrorMessage: React.FC<props> = (props: props) => { 
    if (props.errorMessage === undefined) { 
        return null 
    }

    return ( 
        <div className="error-message">
            {props.errorMessage}
        </div>
    )
}

export default ErrorMessage;