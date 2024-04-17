import "./Purchases.css"
import SelectorComponent from "src/Components/Selector/Selector";
import { useEffect, useState } from "react";
import ProductCard from "src/Components/ProductCard/ProductCard";
import { OptionType } from "src/Schemas/Option";
import { NavbarProps } from "src/Utils/NavbarProps";
import { useCookies } from "react-cookie";
import { AuthKey } from "src/Gateway/Consts";
import { useNavigate } from "react-router-dom";
import { PurchaseControllersApi, PurchaseEntity, TransactionEntityOperationEnum, TransactionEntityStatusEnum } from "restclient";
import { ApiConfig } from "src/Gateway/Config";



const PurchasesPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('Покупки') 
    const [statusFilter, setStatusFilter] = useState<TransactionEntityStatusEnum>()
    const [operationFilter, setOperationFilter] = useState<TransactionEntityOperationEnum>()
    const [cookies] = useCookies([AuthKey])
    let [purchases, setPurchases] = useState<PurchaseEntity[]>([]); 
    const navigate = useNavigate()

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
    }, [cookies, navigate])

    useEffect(() => { 
        (async () => { 
            try { 
                const purchaseApi = new PurchaseControllersApi(ApiConfig)
                let purchaseResponse = await purchaseApi.apiPurchaseMeGet(undefined, undefined, operationFilter, statusFilter)
                setPurchases(purchaseResponse.data)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [statusFilter, operationFilter])

    return (
        <div className="root-purchases">
            <div className="superpuperkorobka321">
                <h2 className="nazvanie228335">Покупки</h2>
                <div className="purchases-filter-selector">
                    <SelectorComponent options={transactionStatuses} width="auto" onChange={(value, action) => {
                        if (value === undefined || value === null) { return; }
                        let parsedStatus = value.value as keyof typeof TransactionEntityStatusEnum;
                        let status = TransactionEntityStatusEnum[parsedStatus]

                        setStatusFilter(status)
                    }}/>
                </div>
                <div className="purchases">
                    {purchases === undefined || purchases === null || purchases.length === 0 ? 
                        <p className="superpupertext228">У вас не было транзакции связанные с покупками</p>
                    : 
                    <div className="purchases-list">
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

                            let value = purchase.product; 
                            return ( 
                                <div className="purchases-container">
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

export default PurchasesPage; 