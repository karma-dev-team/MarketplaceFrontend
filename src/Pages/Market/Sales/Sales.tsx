import "./Sales.css"
import data from "@testdata/Wallet.json"
import SelectorComponent, {OptionType} from "src/Components/Selector/Selector";
import { useState } from "react";
import { TransactionStatus, TransactonOperations } from "src/Utils/Enums";
import ProductCard from "src/Components/ProductCard/ProductCard";
import testicon from "@images/testico123.png"
import testsmth from "@images/test123.png"



const SalesPage: React.FC = () => {  
    let transactions = data.transactions; 
    const [statusFilter, setStatusFilter] = useState<TransactionStatus>()
    const [operationFilter, setOperationFilter] = useState<TransactonOperations>()

    const transactionStatuses: OptionType[] = [
        {
          label: "Все",
          value: "",
        },
        {
          label: "Не оплачен",
          value: TransactionStatus.Failed,
        },
        {
            label: "Оплачено",
            value: TransactionStatus.Confirmed,
        },
        {
          label: "В работе",
          value: TransactionStatus.Pending,
        },
        {
          label: "Возврат",
          value: TransactionStatus.RolledBack,
        },
        {
          label: "Истекшие",
          value: TransactionStatus.Expired,
        },
    ];

    return (
        <div className="root-sales">
            <div className="superpuperkorobka321228">
                <h2 className="nazvanie228">Продажи</h2>
                <div className="sales-filter-selector">
                    <SelectorComponent options={transactionStatuses} width="auto" onChange={(value, action) => {
                        if (value === undefined || value === null) { return; }
                        let parsedStatus = value.value as keyof typeof TransactionStatus;
                        let status = TransactionStatus[parsedStatus]

                        setStatusFilter(status)
                    }}/>
                </div>
                <div className="sales">
                    {transactions === undefined ? 
                        <p className="superubertext228">У вас не было транзакции связанные с продажами</p>
                    : 
                    <div className="sales-list">
                        {transactions.map((value) => { 
                            if (operationFilter !== undefined) { 
                                if (operationFilter?.toLowerCase() !== value.operation.toLowerCase()) { 
                                    return null; 
                                }
                            } 
                            
                            if (statusFilter !== undefined) { 
                                if (statusFilter?.toLowerCase() !== value.status.toLowerCase()) { 
                                    return null; 
                                }
                            }

                            return ( 
                                <div className="sales-container">
                                    <ProductCard 
                                        productId = "string" 
                                        title = "Ключ"
                                        image = {testsmth}
                                        gameImage = {testicon}
                                        userStars = {4}
                                        price = {69}
                                        game = "Garry's Mod"
                                        category = "Ключи"
                                    />
                                    <ProductCard 
                                        productId = "string" 
                                        title = "Ключ"
                                        image = {testsmth}
                                        gameImage = {testicon}
                                        userStars = {4}
                                        price = {69}
                                        game = "Garry's Mod"
                                        category = "Ключи"
                                    />
                                    <ProductCard 
                                        productId = "string" 
                                        title = "Ключ"
                                        image = {testsmth}
                                        gameImage = {testicon}
                                        userStars = {4}
                                        price = {69}
                                        game = "Garry's Mod"
                                        category = "Ключи"
                                    />
                                </div>
                            )
                        })}    
                    </div>}
                </div>
            </div>
        </div>
    );  
}

export default SalesPage; 