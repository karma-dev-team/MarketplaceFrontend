import { asFileUrl } from "src/Gateway/Config";
import "./ProductCard.css"
import StarsComponent from "../Stars/Stars";
import { Link, useNavigate } from "react-router-dom";

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
    const navigate = useNavigate()

    return (
        <div className="root-productcard" >
            <div className="productcard-header">
                <img src={asFileUrl(props.gameImage)} alt="gameimage" className="productcard-gameimage" onClick={() => navigate(`/games/${props.game}`)}/>
                <div className="productcard-header-text">
                    <Link to={`/games/${props.game}`}><h4 className="productcard-game-link">{props.game}</h4></Link>
                    <Link to={`/category/${props.category}`}>{props.category}</Link>
                </div>
            </div>
            <div className="productcard-image-container" onClick={() => navigate(`/product/${props.productId}`)}>
                <img src={asFileUrl(props.image)} alt={props.title} className="productcard-image"/>
            </div>
            <div className="productcard-info">
                <h3>{props.price} ₽</h3>
                <Link to={`/product/${props.productId}`}>{props.title}</Link>
                <StarsComponent stars={props.userStars}/> 
            </div>
        </div>
    ); 
}

export default ProductCardComponent; 