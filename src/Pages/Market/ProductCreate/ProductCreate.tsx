import SelectorComponent, { OptionType } from "src/Components/Selector/Selector";
import "./ProductCreate.css"
import { useState } from 'react'
import ContentLine from "src/Components/ContentLine/ContentLine";
import InputField from "src/Components/InputField/InputField";
import data from "@testdata/ProductCreate.json"
import { OptionScheme } from "src/Schemas/Option";
import { OptionTypes } from "src/Schemas/Enums";
import { RangeAttributes, SelectorAttributes, SwitchAttributes } from "./Attributes";

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

    const [attributes, setAttributes] = useState<Map<string, string>[]>([]);
    
    const [selectedLabel, setSelectedLabel] = useState<string>();
    const [selectedGame, setSelectedGame] = useState<string>()
    const [selectedCategory, setSelectedCategory] = useState<string>()
    const [titleText, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [price, setPrice] = useState<number>(1.0)
    const handleLabelClick = (option: OptionScheme) => {
        setSelectedLabel(option.field);
        addAttributes(option.field, option.value);
    };
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
                    <h2>Основное</h2>

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
                    <SelectorAttributes options={options} onLabelClick={handleLabelClick} />
                    <RangeAttributes options={options} addAttributes={addAttributes} />
                    <SwitchAttributes options={options} addAttributes={addAttributes} />
                </div>
            </div>
        </div>
    ); 
}

export default ProductCreatePage; 