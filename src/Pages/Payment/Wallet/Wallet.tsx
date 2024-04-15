import "./Wallet.css"
import ContentLine from "src/Components/ContentLine/ContentLine";
import wallet from "@images/wallet.png"
import cashout from "@images/cahsout.png"
import data from "@testdata/Wallet.json"
import SelectorComponent from "src/Components/Selector/Selector";
import { useState } from "react";
import { TransactionStatus, TransactonOperations } from "src/Schemas/Enums";
import ItemsSortComponent from "src/Components/ItemsSorting/ItemsSort";
import { OptionType } from "src/Schemas/Option";
import Modal from "src/Modals/Base/Base";
import BuyModal from "src/Modals/Buy/Buy";
import PayoutModal from "src/Modals/Payout/Payout";
import { NavbarProps } from "src/Utils/NavbarProps";

const WalletPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('') 
    let transactions = data.transactions; 
    const [statusFilter, setStatusFilter] = useState<TransactionStatus>()
    const [operationFilter, setOperationFilter] = useState<TransactonOperations>()
    const [payinModal, setPayinModal] = useState<boolean>(false)
    const [cashoutModal, setCashoutModal] = useState<boolean>(false)

    const transactionStatuses: OptionType[] = [
        {
          label: "Подтвержденные",
          value: TransactionStatus.Confirmed,
        },
        {
          label: "Откатывающиеся",
          value: TransactionStatus.RolledBack,
        },
        {
          label: "Неудачные",
          value: TransactionStatus.Failed,
        },
        {
          label: "Истекшие",
          value: TransactionStatus.Expired,
        },
        {
          label: "В ожидании",
          value: TransactionStatus.Pending,
        }
    ];

    const transactionOperations: OptionType[] = [
        {
          label: "Продажа",
          value: TransactonOperations.Sell,
        },
        {
          label: "Вывод",
          value: TransactonOperations.Withdraw,
        },
        {
          label: "Уменьшение вручную баланса",
          value: TransactonOperations.ManualBalanceDecrease,
        },
        {
          label: "Приоритет премиум-продукта",
          value: TransactonOperations.ProductPremiumPriority,
        },
        {
          label: "Увеличение вручную баланса",
          value: TransactonOperations.ManualBalanceIncrease,
        },
        {
          label: "Депозит",
          value: TransactonOperations.Deposit,
        },
        {
          label: "Замороженный",
          value: TransactonOperations.Frozen,
        },
        {
          label: "Покупка",
          value: TransactonOperations.Buy,
        },
        {
          label: "Бонус за реферал",
          value: TransactonOperations.ReferralBonus,
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
                            <img src={wallet} alt="wallet icon"/>
                        </div>
                        <p className="info1">Балланс</p>
                        <p className="userballance">0 ₽</p>
                    </div>
                    <div className="cashout" onClick={() => setCashoutModal(true)}>
                        <div className="img123">
                            <img src={cashout} alt="cahsout icon" />
                        </div>
                        <p className="info">Вывести <br /> средства</p>
                    </div>
                    <div className="deposit" onClick={() => setPayinModal(true)}>
                        <div className="img123">
                            <img src={wallet} alt="deposit icon" />
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
                        let parsedStatus = value.value as keyof typeof TransactionStatus;
                        let status = TransactionStatus[parsedStatus]

                        setStatusFilter(status)
                    }}/>
                    <SelectorComponent options={transactionOperations} width="auto" onChange={(value, action) => {
                        if (value === undefined || value === null) { return; }
                        let parsedOperations = value.value as keyof typeof TransactonOperations;
                        let operation = TransactonOperations[parsedOperations]

                        setOperationFilter(operation)
                    }}/>
                </div>
                <div className="transaction-filter-sort">
                    <p className="filter-sorting-header">Сортировать: </p>
                    <ItemsSortComponent name="По умолчянию" items={transactions} sortFunction={(tx, tx2) => { 
                        return new Date(tx.createdAt).getTime() - new Date(tx2.createdAt).getTime();
                    }}/>
                    <ItemsSortComponent name="По дате" items={transactions} sortFunction={(tx, tx2) => { 
                        return new Date(tx.createdAt).getTime() - new Date(tx2.createdAt).getTime();
                    }}/>
                </div>
            </div>
            <div className="transactions">
                {transactions === undefined ? 
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
                                    <img src={wallet} alt="" width={30} height={30}/>
                                    <div className="transaction-container-header">
                                        <p className="transaction-title">{value.title}</p>
                                        <p className="transaction-provider-name">{value.providerName}</p>
                                    </div>
                                </div>
                                <div className="transaction-container-right">
                                    <div className="transaction-container-amount">
                                        {value.direction !== "IN" ? "-" : "+"}{value.amount.amount}{value.amount.currency}
                                    </div>
                                    <div className="transaction-container-type" style={{color: value.direction !== "IN" ? "red" : "green"}}>
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