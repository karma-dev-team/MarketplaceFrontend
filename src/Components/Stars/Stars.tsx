import { range } from "src/Utils/Range"
import starImage from "@images/star-image.svg"

type props = { stars: number, reviewsCount?: number | undefined}

const StarsComponent: React.FC<props> = (props: props) => { 
    return (
        <div className="root-stars" style={{display: "flex"}}>
            {range(0, 5).map((i) => { 
                return ( 
                    <div className="stars-star">
                        <img src={starImage} alt="" style={{fill: props.stars > i ? "#FFE500" : "FFFFFF"}}/>
                    </div>
                )
            })}
        </div>
    )
}

export default StarsComponent; 