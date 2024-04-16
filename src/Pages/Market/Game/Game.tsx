import "./Game.css"
import ProductCard from "src/Components/ProductCard/ProductCard";
import gamelogo from "@images/gamelogo1.png"
import { NavbarProps } from "src/Utils/NavbarProps";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GameControllersApi, GameEntity, ProductControllersApi, ProductEntity } from "restclient";
import { ApiConfig, asFileUrl } from "src/Gateway/Config";

const GamePage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('Товары') 
    const navigate = useNavigate()

    const { id } = useParams()
    const gameId = id; 
    
    const [game, setGame] = useState<GameEntity>()
    const gameApi = new GameControllersApi(ApiConfig)
    const [products, setProducts] = useState<ProductEntity[]>([])

    useEffect(() => { 
        (async () => {
            const productApi = new ProductControllersApi(ApiConfig)
            
            try { 
                let gameResponse = await gameApi.apiGameGameIdGet(gameId || "")
                setGame(gameResponse.data)

                let products = await productApi.apiProductGet(undefined, undefined, gameResponse.data.id)
                setProducts(products.data)
            } catch (e) { 
                // then this game does not exists
                console.error(e)
                navigate("/")
            }
        })()
    }, [navigate, gameId])

    return (
        <div className="root-game">
            <div className="nedonavbar">
                <p className="nav-info1">Главная </p>
                <div><p className="nav-dot">•</p></div>
                <p className="nav-info1">Игры</p>
                <p className="nav-dot">•</p>
                <p className="nav-info2">Garry's mod</p>
            </div>
            <div className="gradient" style={{backgroundImage: `url(${asFileUrl(game?.banner?.id)})`}}>
            </div>
                <div className="head-info123">
                    <img src={gamelogo} alt="gamelogo" />
                    <p className="game-test123">Garry's mod is a greatest game</p>
                    <div className="categorykeys">
                        {game?.categories?.map((value) => {
                            return <div className="key" onClick={() => navigate(`/category/${value.id}`)}>{value.name}</div>
                        })}
                    </div>
                    <div className="addkey" onClick={() => navigate("/contact")}>+ Предложить категорию</div>
                    <p className="game-info2">{game?.description}</p>
                </div>

            
            <div className="main-content123">
                <div className="shop123">🛒 Товары</div>
                <div className="products123">
                    {products.map((value) => {
                        return <ProductCard 
                            title={value.name}
                            category={value.category.name}
                            price={value.basePrice.amount}
                            game={value.category.name}
                            gameImage={value.game.logo.id}
                            productId={value.id}
                            image={value.images[0].id}
                            userStars={4} // Исправить
                        />
                    })}
                </div>
            </div>
        </div>
    ); 
}

export default GamePage; 