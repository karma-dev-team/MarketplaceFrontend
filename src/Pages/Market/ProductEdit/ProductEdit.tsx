import "./ProductEdit.css"
import ContentLine from "src/Components/ContentLine/ContentLine";
import ProductCard from "src/Components/ProductCard/ProductCard";
import eye from "@images/eye.png"
import producthuinia from "@images/product_huinia.png"
import zvezda from "@images/star-image.svg"
import testicon from "@images/testico123.png"
import testsmth from "@images/test123.png"
import testico from "@images/testico255.png"
import { range } from "src/Utils/Range";
import { useState } from 'react'
import { OptionScheme, OptionType } from "src/Schemas/Option";
import { OptionTypes } from "src/Schemas/Enums";
import SelectorComponent from "src/Components/Selector/Selector";
import InputField from "src/Components/InputField/InputField";
import StarsComponent from "src/Components/Stars/Stars";


const ProductEditPage: React.FC = () => {  

    const harakteristikOptions: OptionType[] = [ 
        { 
            label: "Скины", 
            value: "1337228"  // harakteristik id 
        },
        { 
            label: "Донат", 
            value: "2281337"  // harakteristik id 
        }
    ]
    // end deletable zone! 

    let options: OptionScheme[] = []
    const [selectedharakteristik, setSelectedharakteristik] = useState<string>()
    const [titleText, setTitle] = useState<string>('')

    return (
        <div className="root-productedit">
            <div className="productkorobka1337">
                <div className="typonavbar1337">
                    <p className="navinfo-text1">Аналитика </p>
                    <div><p className="navt-ochka">•</p></div>
                    <p className="navinfo-text1">Имя игры</p>
                    <div><p className="navt-ochka">•</p></div>
                    <p className="navinfo-text2">Имя товара</p>
                </div>
                <ContentLine/>
                <h2 className="productName1337">Название товара</h2>
                <div className="viewscount1337">
                    <img src={eye} alt="" />
                    <div className="views1337">999 просмотров</div>
                </div>
                <div className="razedenitel1337">
                    <div className="lefthuinia1337">
                        <img src={producthuinia} alt="product img" />
                    </div>
                    <div className="righthuinia1337">
                        <p className="cenanatovar1337">589 ₽</p>
                        <p className="nuopisanienoneopisanie1337">250 ГЕМОВ НА ТВОЙ АККАУНТ В <br /> STUMBLE GUYS 250 ГЕМОВ НА <br /> STUMBLE GUYS</p>
                        
                        <button className="savebutton1337">Сохранить</button>
                    </div>
                </div>
                <h3 className="razdeli1337">Описание</h3>
                <InputField 
                        placeholder="Введите описание товара"
                        titleText=" "
                        required={false}
                        onChange={setTitle}
                        text={titleText}
                        width={"70%"}
                        type="textarea"
                    />

                <h3 className="razdeli1337">Характеристики</h3>
                <div className="rowdliarazdela1337">
                    {range(0, 3).map((value) => {
                        return <div className="harakteristika1337">
                            <SelectorComponent 
                                options={harakteristikOptions}
                                onChange={(value) => {setSelectedharakteristik(value?.value)}}
                            />
                        </div>
                    })}
                    
                </div>

                <h3 className="razdeli1337">Продавец</h3>
                <div className="sallerprofile1337">
                    <img src={testico} alt="" />
                    <div className="salleropisanie1337">
                        <h4 className="sallername1337">Галымжан </h4>
                        <div className="karobkadliaotziva1337">
                            <div className="ocenkatovara1337">
                                <p className="ocenka-number1337">4.0</p>
                                <StarsComponent stars={4} width={15} height={15}/>
                            </div>
                            <p className="numberotzivov1337">20 отзывов</p>
                        </div>
                    </div>
                </div>

                <h3 className="razdeli1337">Отзывы</h3>
                <div className="galymzhangay1337"></div>

                <h3 className="razdeli1337">Похожие товары</h3>
                <div className="rowdliarazdela1337">
                    {range(1, 3).map((value) => {
                        return <ProductCard 
                            productId = "string" 
                            title = "Ключ"
                            image = {testsmth}
                            gameImage = {testicon}
                            userStars = {4}
                            price = {69}
                            game = "Garry's Mod"
                            category = "Ключи"
                        />
                    })}
                </div>
            </div>
        </div>
    ); 
}

export default ProductEditPage; 