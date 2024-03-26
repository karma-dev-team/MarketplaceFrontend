import ArrowIcon from "../../Static/Images/arrow-icon.png"
import { range } from "../../Utils/Range"
import "./Pagination.css"

type props = {
    currentPage: number,
    setCurrentPage: React.Dispatch<number>,
    pageCounter: number 
}

const PaginationNavigation: React.FC<props> = (props: props) => { 
    const counter = range(1, props.pageCounter)

    return ( 
        <ul className="pagination-list">
            <li>
                <div className="left-arrow">
                    <button className="arrow-button" onClick={() => props.setCurrentPage(props.currentPage - 1)}>
                        <img src={ArrowIcon } alt="" width={24} height={24} />
                    </button>
                </div>
            </li>
            {counter.map((value) => {
                return (
                    <li className="page">{value}</li>
                )
            })}
            <li>
                <div className="right-arrow">
                    <button className="arrow-button" onClick={() => props.setCurrentPage(props.currentPage + 1)}>
                        <img src={ArrowIcon } alt="" width={24} height={24}/>
                    </button>
                </div>
            </li>
        </ul>
    )
}

export default PaginationNavigation
