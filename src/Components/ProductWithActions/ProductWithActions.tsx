import { ReactNode } from "react"
import "./ProductWithActions.css"

type props = { 
    productImage: string, 
    name: string, 
    views: number, 
    description: string, 
    badButtonClick: () => void,
    acceptButtonClick: () => void, 
    children?: ReactNode    
}

const ProductWithActionsComponent: React.FC<props> = (props: props) => { 
    return (
        <div className="root-productwithactions">
            <div className="olololo">
                <div className="productactions-image-container">
                    <img src={props.productImage} alt="" className="productactions-image"/>
                </div>
                <div className="productwithactions-info">
                    <h1>{props.name}</h1>
                    <p className="product-mini-descriptiom">{props.description}</p>
                </div>
            </div>
            <div className="productwithactions-right-side">
                {props.children !== undefined ? props.children : <>
                    <div className="neutral-button action-button" onClick={() => props.acceptButtonClick()}>Одобрить</div>
                    <div className="bad-button action-button" onClick={() => props.badButtonClick()}>Отказать</div>
                </>}
            </div>
        </div>
    )
}

export default ProductWithActionsComponent; 