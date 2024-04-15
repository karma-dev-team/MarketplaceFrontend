import "./Game.css"
import ProductCard from "src/Components/ProductCard/ProductCard";
import gamelogo from "@images/gamelogo1.png"
import testicon from "@images/testico123.png"
import testsmth from "@images/test123.png"
import { NavbarProps } from "src/Utils/NavbarProps";

const GamePage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('Товары') 
    return (
        <div className="root-game">
            <div className="nedonavbar">
                <p className="nav-info1">Главная </p>
                <div><p className="nav-dot">•</p></div>
                <p className="nav-info1">Игры</p>
                <p className="nav-dot">•</p>
                <p className="nav-info2">Garry's mod</p>
            </div>
            <div className="gradient">
                <div className="head-info123">
                    <img src={gamelogo} alt="gamelogo" />
                    <p className="game-test123">Garry's mod is a greatest game</p>
                    <div className="categorykeys">
                        <div className="key">Ключи</div>
                        <div className="key">Ключи</div>
                        <div className="key">Ключи</div>
                        <div className="key">Ключи</div>
                        <div className="key">Ключи</div>
                        <div className="key">Ключи</div>
                        <div className="key">Ключи</div>
                        <div className="key">Ключи</div>
                    </div>
                    <div className="addkey">+ Предложить категорию</div>
                    <p className="game-info2">Ага, еще скажи что там нету рп серверов без доната. И режимов которые имеют игроков кроме рпшок блять. <br /> Ну короче хорошая игра, можно миллион модов накатить, майн короч. Жаль не бесконечная</p>
                </div>
            </div>
            
            <div className="main-content123">
                <div className="shop123">🛒 Товары</div>
                <div className="products123">
                    <ProductCard 
                        productId = "string" 
                        title = "Ключ"
                        image = {testsmth}
                        gameImage = {testicon}
                        userStars = {4}
                        price = {69}
                        game = "Garry's Mod"
                        category = "Ключи"
                    />
                    <ProductCard 
                        productId = "string" 
                        title = "Ключ"
                        image = {testsmth}
                        gameImage = {testicon}
                        userStars = {4}
                        price = {69}
                        game = "Garry's Mod"
                        category = "Ключи"
                    />
                    <ProductCard 
                        productId = "string" 
                        title = "Ключ"
                        image = {testsmth}
                        gameImage = {testicon}
                        userStars = {4}
                        price = {69}
                        game = "Garry's Mod"
                        category = "Ключи"
                    />
                </div>
            </div>
        </div>
    ); 
}

export default GamePage; 