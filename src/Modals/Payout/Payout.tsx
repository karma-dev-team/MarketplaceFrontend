import { useState } from "react";
import InputField from "src/Components/InputField/InputField";
import RadioGroupComponent from "src/Components/RadioGroup/RadioGroup";
import { OptionType } from "src/Schemas/Option";

const PayoutModal: React.FC = () => { 
    const [price, setPrice] = useState<number>(0)
    const [selected, setSelected] = useState<string>(''); 
    const [cardNumber, setCardNumber] = useState<string>('')
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
        <div className="root-payout">
            <h2 className="modal-header">Вывод средств</h2>

            <InputField
                text={price}
                onChange={value => setPrice(parseFloat(value))} 
                type="number"
                placeholder={"1"}
                titleText="К выводу*"
                required={true}
            />
            
            <RadioGroupComponent options={options} selected={selected} setSelected={setSelected}/> 
            <InputField
                text={cardNumber}
                onChange={value => setCardNumber(value)} 
                type="text"
                placeholder={"Введите номер карты"}
                titleText="Номер карты*"
                required={true}
            />
            <div className="payment-buttom">
                <div className="payment-price-container">
                    <span className="payment-price">
                        {price} ₽
                    </span>
                    <span className="payment-type">
                        Вывод 
                    </span>
                </div>
                <div className="pay-button">
                    Перейти к оплате    
                </div>
            </div>
        </div>
    )
}

export default PayoutModal; 