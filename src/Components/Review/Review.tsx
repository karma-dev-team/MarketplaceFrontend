import { ProductEntity, ReviewEntity } from "restclient"
import "./Review.css"
import { asFileUrl } from "src/Gateway/Config"
import StarsComponent from "../Stars/Stars"
import { format } from "date-fns"
import { ru } from "date-fns/locale"

type props = { 
    review: ReviewEntity, 
    userStars: number, 
    product?: ProductEntity | undefined, 
}

const ReviewComponent: React.FC<props> = (props: props) => { 
    const review = props.review; 
    const product = props.product; 
    
    return ( 
        <div className="root-review">
            <div className="review-header">
                <div className="review-header-user">
                    <div className="review-header-left">
                        <div className="header-profile-image-container">
                            <img src={asFileUrl(review.createdBy.image?.id)} className="header-profile-image" alt="ds"/>
                        </div>
                        <div className="review-header-user-info">
                            <p>{review.createdBy.userName}</p>
                            <StarsComponent stars={props.userStars}/>
                        </div>
                    </div>
                    <div className="review-header-right">
                        {format(review.createdAt || "", 'eeee в HH:mm', { locale: ru })}
                    </div>
                </div>
                <div className="review-content">
                    {review.text || ""}
                </div>
                {product !== undefined ? 
                    <div className="review-product">
                        <div className="review-product-image-container">
                            <img src={product.images.length > 0 ? asFileUrl(product.images[0].id) : ""} className="review-product-image" alt="ds"/>
                        </div>
                        <div className="review-product-info">
                            <p className="review-prodcut-price">{product.currentPrice.amount} ₽</p>
                            <p className="review-prodcut-name">{product.name}</p>
                        </div>
                    </div>
                : null }
            </div>
        </div>
    )
}

export default ReviewComponent; 