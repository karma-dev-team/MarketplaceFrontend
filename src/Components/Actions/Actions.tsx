import "./Actions.css"

type props = { 
    submitAction: Function,
     cancelAction: Function, 
     submitText?: string, 
     cancelText?: string
}

const ActionsButtonsComponent: React.FC<props> = (props: props) => { 
    return ( 
        <div className="actions-buttons">
            <div className="actions-submit" onClick={() => props.submitAction()}>{props.submitText || "Отправить"}</div>
            <div className="actions-cancel" onClick={() => props.cancelAction()}>{props.cancelText || "Отмена"}</div>
        </div>
    )
}

export default ActionsButtonsComponent; 
