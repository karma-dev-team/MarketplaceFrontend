import SelectorComponent from "src/Components/Selector/Selector";
import "./ProductCreate.css"
import { useEffect, useState } from 'react'
import ContentLine from "src/Components/ContentLine/ContentLine";
import InputField from "src/Components/InputField/InputField";
import { OptionType } from "src/Schemas/Option";
import { RangeAttributes, SelectorAttributes, SwitchAttributes } from "./Attributes";
import SwitchComponent from "src/Components/Switch/Switch";
import plusIcon from "@images/PlusLog.svg"
import binIcon from "@images/Bin.svg"
import ImageScheme from "src/Schemas/Image";
import warningIcon from "@images/warning.png"
import criticalWarningIcon from "@images/criticalWarning.png"
import ImageUploaderComponent from "src/Components/ImageUploader/ImageUploader";
import { NavbarProps } from "src/Utils/NavbarProps";
import { CategoryControllersApi, CategoryEntity, GameControllersApi, OptionEntity, OptionEntityTypeEnum, ProductControllersApi } from "restclient";
import { convertObjectToOptions } from "src/Utils/Options";
import { ApiConfig } from "src/Gateway/Config";
import { useNavigate } from "react-router-dom";

const ProductCreatePage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('Продать')  
    
    const [categoryOptions, setCategoryOptions] = useState<OptionType[]>([])
    const [gamesOptions, setGamesOptions] = useState<OptionType[]>([])
    const [options, setOptions] = useState<OptionEntity[]>([])
    const [attributes, setAttributes] = useState<Map<string, string>[]>([]);
    const [selectedGame, setSelectedGame] = useState<string>()
    const [selectedCategory, setSelectedCategory] = useState<string>()
    const [titleText, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [price, setPrice] = useState<number>(1.0)
    const [autoDistrub, setTurnAutoDistrub] = useState<boolean>(false)
    const [distrubtion, setAutoDistrubtion] = useState<string[]>([])
    const handleLabelClick = (option: OptionEntity) => {
        // setSelectedLabel(option.field);
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

    
    useEffect(() => { 
        (async () => { 
            try { 
                const gameApi = new GameControllersApi(ApiConfig)

                let gameResponse = await gameApi.apiGameGet()
                setGamesOptions(convertObjectToOptions(gameResponse.data))

                let categoryResponse = await categoryApi.apiCategoryGet()
                setCategoryOptions(convertObjectToOptions(categoryResponse.data))

                let currenctCategory: CategoryEntity = categoryResponse.data.filter((value: CategoryEntity) => value.id === selectedCategory)[0]
                setOptions(currenctCategory.options)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [selectedCategory])

    const categoryApi = new CategoryControllersApi(ApiConfig)
    const productApi = new ProductControllersApi(ApiConfig)
    const navigate = useNavigate()
    const submitProduct = async () => { 
        if (selectedCategory === "" || selectedCategory === undefined
            || selectedGame === "" || selectedGame === undefined) { 
            return; 
        }

        let resultAttributes: { [key: string]: string } = {}

        attributes.forEach((value) => {
            // O(n^2) вообще похуй 
            value.forEach((value, key) => { 
                resultAttributes[key] = value
            })
        })
        
        try { 
            await productApi.apiProductPost({ 
                name: titleText, 
                description: description, 
                categoryId: selectedCategory, 
                gameId: selectedGame,
                price: price, 
                attributes: resultAttributes,
                images: images,   
                autoAnswers: distrubtion,  
            })
            setTimeout(() => { 
                navigate("/")
            })
        } catch (e) { 
            console.error(e)
        } 
    }

    const draftProduct = async () => { 
        submitProduct() // to do draft product
    }

    return (
        <div className="root-createproduct">
            <h1>Создать товар</h1>
            <div className="createproduct-container">
                <div className="createproduct-main-selector">
                    <SelectorComponent 
                        options={gamesOptions}
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