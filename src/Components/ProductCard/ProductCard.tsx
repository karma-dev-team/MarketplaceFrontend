import { asFileUrl } from "src/Gateway/Config";
import "./ProductCard.css"
import StarsComponent from "../Stars/Stars";
import { Link, useNavigate } from "react-router-dom";
import { ProductEntity } from "restclient";

type props = {
    product: ProductEntity, 
    userStars: number, 
}

const ProductCardComponent: React.FC<props> = (props: props) => {  
    const navigate = useNavigate()
    const product = props.product; 

    return (
        <div className="root-productcard" >
            <div className="productcard-header">
                <img src={asFileUrl(product.game.logo?.id)} alt="gameimage" className="productcard-gameimage" onClick={() => navigate(`/games/${product.game.id}`)}/>
                <div className="productcard-header-text">
                    <Link to={`/games/${product.game.id}`}><h4 className="productcard-game-link">{product.game.name}</h4></Link>
                    <Link to={`/category/${product.category.id}`}>{product.category.name}</Link>
                </div>
            </div>
            <div className="productcard-image-container" onClick={() => navigate(`/product/${product.id}`)}>
                <img src={product.images.length > 0 ? asFileUrl(product.images[0].id) : ""} alt={product.name} className="productcard-image"/>
            </div>
            <div className="productcard-info">
                <h3>{product.currentPrice.amount} ₽</h3>
                <Link to={`/product/${product.id}`}>{product.name}</Link>
                <StarsComponent stars={4}/>  
            </div>
        </div>
    ); 
}

export default ProductCardComponent; 