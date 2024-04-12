import SelectorComponent from "src/Components/Selector/Selector";
import "./ProductCreate.css"
import { useState } from 'react'
import ContentLine from "src/Components/ContentLine/ContentLine";
import InputField from "src/Components/InputField/InputField";
import data from "@testdata/ProductCreate.json"
import { OptionScheme, OptionType } from "src/Schemas/Option";
import { OptionTypes } from "src/Schemas/Enums";
import { RangeAttributes, SelectorAttributes, SwitchAttributes } from "./Attributes";
import SwitchComponent from "src/Components/Switch/Switch";
import plusIcon from "@images/PlusLog.svg"
import binIcon from "@images/Bin.svg"
import ImageScheme from "src/Schemas/Image";
import warningIcon from "@images/warning.png"
import criticalWarningIcon from "@images/criticalWarning.png"
import ImageUploaderComponent from "src/Components/ImageUploader/ImageUploader";

const ProductCreatePage: React.FC = () => {  
    // delete when connecting to backend 
    const gameOptions: OptionType[] = [
        { 
            label: "Garry's mod", 
            value: "Garrys-mod"  // game name 
        }
    ]

    const categoryOptions: OptionType[] = [ 
        { 
            label: "Донат на FastRp", 
            value: "31323213123213312"  // category id 
        }
    ]
    // end deletable zone! 

    let options: OptionScheme[] = []

    data.options.forEach((option) => {
        options.push(
            {
                ...option, 
                type: option.type as OptionTypes
            }
        )
    })

    const submitProduct = async () => { 

    }

    const draftProduct = async () => { 
        
    }

    const [attributes, setAttributes] = useState<Map<string, string>[]>([]);
    const [selectedLabel, setSelectedLabel] = useState<string>();
    const [selectedGame, setSelectedGame] = useState<string>()
    const [selectedCategory, setSelectedCategory] = useState<string>()
    const [titleText, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [price, setPrice] = useState<number>(1.0)
    const [autoDistrub, setTurnAutoDistrub] = useState<boolean>(false)
    const [distrubtion, setAutoDistrubtion] = useState<string[]>([])
    const handleLabelClick = (option: OptionScheme) => {
        setSelectedLabel(option.field);
        addAttributes(option.field, option.value);
    };
    const [images, setImages] = useState<ImageScheme[]>([]); 
    const addAttributes = (label: string, value: string) => {
        let temp = new Map<string, string>()

        temp.set(label, value)
        const updatedAttributes = [...attributes, temp];
        setAttributes(updatedAttributes);
        localStorage.setItem('selectedAttributes', JSON.stringify(updatedAttributes));
    }

    return (
        <div className="root-createproduct">
            <h1>Создать товар</h1>
            <div className="createproduct-container">
                <div className="createproduct-main-selector">
                    <SelectorComponent 
                        options={gameOptions}
                        onChange={(value) => {setSelectedGame(value?.value)}}
                    />
                    <SelectorComponent 
                        options={categoryOptions}
                        onChange={(value) => {setSelectedCategory(value?.value)}}
                    />
                </div>
                <ContentLine color="#414357"/>
                <div className="createproduct-main-info">
                    <h2 className="createproduct-field-header">Основное</h2>

                    <InputField 
                        placeholder="Введите заголовок товара"
                        titleText="Заголовок товара"
                        required={true}
                        onChange={setTitle}
                        text={titleText}
                        width={"100%"}
                    />
                    <InputField 
                        placeholder="Введите описание товара"
                        titleText="Описание товара"
                        required={true}
                        onChange={setDescription}
                        text={description}
                        width={"100%"}
                        type="textarea"
                        height={"80px"}
                    /> 
                    <div className="counter-info">
                        <InputField 
                            placeholder="Цена"
                            titleText="Введите цену"
                            required={true}
                            onChange={(value) => setPrice(parseFloat(value))}
                            text={price}
                            type="number"
                            width={"50%"}
                        /> 
                    </div>
                </div>
                <ContentLine color="#414357"/> 
                <div className="createproduct-attributes">
                    <h2>Характеристики</h2>
                    <div className="createproduct-fields">
                        <SelectorAttributes options={options} onLabelClick={handleLabelClick} />
                    </div>
                    <div className="createproduct-fields">
                        <RangeAttributes options={options} addAttributes={addAttributes} />
                    </div>
                    <div className="createproduct-fields">
                        <SwitchAttributes options={options} addAttributes={addAttributes} />
                    </div>
                </div>
                <ContentLine color="#414357"/>
                <div className="createproduct-automatic">
                    <div className="createproduct-automatic-switch">
                        <h2>Автовыдача</h2>
                        <SwitchComponent 
                            onChange={setTurnAutoDistrub}
                            turn={autoDistrub}
                        />
                    </div>
                    <p>Покупатель получит данные автовыдачи только после подтверждения оплаты.</p>
                    {autoDistrub && distrubtion.map((value, index) => { 
                        return ( 
                            <div className="autoanswer-field">
                                <InputField 
                                    text={distrubtion[index]}
                                    onChange={(changedValue) => { 
                                        let distrubCopy = [...distrubtion]
                                        distrubCopy[index] = changedValue
                                        setAutoDistrubtion(distrubCopy)
                                    }}
                                    placeholder="Введите информацию для покупателя"
                                    type="textarea"
                                    height={"6em"}
                                /> 
                                <div className="autoanswer-delete" onClick={() => { 
                                    let distrubCopy = [...distrubtion.slice(0, index), ...distrubtion.slice(index + 1, distrubtion.length)]
                                    setAutoDistrubtion(distrubCopy)
                                }}>
                                    <img src={binIcon} alt="" className="bin-icon"/>
                                </div>
                            </div>
                        )
                    })}
                    {autoDistrub ? <div className="createproduct-automatic-list">
                        <div className="automatic-distrub-button" onClick={() => setAutoDistrubtion([...distrubtion, ""])}>
                            <img src={plusIcon} alt="" width={30} height={30}/>
                            <p>Добавить</p>
                        </div>
                    </div> : null}
                </div>
                <ContentLine color="#414357"/>
                <div className="createproduct-images">
                    <h2 className="createproduct-field-header">Изображения</h2>

                    <ImageUploaderComponent 
                        images={images}
                        setImages={setImages}
                        elementHeight={"100px"}
                        elementWidth={"100%"}
                    /> 
                </div>
                <ContentLine color="#414357"/> 
                <div className="createproduct-warnings">
                    <p>
                        <img src={criticalWarningIcon} alt="" className="warning-icon"/>
                        <span>В описании продукта запрещается передача данных от сторонних мессенджеров.</span>
                    </p>
                    <p>
                        <img src={warningIcon} alt="" className="warning-icon"/>
                        <span>При договоренностях или торговле за пределами KarmaStore вы лишаетесь поддержки по сделке и рискуете быть обманутыми.</span>
                    </p>
                    <div className="createproduct-actions">
                        <div className="createproduct-draft createproduct-action" onClick={(e) => draftProduct()}>
                            Сохранить как черновик
                        </div>
                        <div className="createproduct-submit createproduct-action" onClick={(e) => submitProduct()}>
                            Разместить товар
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default ProductCreatePage; 