import InputField from "src/Components/InputField/InputField"
import "./PurchaseConfirm.css"
import { useState } from "react"
import { PurchaseControllersApi } from "restclient"
import { ApiConfig } from "src/Gateway/Config"

type props = { 
    purchaseId: string, 
    productId: string, 
    price: number, 
    currency?: string
}

const PurchaseConfirmModal: React.FC<props> = (props: props) => { 
    const [text, setText] = useState<string>('')

    const confirmPurchase = () => { 
        if (props.purchaseId === "" || props.productId === "") { 
            console.error("Purchase id or product id are none")
            return; 
        }

        const purchaseApi = new PurchaseControllersApi(ApiConfig)

        try { 
            purchaseApi.apiPurchasePurchaseIdConfirmPost(props.purchaseId, { 
                purchaseId: props.purchaseId, 
                productId: props.productId, 
                rate: 5, 
                rateText: text
            })
        } catch (e) { 
            console.error(e)
        }
    }

    return ( 
        <div className="root-purchaseconfirm">
            <h2>Подвердить принятие товара</h2>

            <InputField 
                placeholder="Введите ваш текст отзыва"
                text={text}
                onChange={setText}
                required={false}
                titleText="Напишите отзыв"
            />
            <div className="payment-buttom">
                <div className="payment-price-container">
                    <span className="payment-price">
                        {props.price} {props.currency || "₽"}
                    </span>
                    <span className="payment-type">
                        Покупки
                    </span>
                </div>
                <div className="pay-button" onClick={() => confirmPurchase()}>
                    Подвердить    
                </div>
            </div>
        </div>
    )
}

export default PurchaseConfirmModal; 