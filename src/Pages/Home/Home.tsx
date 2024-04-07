import { useState } from "react";
import "./Home.css"
import data from "@testdata/Home.json"
import arrowIcon from "@images/Arrow.svg"
import ProductCardComponent from "src/Components/ProductCard/ProductCard";

const HomePage: React.FC = () => {  
    const [games, setGames] = useState(data.games.filter((x => x.type === "GAME"))); 
    const [applications, setApplications] = useState(data.games.filter((x => x.type === "APPLICATION")))
    const [gameCounter, setGameCounter] = useState<number>(games.length); 
    const [applicationCounter, setApplicationCounter] = useState<number>(applications.length); 

    return (
        <div className="root-home">
            <div className="home-games">
                <div className="home-grid games-container">
                    <div className="home-grid-header">
                        <h2>🎮 Игры</h2>
                        <div className="home-grid-header-counter">
                            <p>{gameCounter}</p>
                            <img src={arrowIcon} alt="Посмотреть больше"/>
                        </div>
                    </div>
                    <div className="home-grid-content">
                        {games.map((value) => { 
                            return ( 
                                <div className="home-game-container">
                                    <img src={value.image} alt="" className="game-image"/>
                                    <p>{value.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="home-grid applications-container">
                    <div className="home-grid-header">
                        <h2>📁 Приложения</h2>
                        <div className="home-grid-header-counter">
                            <p>{applicationCounter}</p>
                            <img src={arrowIcon} alt="Посмотреть больше"/>
                        </div>
                    </div>
                    <div className="home-grid-content">
                        {applications.map((value) => { 
                            return ( 
                                <div className="home-application-container">
                                    <img src={value.image} alt="" className="game-image"/>
                                    <p>{value.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="premium-products">
                <div className="premium-products-header">
                    <h2>🚀 Премиум товары</h2>
                </div>
                <div className="premium-products-content">
                    {data.products.map((value) => { 
                        return ( 
                            <ProductCardComponent 
                                title={value.title}
                                category={value.category}
                                price={value.price}
                                game={value.game}
                                gameImage={value.gameImage}
                                productId={value.id}
                                image={value.image}
                                userStars={value.stars}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    ); 
}

export default HomePage; 