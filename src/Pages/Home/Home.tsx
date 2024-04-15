import { useEffect, useState } from "react";
import "./Home.css"
import data from "@testdata/Home.json"
import arrowIcon from "@images/Arrow.svg"
import ProductCardComponent from "src/Components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { NavbarProps } from "src/Utils/NavbarProps";
import { GameControllersApi, GameEntity, ProductControllersApi, ProductEntity } from "restclient";
import { ApiConfig, asFileUrl } from "src/Gateway/Config";

const HomePage: React.FC<NavbarProps> = (props: NavbarProps) => {  
    props.setCategory('Товары')
    const [games, setGames] = useState<GameEntity[]>([]); 
    const [applications, setApplications] = useState<GameEntity[]>([])
    const [gameCounter, setGameCounter] = useState<number>(games.length); 
    const [applicationCounter, setApplicationCounter] = useState<number>(applications.length); 
    const [products, setProducts] = useState<ProductEntity[]>([]); 
    const navigate = useNavigate()

    useEffect(() => { 
        (async () => {
            const productApi = new ProductControllersApi(ApiConfig)
            const gamesApi = new GameControllersApi(ApiConfig)

            try { 
                var gameCountResponse = await gamesApi.apiGameCountGet('Game')
                setGameCounter(gameCountResponse.data)
                var appCountResponse = await gamesApi.apiGameCountGet("Application")
                setApplicationCounter(appCountResponse.data)

                var gamesResponse = await gamesApi.apiGameGet("Game")
                setGames(gamesResponse.data)

                var appsResponse = await gamesApi.apiGameGet("Applicaiton")
                setApplications(appsResponse.data)

                var response = await productApi.apiProductGet();
                setProducts(response.data)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [])

    return (
        <div className="root-home">
            <div className="home-games">
                <div className="home-grid games-container">
                    <div className="home-grid-header">
                        <h2>🎮 Игры</h2>
                        <div className="home-grid-header-counter" onClick={() => navigate("/games")}>
                            <p>{gameCounter}</p>
                            <img src={arrowIcon} alt="Посмотреть больше"/>
                        </div>
                    </div>
                    <div className="home-grid-content">
                        {games.map((value) => { 
                            return ( 
                                <div className="home-game-container" onClick={() => navigate(`/games/${value.name}`)}>
                                    <img src={asFileUrl(value.logo.id)} alt="" className="game-image"/>
                                    <p>{value.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="home-grid applications-container">
                    <div className="home-grid-header">
                        <h2>📁 Приложения</h2>
                        <div className="home-grid-header-counter" onClick={() => navigate("/applications")}>
                            <p>{applicationCounter}</p>
                            <img src={arrowIcon} alt="Посмотреть больше"/>
                        </div>
                    </div>
                    <div className="home-grid-content">
                        {applications.map((value) => { 
                            return ( 
                                <div className="home-application-container"  onClick={() => navigate(`/games/${value.name}`)}>
                                    <img src={asFileUrl(value.logo.id)} alt="" className="game-image"/>
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
                    {products.map((value) => { 
                        return ( 
                            <ProductCardComponent 
                                title={value.name}
                                category={value.category.name}
                                price={value.basePrice.amount}
                                game={value.category.name}
                                gameImage={value.game.logo.id}
                                productId={value.id}
                                image={value.images[0].id}
                                userStars={4} // Исправить
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    ); 
}

export default HomePage; 