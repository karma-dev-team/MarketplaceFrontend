import "./Wallet.css"
import ContentLine from "src/Components/ContentLine/ContentLine";
import wallet from "@images/wallet.png"
import cashout from "@images/cahsout.png"
/*import reply from "@images/reply.png"*/

const WalletPage: React.FC = () => {  
    return (
        <div className="root-wallet">
            <div className="korobka123">
                <h2>Кошелёк</h2>
                <ContentLine/>
                <div className="walletactions">
                    <div className="wallet">
                        <div className="img123">
                            <img src={wallet} alt="wallet icon"/>
                        </div>
                        <p className="info1">Балланс</p>
                        <p className="userballance">0 ₽</p>
                    </div>
                    <div className="cashout">
                        <div className="img123">
                            <img src={cashout} alt="cahsout icon" />
                        </div>
                        <p className="info">Вывести <br /> средства</p>
                    </div>
                    <div className="deposit">
                        <div className="img123">
                            <img src={wallet} alt="deposit icon" />
                        </div>
                        <p className="info">Пополнить</p>
                    </div>
                </div>
                <div></div>
                <p className="text123">У вас не было транзакции связанные с кошёлком</p>
            </div>
        </div>
    ); 
}

export default WalletPage; 