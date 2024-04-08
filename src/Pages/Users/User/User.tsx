import { calculateSum } from "src/Utils/Math";
import "./User.css"
import data from "@testdata/User.json"
import StarsComponent from "src/Components/Stars/Stars";
import ContentLine from "src/Components/ContentLine/ContentLine";
import { RoleConversion } from "src/Utils/Conversions";

const UserPage: React.FC = () => {  
    const products = data.products; 
    const user = data; 

    const reviewsRating: number[] = []
    data.reviews.forEach(element => {
        reviewsRating.push(element.rate)
    });

    const avarageRating = data.reviews.length / calculateSum(reviewsRating);
    const userRating = Math.ceil(avarageRating)

    return (
        <div className="root-user">
            <div className="root-user-banner">
                <img src={user.banner} alt="" className="banner-image"/>
            </div>

            <div className="user-container">
                <div className="user-info">
                    <div className="user-avatar">
                        <div className="user-avatar-container">
                            {user.avatar === undefined 
                                ? <div className="user-avatar-none"></div>
                                : <img className="user-avatar-image" src={user.avatar} alt={user.name}/>}
                        </div>
                    </div>
                    <div className="user-main-info">
                        <h1>{user.name}</h1>
                        <div className="user-online-indicator" style={{color: user.isOnline ? "rgb(139, 195, 74)" : "#A8A8A8"}}>
                            {user.isOnline ? "Онлайн" : "Не в сети"}
                        </div>
                    </div>
                    <div className="user-meta-info">
                        <div className="user-purchases-info user-info-field">
                            <div className="user-purchases user-wallet-info">
                                {user.purchases}
                                <span>Продаж</span>
                            </div>
                            <div className="vertical-border"></div>
                            <div className="user-sells user-wallet-info">
                                {user.sells}
                                <span>Покупок</span>
                            </div>
                        </div>
                        <div className="user-info-field user-stars-field">
                            <p>Рейтинг</p>
                            <div className="user-stars-container">
                                <div className="user-stars">
                                    <h1>{userRating}</h1>
                                    <StarsComponent stars={userRating} width={24} height={24}/>
                                </div>
                                <div className="user-reviews-info">
                                    {user.reviews.length} {user.reviews.length > 1 ? "Отзывов" : "Отзыв"}
                                </div>
                            </div>
                        </div>
                        <div className="user-info-field user-description">
                            <h4 className="user-description-header">
                                О пользвателе
                            </h4>
                            <div className="user-description-content">{user.description}</div>
                            <ContentLine color="rgb(43, 45, 60)" />
                            <h4 className="user-description-header">
                                Роль
                            </h4>
                            <div className="user-description-content">{RoleConversion.get(user.role)}</div>
                            <ContentLine color="#303139"/>
                            <h4 className="user-description-header">
                                Регистрация
                            </h4>
                            <div className="user-description-content">{user.createdAt}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default UserPage; 