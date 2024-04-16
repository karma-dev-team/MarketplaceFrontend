import "./Wallet.css"
import ContentLine from "src/Components/ContentLine/ContentLine";
import walletIcon from "@images/wallet.png"
import cashout from "@images/cahsout.png"
import SelectorComponent from "src/Components/Selector/Selector";
import { useEffect, useState } from "react";
import ItemsSortComponent from "src/Components/ItemsSorting/ItemsSort";
import { OptionType } from "src/Schemas/Option";
import Modal from "src/Modals/Base/Base";
import BuyModal from "src/Modals/Buy/Buy";
import PayoutModal from "src/Modals/Payout/Payout";
import { NavbarProps } from "src/Utils/NavbarProps";
import { TransactionControllersApi, TransactionEntity, TransactionEntityDirectionEnum, TransactionEntityOperationEnum, TransactionEntityStatusEnum, WalletControllersApi, WalletEntity } from "restclient";
import { ApiConfig } from "src/Gateway/Config";
import { useCookies } from "react-cookie";
import { AuthKey } from "src/Gateway/Consts";
import { useNavigate } from "react-router-dom";

const WalletPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('') 
    const [transactions, setTransactions] = useState<TransactionEntity[]>([])
    const [statusFilter, setStatusFilter] = useState<TransactionEntityStatusEnum>()
    const [operationFilter, setOperationFilter] = useState<TransactionEntityOperationEnum>()
    const [wallet, setWallet] = useState<WalletEntity>()
    const [payinModal, setPayinModal] = useState<boolean>(false)
    const [cashoutModal, setCashoutModal] = useState<boolean>(false)
    const [cookies] = useCookies([AuthKey])
    const navigate = useNavigate()

    useEffect(() => { 
        if (cookies.Authorization === undefined || cookies.Authorization === "") { 
            navigate("/login")
        }
    }, [cookies, navigate])

    useEffect(() => { 
        (async () => { 
            const transactionsApi = new TransactionControllersApi(ApiConfig)
            const walletApi = new WalletControllersApi(ApiConfig)
            try { 
                let walletResponse = await walletApi.apiWalletUserUserIdGet(props.user?.id || "")
                setWallet(walletResponse.data)

                let response = await transactionsApi.apiTransactionUserUserIdGet(props.user?.id || "")
                setTransactions(response.data)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [props.user])

    const transactionStatuses: OptionType[] = [
        {
          label: "Подтвержденные",
          value: TransactionEntityStatusEnum.Confirmed,
        },
        {
          label: "Откатывающиеся",
          value: TransactionEntityStatusEnum.RolledBack,
        },
        {
          label: "Неудачные",
          value: TransactionEntityStatusEnum.Failed,
        },
        {
          label: "Истекшие",
          value: TransactionEntityStatusEnum.Expired,
        },
        {
          label: "В ожидании",
          value: TransactionEntityStatusEnum.Pending,
        }
    ];

    const transactionOperations: OptionType[] = [
        {
          label: "Продажа",
          value: TransactionEntityOperationEnum.Sell,
        },
        {
          label: "Вывод",
          value: TransactionEntityOperationEnum.Withdraw,
        },
        {
          label: "Уменьшение вручную баланса",
          value: TransactionEntityOperationEnum.ManualBalanceDecrease,
        },
        {
          label: "Приоритет премиум-продукта",
          value: TransactionEntityOperationEnum.ProductPremiumPriority,
        },
        {
          label: "Увеличение вручную баланса",
          value: TransactionEntityOperationEnum.ManualBalanceIncrease,
        },
        {
          label: "Депозит",
          value: TransactionEntityOperationEnum.Deposit,
        },
        {
          label: "Замороженный",
          value: TransactionEntityOperationEnum.Frozen,
        },
        {
          label: "Покупка",
          value: TransactionEntityOperationEnum.Buy,
        },
        {
          label: "Бонус за реферал",
          value: TransactionEntityOperationEnum.ReferralBonus,
        }
    ];

    return (
        <div className="root-wallet">
            <Modal onClose={() => setPayinModal(false)} isOpen={payinModal}> 
                <BuyModal 
                    title="Пополнение"
                    price={1}
                    payin={true}
                />
            </Modal>
            <Modal onClose={() => setCashoutModal(false)} isOpen={cashoutModal}>
                <PayoutModal />
            </Modal>

            <div className="korobka123">
                <h2>Кошелёк</h2>
                <ContentLine/>
                <div className="walletactions">
                    <div className="wallet">
                        <div className="img123">
                            <img src={walletIcon} alt="wallet icon"/>
                        </div>
                        <p className="info1">Балланс</p>
                        <p className="userballance">{wallet?.availableBalance.amount} ₽</p>
                    </div>
                    <div className="cashout" onClick={() => setCashoutModal(true)}>
                        <div className="img123">
                            <img src={cashout} alt="cahsout icon" />
                        </div>
                        <p className="info">Вывести <br /> средства</p>
                    </div>
                    <div className="deposit" onClick={() => setPayinModal(true)}>
                        <div className="img123">
                            <img src={walletIcon} alt="deposit icon" />
                        </div>
                        <p className="info">Пополнить</p>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="transactions-filter">
                <div className="transaction-filter-selector">
                    <SelectorComponent options={transactionStatuses} width="auto" onChange={(value, action) => {
                        if (value === undefined || value === null) { return; }
                        let parsedStatus = value.value as keyof typeof TransactionEntityStatusEnum;
                        let status = TransactionEntityStatusEnum[parsedStatus]

                        setStatusFilter(status)
                    }}/>
                    <SelectorComponent options={transactionOperations} width="auto" onChange={(value, action) => {
                        if (value === undefined || value === null) { return; }
                        let parsedOperations = value.value as keyof typeof TransactionEntityOperationEnum;
                        let operation = TransactionEntityOperationEnum[parsedOperations]

                        setOperationFilter(operation)
                    }}/>
                </div>
                <div className="transaction-filter-sort">
                    <p className="filter-sorting-header">Сортировать: </p>
                    <ItemsSortComponent name="По умолчянию" items={transactions} sortFunction={(tx, tx2) => { 
                        return new Date(tx.createdAt || "").getTime() - new Date(tx2.createdAt || "").getTime();
                    }}/>
                    <ItemsSortComponent name="По дате" items={transactions} sortFunction={(tx, tx2) => { 
                        return new Date(tx.createdAt || "").getTime() - new Date(tx2.createdAt || "").getTime();
                    }}/>
                </div>
            </div>
            <div className="transactions">
                {transactions === undefined || transactions.length === 0 ? 
                     <p className="text123">У вас не было транзакции связанные с кошёлком</p>
                : 
                <div className="transactions-list">
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
                            <div className="transaction-container">
                                <div className="transaction-container-left">
                                    <img src={walletIcon} alt="" width={30} height={30}/>
                                    <div className="transaction-container-header">
                                        <p className="transaction-title">{value.operation}</p>
                                        <p className="transaction-provider-name">{value.provider?.name}</p>
                                    </div>
                                </div>
                                <div className="transaction-container-right">
                                    <div className="transaction-container-amount">
                                        {value.direction !== TransactionEntityDirectionEnum.In ? "-" : "+"}{value.amount.amount} ₽
                                    </div>
                                    <div className="transaction-container-type" 
                                        style={{color: value.direction !== TransactionEntityDirectionEnum.In ? "red" : "green"}}>
                                        {value.operation}
                                    </div>
                                </div>
                            </div>
                        )
                    })}    
                </div>}
            </div>
        </div>
    ); 
}

export default WalletPage; 