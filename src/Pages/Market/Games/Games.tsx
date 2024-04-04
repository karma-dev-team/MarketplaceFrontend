import ContentLine from "src/Components/ContentLine/ContentLine"
import "./Games.css" 
import data from "@testdata/Games.json"
import NavigationMapComponent from "src/Components/NavigationMap/NavigationMap"

type Game = { name: string, logo: string, categories: string[] }

const GamesPage: React.FC = () => {  
    let gamesByFirstCharacters: { [name: string] : Game[]; } = {}

    data.forEach((value) => { 
        let gameNameFirstLetter = value.name[0]; 
        
        if (!gamesByFirstCharacters[gameNameFirstLetter]) { 
            gamesByFirstCharacters[gameNameFirstLetter] = []
        }

        gamesByFirstCharacters[gameNameFirstLetter].push(value)
    }) 

    let characters = Object.keys(gamesByFirstCharacters).sort() 

    let navigationPath = new Map<string, string>(); 

    navigationPath.set("Главная", "/")
    navigationPath.set("Каталог игр", "/games")

    return (
        <div className="root-games">
            <NavigationMapComponent elements={navigationPath}/>
            <h1>Каталог игр</h1>
            <div className="games-list">
                {characters.map((character) => { 
                    return ( 
                        <div className="games-group">
                            <div className="games-group-header">
                                <h1>{character}</h1>
                                <ContentLine />
                            </div>
                            <div className="group-games">
                                {gamesByFirstCharacters[character].map((value) => { 
                                    return (
                                        <div className="group-game-one">
                                            <div className="group-game-header">
                                                <img src={value.logo} alt={value.name} />
                                                <p>{value.name}</p>
                                            </div>
                                            <div className="group-game-categories">
                                                {value.categories.map((value) => { 
                                                    return ( 
                                                        <p className="game-category-element">{value} •</p>
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