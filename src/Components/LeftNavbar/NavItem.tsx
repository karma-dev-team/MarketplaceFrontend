import { Dispatch, ReactNode } from "react"

type props = { isActive: boolean, setIsActive: Dispatch<boolean>, image: string }

const NavItemComponent: React.FC<props> = (props: props) => { 
    return ( 
        <div className={"root-left-navitem" + props.isActive ? " current-category" : ""}>
              
        </div>
    )
}