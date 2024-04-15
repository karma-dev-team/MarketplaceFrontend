import "./Games.css" 
import data from "@testdata/Games.json"
import { Dispatch, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import NavigationMapComponent from "src/Components/NavigationMap/NavigationMap"
import SearchbarComponent from "src/Components/Search/Search"
import { NavbarCategories, NavbarProps } from "src/Utils/NavbarProps";

type Game = { name: string, logo: string, categories: string[], type: string }
type props = { type: "Application" | "Game", setCategory: Dispatch<NavbarCategories>}

const GamesPage: React.FC<props> = (props: props) => {  
    props.setCategory('Каталог игр')
    const [type, setType] = useState<"Application" | "Game">(props.type);
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState<string>("");
    const [games, setGames] = useState<Game[]>([]);
    const [gamesByFirstCharacters, setGamesByFirstCharacters] = useState<{ [name: string]: Game[] }>({});

    useEffect(() => {
        // Initialize games state
        const filteredGames = data.filter(value => value.type === type);
        setGames(filteredGames);

        // Initialize gamesByFirstCharacters object
        const gamesByFirstCharactersTemp: { [name: string]: Game[] } = {};
        filteredGames.forEach(value => {
        const gameNameFirstLetter = value.name[0];
        if (!gamesByFirstCharactersTemp[gameNameFirstLetter]) {
            gamesByFirstCharactersTemp[gameNameFirstLetter] = [];
        }
        gamesByFirstCharactersTemp[gameNameFirstLetter].push(value);
        });
        // Update gamesByFirstCharacters state
        setGamesByFirstCharacters(gamesByFirstCharactersTemp);
    }, [type]); 

    const handleSearch = (value: string) => {
        setSearchText(value);
    
        let filteredGames = data.filter(game => {
            return (
                (value === "" || game.name.toLowerCase().includes(value.toLowerCase())) &&
                game.type === type
            );
        });
        
        setGames(filteredGames);
    
        const gamesByFirstCharactersTemp: { [name: string]: Game[] } = {};
        filteredGames.forEach(value => {
        const gameNameFirstLetter = value.name[0];
        if (!gamesByFirstCharactersTemp[gameNameFirstLetter]) {
            gamesByFirstCharactersTemp[gameNameFirstLetter] = [];
        }
        gamesByFirstCharactersTemp[gameNameFirstLetter].push(value);
        });
        // Update gamesByFirstCharacters state
        setGamesByFirstCharacters(gamesByFirstCharactersTemp);
    }
    
    let characters = Object.keys(gamesByFirstCharacters).sort() 

    let navigationPath = new Map<string, string>(); 

    navigationPath.set("Главная", "/")
    navigationPath.set(type !== "Application" ? "Каталог игр" : "Каталог приложений", "/games")

    return (
        <div className="root-games">
            <NavigationMapComponent elements={navigationPath}/>
            <h1>{type !== "Application" ? "Каталог игр" : "Каталог приложений"} </h1>
            <div className="switch-buttons">
                <button onClick={() => {
                    setType("Game")
                    navigate("/games")
                    setSearchText("")
                }} className={`switch-button ${type === "Game" ? "active" : ""}`}>
                    Игры
                </button>
                <button onClick={() => { 
                    setType("Application")
                    navigate("/applications")
                    setSearchText("")
                }} className={`switch-button ${type === "Application" ? "active" : ""}`}> 
                    Приложения
                </button>
            </div>
            <SearchbarComponent searchText={searchText} onChange={handleSearch} placeholder="Введите название"/> 
            <div className="games-list">
                {characters.map((character) => { 
                    return ( 
                        <div className="games-group" key={character}>
                            <div className="games-group-header">
                                <h1 className="games-group-title">{character}</h1>
                            </div>
                            <div className="group-games">
                                {gamesByFirstCharacters[character].map((value) => { 
                                    return (
                                        <div className="group-game-one" key={Math.random()}>
                                            <div className="group-game-header" onClick={() => navigate(`/games/${value.name}`)}>
                                                <img src={value.logo} alt={value.name} width={48} height={48}/>
                                                <h1>{value.name}</h1>
                                            </div>
                                            <div className="group-game-categories">
                                                {value.categories.map((value) => { 
                                                    return ( 
                                                        <Link to={`/category/${value}`} className="game-category-element-text">{value}</Link>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    ); 
}

export default GamesPage; 