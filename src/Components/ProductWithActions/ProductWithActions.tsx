import "./ProductWithActions.css"
import { useNavigate } from "react-router-dom"

type props = { 
    id: string, 
    productImage: string, 
    name: string, 
    views: number, 
    description: string, 
    badButtonClick: () => void,
    acceptButtonClick: () => void, 
    badButtonText?: string, 
    acceptButtonText?: string
}

const ProductWithActionsComponent: React.FC<props> = (props: props) => {
    const navigate = useNavigate() 
    return (
        <div className="root-productwithactions">
            <div className="olololo" onClick={() => navigate(`/product/${props.id}`)}>
                <div className="productactions-image-container">
                    <img src={props.productImage} alt="" className="productactions-image"/>
                </div>
                <div className="productwithactions-info">
                    <h1>{props.name}</h1>
                    <p className="product-mini-descriptiom">{props.description}</p>
                </div>
            </div>
            <div className="productwithactions-right-side">
                <div className="neutral-button action-button" onClick={() => props.acceptButtonClick()}>{props.acceptButtonText || "Одобрить"}</div>
                <div className="bad-button action-button" onClick={() => props.badButtonClick()}>{props.badButtonText || "Отказать"}</div>
            </div>
        </div>
    )
}

export default ProductWithActionsComponent; 