import "./Sales.css"
import SelectorComponent from "src/Components/Selector/Selector";
import { useEffect, useState } from "react";
import ProductCard from "src/Components/ProductCard/ProductCard";
import { OptionType } from "src/Schemas/Option";
import { NavbarProps } from "src/Utils/NavbarProps";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { AuthKey } from "src/Gateway/Consts";
import { PurchaseControllersApi, PurchaseEntity, TransactionEntityOperationEnum, TransactionEntityStatusEnum } from "restclient";
import { ApiConfig } from "src/Gateway/Config";


const SalesPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('Продажи') 
    
    let [purchases, setPurchases] = useState<PurchaseEntity[]>([]); 
    const [statusFilter, setStatusFilter] = useState<TransactionEntityStatusEnum>()
    const [operationFilter, setOperationFilter] = useState<TransactionEntityOperationEnum>()
    const [cookies] = useCookies([AuthKey])
    const navigate = useNavigate()
    const purchaseApi = new PurchaseControllersApi(ApiConfig)

    const transactionStatuses: OptionType[] = [
        {
          label: "Все",
          value: "",
        },
        {
          label: "Не оплачен",
          value: TransactionEntityStatusEnum.Failed,
        },
        {
            label: "Оплачено",
            value: TransactionEntityStatusEnum.Confirmed,
        },
        {
          label: "В работе",
          value: TransactionEntityStatusEnum.Pending,
        },
        {
          label: "Возврат",
          value: TransactionEntityStatusEnum.RolledBack,
        },
        {
          label: "Истекшие",
          value: TransactionEntityStatusEnum.Expired,
        },
    ];

    useEffect(() => { 
        if (cookies.Authorization === undefined || cookies.Authorization === "") { 
            navigate("/login")
        }
    }, [cookies])

    useEffect(() => { 
        (async () => { 
            try { 
                let purchaseResponse = await purchaseApi.apiPurchaseMeGet(
                    undefined, undefined, operationFilter, statusFilter, undefined, undefined, undefined, props.user?.id)
                setPurchases(purchaseResponse.data)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [statusFilter, operationFilter])

    return (
        <div className="root-sales">
            <div className="superpuperkorobka321228">
                <h2 className="nazvanie228">Продажи</h2>
                <div className="sales-filter-selector">
                    <SelectorComponent options={transactionStatuses} width="auto" onChange={(value, action) => {
                        if (value === undefined || value === null) { return; }
                        let parsedStatus = value.value as keyof typeof TransactionEntityStatusEnum;
                        let status = TransactionEntityStatusEnum[parsedStatus]

                        setStatusFilter(status)
                    }}/>
                </div>
                <div className="sales">
                    {purchases === undefined || purchases === null || purchases.length === 0 ? 
                        <p className="superubertext228">У вас не было транзакции связанные с продажами</p>
                    : 
                    <div className="sales-list">
                        {purchases.map((purchase) => { 
                            if (operationFilter !== undefined) { 
                                if (operationFilter?.toLowerCase() !== purchase.transaction.operation.toLowerCase()) { 
                                    return null; 
                                }
                            } 
                            
                            if (statusFilter !== undefined) { 
                                if (statusFilter?.toLowerCase() !== purchase.transaction.status.toLowerCase()) { 
                                    return null; 
                                }
                            }
                            
                            const value = purchase.product; 
                            return ( 
                                <div className="sales-container">
                                    <ProductCard 
                                        product={value}
                                        userStars={4} // Исправить
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