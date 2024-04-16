import { Dispatch } from "react"
import { UserEntity, UserEntityRoleEnum } from "restclient"
import { StaffCategories } from "src/Schemas/Enums"
import "./StaffControls.css"
import { useNavigate } from "react-router-dom"

type props = { 
    currentCategory: StaffCategories,
    setCategory: Dispatch<StaffCategories>, 
    user?: UserEntity
}

const StaffControlsComponent: React.FC<props> = (props: props) => {    
    const navigate = useNavigate() 
    let staffControls: Map<StaffCategories, [string, UserEntityRoleEnum, string]> = new Map<StaffCategories, [string, UserEntityRoleEnum, string]>()

    staffControls.set("APPROVED", ["Товары для  одобрения", UserEntityRoleEnum.Moderator, "/control/approved"])
    staffControls.set("ISSUES", ["Проблемы с покупкой", UserEntityRoleEnum.Moderator, "/control/issues"])
    staffControls.set("EVENTS", ["События пользователей", UserEntityRoleEnum.Moderator, "/control/events"])
    staffControls.set("SUSTRANSACTIONS", ["Подозрительные транзакции", UserEntityRoleEnum.Moderator, "/control/sus"])
    staffControls.set("GAME", ["Игры", UserEntityRoleEnum.Owner, "/control/games"])
    staffControls.set("ANALYTICS", ["Аналитика", UserEntityRoleEnum.Admin, "/control/analytics"])    
    
    return ( 
        <div className="root-staffcontrols">
            {Array.from(staffControls).map((value) => { 
                if (props.user === undefined) { 
                    return; 
                }
                    // if (props.user.role.toLowerCase() !== value[1][1].toLowerCase()) { 
                    //     navigate("/")
                    // }

                return ( 
                    <div 
                        className={`staff-control-element ${value[0] === props.currentCategory ? "active" : ""}`} 
                        onClick={() => { 
                            navigate(value[1][2])
                            props.setCategory(value[0])
                        }}
                    >
                        {value[1][0]}
                    </div>
                )
            })}
        </div>
    )
}

export default StaffControlsComponent; 