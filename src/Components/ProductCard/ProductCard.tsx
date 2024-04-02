import { asFileUrl } from "src/Gateway/Config";
import "./ProductCard.css"
import StarsComponent from "../Stars/Stars";
import { Link } from "react-router-dom";

type props = {
    productId: string,  
    title: string,
    image: string,
    gameImage: string, 
    userStars: number, 
    price: number, 
    game: string, 
    category: string
}

const ProductCardComponent: React.FC<props> = (props: props) => {  
    return (
        <div className="root-productcard" >
            <div className="productcard-header">
                <img src={asFileUrl(props.gameImage)} alt="gameimage" className="productcard-gameimage"/>
                <div className="productcard-header-text">
                    <h4>{props.game}</h4>
                    <Link to={`/category/${props.category}`}>{props.category}</Link>
                </div>
            </div>
            <div className="productcard-image-container">
                <img src={asFileUrl(props.image)} alt={props.title} className="productcard-image"/>
            </div>
            <div className="productcard-info">
                <h4>{props.price} ₽</h4>
                <Link to={`/product/${props.productId}`}>{props.title}</Link>
                <StarsComponent stars={props.userStars}/> 
            </div>
        </div>
    ); 
}

export default ProductCardComponent; 