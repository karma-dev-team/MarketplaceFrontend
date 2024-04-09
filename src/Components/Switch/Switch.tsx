import { useState } from "react";
import { Dispatch } from "react";
import "./Switch.css";

type Props = { 
    turn: boolean, 
    onChange: Dispatch<boolean> 
};

const SwitchComponent: React.FC<Props> = (props) => { 
    // State to manage the background color
    const [backgroundColor, setBackgroundColor] = useState<string>(''); // Initial state can be your default color or transparent

    const handleSliderClick = () => {
        // Toggle the value when the slider is clicked
        props.onChange(!props.turn);
        
        // Toggle the background color based on the current state
        if (backgroundColor === 'transparent' || backgroundColor === '') {
            setBackgroundColor('#8FFF00'); // Change to your desired color
        } else {
            setBackgroundColor('transparent');
        }
    };

    return ( 
        <div className="root-switch" style={{ backgroundColor, transition: 'background-color 0.3s' }} onClick={handleSliderClick}>
            <div className={`switch ${props.turn ? 'on' : 'off'}`} >
                <div className="slider"></div>
            </div>
        </div>
    );
};

export default SwitchComponent;