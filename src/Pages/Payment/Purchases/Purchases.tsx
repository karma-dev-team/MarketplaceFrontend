import "./Purchases.css"
import data from "@testdata/Wallet.json"
import SelectorComponent, {OptionType} from "src/Components/Selector/Selector";
import { useState } from "react";
import { TransactionStatus, TransactonOperations } from "src/Schemas/Enums";
import ProductCard from "src/Components/ProductCard/ProductCard";
import testicon from "@images/testico123.png"
import testsmth from "@images/test123.png"



const PurchasesPage: React.FC = () => {  
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
        <div className="root-purchases">
            <div className="superpuperkorobka321">
                <h2 className="nazvanie228335">Покупки</h2>
                <div className="purchases-filter-selector">
                    <SelectorComponent options={transactionStatuses} width="auto" onChange={(value, action) => {
                        if (value === undefined || value === null) { return; }
                        let parsedStatus = value.value as keyof typeof TransactionStatus;
                        let status = TransactionStatus[parsedStatus]

                        setStatusFilter(status)
                    }}/>
                </div>
                <div className="purchases">
                    {transactions === undefined ? 
                        <p className="superpupertext228">У вас не было транзакции связанные с покупками</p>
                    : 
                    <div className="purchases-list">
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
                                <div className="purchases-container">
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

export default PurchasesPage; 