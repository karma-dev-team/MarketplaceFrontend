import RadioGroupComponent from "src/Components/RadioGroup/RadioGroup"
import { useState } from "react"
import { OptionType } from "src/Schemas/Option"
import "./Buy.css"
import InputField from "src/Components/InputField/InputField"

type props = { 
    price: number, 
    currency?: string | undefined,
    title?: string, 
    payin?: boolean
}

const BuyModal: React.FC<props> = (props: props) => { 
    const [selected, setSelected] = useState<string>(''); 
    const [price, setPrice] = useState<number>(props.price)
    const payIn = props.payin === undefined ? false : props.payin
    const options: OptionType[] = [ 
        { 
            value: "dsa321",
            label: "Банковская карта (РФ)",
            icon: "https://playerok4.com/images/Icons/CardRF.svg",  
        }, 
        { 
            value: "3214",
            label: "Банковская карта (РФ)",
            icon: "https://playerok4.com/images/Icons/CardRF.svg",  
        },
        { 
            value: "4325",
            label: "Банковская карта (РФ)",
            icon: "https://playerok4.com/images/Icons/CardRF.svg",  
        },
        { 
            value: "3124",
            label: "Банковская карта (РФ)",
            icon: "https://playerok4.com/images/Icons/CardRF.svg",  
        },
    ]

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
            <RadioGroupComponent options={options} selected={selected} setSelected={setSelected}/> 
            <p className="payment-warning">Для завершения оплаты Вы будете перемещены на сайт<br/> платежной системы</p>
            <div className="payment-buttom">
                <div className="payment-price-container">
                    <span className="payment-price">
                        {price}
                        {props.currency || "₽"}
                    </span>
                    <span className="payment-type">
                        Покупки
                    </span>
                </div>
                <div className="pay-button">
                    Перейти к оплате    
                </div>
            </div>
        </div>
    )  
}

export default BuyModal; 