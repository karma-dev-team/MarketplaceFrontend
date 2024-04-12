import RadioGroupComponent from "src/Components/RadioGroup/RadioGroup"
import { useState } from "react"
import { OptionType } from "src/Schemas/Option"
import "./Buy.css"

type props = { 
    price: number, 
    currency?: string | undefined,
}

const BuyModal: React.FC<props> = (props: props) => { 
    const [selected, setSelected] = useState<string>(''); 
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
            <h2 className="modal-header">Оплата</h2>

            <RadioGroupComponent options={options} selected={selected} setSelected={setSelected}/> 
            <p className="payment-warning">Для завершения оплаты Вы будете перемещены на сайт<br/> платежной системы</p>
            <div className="payment-buttom">
                <div className="payment-price-container">
                    <span className="payment-price">
                        {props.price}
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