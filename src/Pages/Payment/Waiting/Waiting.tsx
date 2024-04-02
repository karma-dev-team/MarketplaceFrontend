import "./Waiting.css"

import cartIcon from "@images/image32.png"

const WaitingPage: React.FC = () => {  
    return (
        <div className="root-waiting">
            <div className="container123">
                <img src={cartIcon} alt="shopping cart" width={68} height={68} />
                <br />
                <p className="text-123">Пожалуйста, подождите...</p>
                <p className="text-321">Не перезагружайте страницу. Покупка обрабатывается</p>
            </div>
        </div>
    ); 
}

export default WaitingPage; 