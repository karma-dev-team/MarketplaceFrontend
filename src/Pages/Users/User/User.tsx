import "./User.css"
import StarsComponent from "src/Components/Stars/Stars";
import ContentLine from "src/Components/ContentLine/ContentLine";
import { RoleConversion } from "src/Utils/Conversions";
import { useEffect, useState } from "react";
import UserOptionsIcon from "src/Components/Icons/UserOptions";
import ProductCardComponent from "src/Components/ProductCard/ProductCard";
import SearchbarComponent from "src/Components/Search/Search";
import { NavbarProps } from "src/Utils/NavbarProps";
import { AnalyticsApi, ProductControllersApi, ProductEntity, PurchaseControllersApi, PurchaseEntity, ReviewControllersApi, ReviewEntity, UserAnalyticsSchema, UserControllersApi, UserEntity } from "restclient";
import { ApiConfig, asFileUrl } from "src/Gateway/Config";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { useNavigate, useParams } from "react-router-dom";

type userPageStatuses = "Products" | "Reviews"

const UserPage: React.FC<NavbarProps> = (props: NavbarProps) => {
    props.setCategory('')  
    const { id } = useParams()
    const userId = id || ""; 
    const navigate = useNavigate()
    const [products, setProducts] = useState<ProductEntity[]>([]); 
    const [reviews, setReviews] = useState<ReviewEntity[]>([]) 
    const [user, setUser] = useState<UserEntity>(); 
    const [analytics, setAnalytics] = useState<UserAnalyticsSchema>()
    const [currentState, setCurrentState] = useState<userPageStatuses>('Products'); 
    const [searchText, setSearchText] = useState<string>('')
    const [purchases, setPurchases] = useState<PurchaseEntity[]>([])

    useEffect(() => { 
        (async () => { 
            const reviewsApi = new ReviewControllersApi(ApiConfig)
            const userApi = new UserControllersApi(ApiConfig)
            const analyticsApi = new AnalyticsApi(ApiConfig)
            const purchaseApi = new PurchaseControllersApi(ApiConfig)

            try { 
                let reviewResponse = await reviewsApi.apiReviewUserUserIdGet(userId)
                setReviews(reviewResponse.data)
                let userResponse = await userApi.apiUserUserIdGet(userId)
                setUser(userResponse.data)
                let analyticsResponse = await analyticsApi.apiAnalyticsUserUserIdAnalyticsGet(userId)
                setAnalytics(analyticsResponse.data)
                let purchasesResponse = await purchaseApi.apiPurchaseMeGet(
                    undefined, undefined, undefined, undefined, undefined, undefined, userId)
                setPurchases(purchasesResponse.data)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [userId, navigate])

    useEffect(() => { 
        (async () => {
            const productApi = new ProductControllersApi(ApiConfig)

            try { 
                let productResponse = await productApi.apiProductGet(
                    searchText, undefined, undefined, undefined, userId)
                setProducts(productResponse.data)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [searchText, userId])

    return (
        <div className="root-user">
            <div className="root-user-banner">
                <img src={asFileUrl(user?.image?.id)} alt="" className="banner-image"/>
            </div>

            <div className="user-container">
                <div className="user-info">
                    <div className="user-avatar">
                        <div className="user-avatar-container">
                            {user?.image === undefined 
                                ? <div className="user-avatar-none"></div>
                                : <img className="user-avatar-image" src={asFileUrl(user?.image.id || "")} alt={user?.image.fileName}/>}
                        </div>
                    </div>
                    <div className="user-main-info">
                        <h1>{user?.userName}</h1>
                        <div className="user-online-indicator" style={{color: user?.isOnline ? "rgb(139, 195, 74)" : "#A8A8A8"}}>
                            {user?.isOnline ? "Онлайн" : "Не в сети"}
                        </div>
                    </div>
                    <div className="user-meta-info">
                        <div className="user-purchases-info user-info-field">
                            <div className="user-purchases user-wallet-info">
                                {purchases?.length}
                                <span>Продаж</span>
                            </div>
                            <div className="vertical-border"></div>
                            <div className="user-sells user-wallet-info">
                                {purchases?.length}
                                <span>Покупок</span>
                            </div>
                        </div>
                        <div className="user-info-field user-stars-field">
                            <p>Рейтинг</p>
                            <div className="user-stars-container">
                                <div className="user-stars">
                                    <h1>{analytics?.avarageRating || 0}</h1>
                                    <StarsComponent stars={analytics?.avarageRating || 0} width={24} height={24}/>
                                </div>
                                <div className="user-reviews-info">
                                    {analytics?.reviewsCount} {analytics?.reviewsCount || 0 > 1 ? "Отзывов" : "Отзыв"}
                                </div>
                            </div>
                        </div>
                        <div className="user-info-field user-description">
                            <h4 className="user-description-header">
                                О пользвателе
                            </h4>
                            <div className="user-description-content">{user?.description}</div>
                            <ContentLine color="rgb(43, 45, 60)" />
                            <h4 className="user-description-header">
                                Роль
                            </h4>
                            <div className="user-description-content">{RoleConversion.get(user?.role || "")}</div>
                            <ContentLine color="#303139"/>
                            <h4 className="user-description-header">
                                Регистрация
                            </h4>
                            <div className="user-description-content">{
                                user?.createdAt !== null || user?.createdAt !== undefined 
                                    ? format(user?.createdAt || Date.now(), "eeee", { locale: ru }) : null}</div>
                        </div>
                    </div>
                </div>
                <div className="user-content-container">
                    <div className="user-content-nav">
                        <nav>
                            <ul className="control-buttons-list">
                                <li className={`control-button user-products-button ${currentState === "Products" ? "current-control" : ""}`} onClick={() => setCurrentState("Products")}>
                                    Товары
                                    <span className="nav-counter">{products.length}</span>
                                </li>
                                <li className={`control-button user-reviews-button ${currentState === "Reviews" ? "current-control" : ""}`} onClick={() => setCurrentState("Reviews")}>
                                    Отзывы
                                    <span className="nav-counter">{reviews.length}</span>
                                </li>
                            </ul>
                        </nav>
                        <div className="user-actions">
                            <div className="user-options">
                                <button className="user-options-button">
                                    <UserOptionsIcon width={20} height={20}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="user-content">
                        {currentState === "Products"
                            ? <div>
                                <SearchbarComponent searchText={searchText} onChange={setSearchText} placeholder="Поиск продуктов ..."/>
                                <div className="user-products">
                                    {products.length > 0 ? products.map((value) => { 
                                        return ( 
                                            <ProductCardComponent 
                                                product={value}
                                                userStars={4} // Исправить
                                            />
                                        )
                                    }) : <p className="none-text">У пользвателя нету товаров</p> }
                                </div>
                            </div> 
                            : <div className="user-reviews-list">
                                {reviews.length > 0 ? reviews.map((value) => { 
                                    return ( 
                                        <div className="user-review">
                                            <img src={asFileUrl(value.createdBy.image?.id)} alt="" className="user-review-image"/>
                                            <div className="user-review-container">
                                                <div className="user-review-header">
                                                    <h4 className="user-review-createdby">{value.createdBy.userName}</h4>
                                                    <div className="user-review-stars">
                                                        <div className="review-stars-meta">
                                                            <span>Оценка: {value.rating}</span>
                                                        </div>
                                                        <StarsComponent stars={value.rating || 0} width={13} height={13}/>
                                                    </div>
                                                </div>
                                                <p className="user-review-product">{value.product.name}, {value.product.currentPrice?.amount || 0}</p>
                                                <p className="user-review-content">{value.text}</p>
                                                <p className="user-review-createdat">{
                                                            value.createdAt !== null || value.createdAt !== undefined 
                                                                ? format(value.createdAt || "", "eeee", { locale: ru }) : null}</p>
                                            </div>
                                        </div>
                                    )
                                }) : <p className="none-text">Не найдено отзывов</p> }
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default UserPage; 