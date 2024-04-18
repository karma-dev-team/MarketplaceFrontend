import RadioGroupComponent from "src/Components/RadioGroup/RadioGroup"
import { useEffect, useState } from "react"
import { OptionType } from "src/Schemas/Option"
import "./Buy.css"
import InputField from "src/Components/InputField/InputField"
import { PurchaseControllersApi, TransactionControllersApi, TransactionProviderEntity } from "restclient"
import { ApiConfig } from "src/Gateway/Config"
import { convertObjectToOptions } from "src/Utils/Options"
import ErrorMessage from "src/Components/ErrorMessage/ErrorMessage"
import { useNavigate } from "react-router-dom"

type props = { 
    price: number, 
    currency?: string | undefined,
    title?: string, 
    payin?: boolean, 
    productId?: string
}

const BuyModal: React.FC<props> = (props: props) => { 
    const [selected, setSelected] = useState<string>(''); 
    const [price, setPrice] = useState<number>(props.price)
    const payIn = props.payin === undefined ? false : props.payin
    const [error, setError] = useState<string>()
    const [providers, setProviders] = useState<TransactionProviderEntity[]>([])
    const [providerOptions, setProviderOptions] = useState<OptionType[]>([])
    const navigate = useNavigate()
    useEffect(() => { 
        (async () => { 
            try { 
                const transactionApi = new TransactionControllersApi(ApiConfig)

                let response = await transactionApi.apiTransactionProvidersGet()
                setProviders(response.data)

                var options: OptionType[] = []
                response.data.forEach((value) => { 
                    options.push({ 
                        label: value.name, 
                        value: value.id, 
                        icon: value.logo?.id, 
                    })
                })
                setProviderOptions(options)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [])

    const purchaseProduct = async () => {
        const purchaseApi = new PurchaseControllersApi(ApiConfig)
        if (props.productId === undefined || props.productId === null) { 
            throw new Error("product id is none when trying to buy")
        }

        try { 
            const providerName = providers.filter(x => x.id === selected)[0].name

            let purchase = await purchaseApi.apiPurchaseProductProductIdBuyPost(props.productId, { 
                productId: props.productId, 
                providerName: providerName, 
            })

            navigate(purchase.data.transaction.props?.paymentUrl || "", { replace: true })
        } catch (e) { 
            setError(String(e))
            console.error(e)
        }
    }

    return ( 
        <div className="root-buymodal">
            <h2 className="modal-header">{props.title || "Покупка"}</h2>
            {payIn ? <InputField
                text={price}
                onChange={value => setPrice(parseFloat(value))} 
                type="number"
                placeholder={"1"}
                titleText="К пополнению*"
                required={true}
            /> : null } 
            <RadioGroupComponent options={providerOptions} selected={selected} setSelected={setSelected}/> 
            <p className="payment-warning">Для завершения оплаты Вы будете перемещены на сайт<br/> платежной системы</p>
            <ErrorMessage errorMessage={error}/>
            <div className="payment-buttom">
                <div className="payment-price-container">
                    <span className="payment-price">
                        {price} {props.currency || "₽"}
                    </span>
                    <span className="payment-type">
                        Покупки
                    </span>
                </div>
                <div className="pay-button" onClick={() => purchaseProduct()}>
                    Перейти к оплате    
                </div>
            </div>
        </div>
    )  
}

export default BuyModal; 