import { NavbarProps } from "src/Utils/NavbarProps";
import "./ControlGames.css"
import { StaffCategories } from "src/Schemas/Enums";
import { useEffect, useState } from "react";
import StaffControlsComponent from "src/Components/StaffControls/StaffControls";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { AuthKey } from "src/Gateway/Consts";
import { GameEntity } from "restclient";
import SearchbarComponent from "src/Components/Search/Search";
import ContentLine from "src/Components/ContentLine/ContentLine";

const ControlGamesPage: React.FC<NavbarProps> = (props: NavbarProps) => {  
    
    props.setCategory("Управление")
    const [category, setCategory] = useState<StaffCategories>('GAME')
    const navigate = useNavigate()
    const [cookies] = useCookies([AuthKey])
    const [games, setGames] = useState<GameEntity[]>([])
    const [searchText, setSearchText] = useState<string>()

    useEffect(() => { 
        if (cookies.Authorization === undefined || cookies.Authorization === "") { 
            navigate("/login")
        }
    }, [cookies, navigate])

    useEffect(() => {
        
    })

    return (
        <div className="root-controlgames">
            <h1>Управление сайтом</h1>
            <ContentLine color="#4F5A71"/>
            <div className="controlgames-container">
            <div className="controlgames-content">
                <SearchbarComponent searchText={searchText || ''} onChange={() => null} onSubmit={(v) => setSearchText(v)} placeholder="Введите название..."/>

            </div>
            <StaffControlsComponent setCategory={setCategory} currentCategory={category} user={props.user}/>
            </div>
        </div>
    ); 
}

export default ControlGamesPage; 