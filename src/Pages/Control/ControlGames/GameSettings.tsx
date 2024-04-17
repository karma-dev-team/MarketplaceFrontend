import { NavbarProps } from "src/Utils/NavbarProps";
import "./GameSettings.css"
import { StaffCategories } from "src/Schemas/Enums";
import { useState } from "react";
import StaffControlsComponent from "src/Components/StaffControls/StaffControls";

const GameSettingsPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    
    props.setCategory("Управление")
    const [category, setCategory] = useState<StaffCategories>('GAME')
    
    return (
        <div className="root-gamesettings">
            
            <StaffControlsComponent setCategory={setCategory} currentCategory={category} user={props.user}/>
        </div>
    )
}

export default GameSettingsPage; 