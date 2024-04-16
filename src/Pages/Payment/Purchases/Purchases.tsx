import "./Purchases.css"
import data from "@testdata/Wallet.json"
import SelectorComponent from "src/Components/Selector/Selector";
import { useEffect, useState } from "react";
import { TransactionStatus, TransactonOperations } from "src/Schemas/Enums";
import ProductCard from "src/Components/ProductCard/ProductCard";
import testicon from "@images/testico123.png"
import testsmth from "@images/test123.png"
import { OptionType } from "src/Schemas/Option";
import { NavbarProps } from "src/Utils/NavbarProps";
import { useCookies } from "react-cookie";
import { AuthKey } from "src/Gateway/Consts";
import { useNavigate } from "react-router-dom";
import { PurchaseControllersApi, PurchaseEntity } from "restclient";
import { ApiConfig } from "src/Gateway/Config";



const PurchasesPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('Покупки') 
    const [statusFilter, setStatusFilter] = useState<TransactionStatus>()
    const [operationFilter, setOperationFilter] = useState<TransactonOperations>()
    const [cookies] = useCookies([AuthKey])
    let [purchases, setPurchases] = useState<PurchaseEntity[]>([]); 
    const purchaseApi = new PurchaseControllersApi(ApiConfig)
    const navigate = useNavigate()

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

    useEffect(() => { 
        if (cookies.Authorization === undefined || cookies.Authorization === "") { 
            navigate("/login")
        }
    }, [cookies])

    useEffect(() => { 
        (async () => { 
            try { 
                let purchaseResponse = await purchaseApi.apiPurchaseMeGet(statusFilter, undefined, operationFilter)
                setPurchases(purchaseResponse.data)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [])

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
                                if (statusFilter?.toLowerCase() !== purchase.status.toLowerCase()) { 
                                    return null; 
                                }
                            }

                            let value = purchase.product; 
                            return ( 
                                <div className="purchases-container">
                                    <ProductCard 
                                        title={value.name}
                                        category={value.category.name}
                                        price={value.basePrice.amount}
                                        game={value.category.name}
                                        gameImage={value.game.logo.id}
                                        productId={value.id}
                                        image={value.images[0].id}
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