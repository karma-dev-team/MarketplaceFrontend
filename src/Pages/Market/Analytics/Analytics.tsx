import "./Analytics.css"
import StarsComponent from "src/Components/Stars/Stars";
import ContentLine from "src/Components/ContentLine/ContentLine";
import SelectorComponent from "src/Components/Selector/Selector";
import { OptionScheme, OptionType } from "src/Schemas/Option";
import { OptionTypes } from "src/Schemas/Enums";
import { useState } from 'react'
import ItemsSortComponent from "src/Components/ItemsSorting/ItemsSort";
import SearchbarComponent from "src/Components/Search/Search";
import data from "@testdata/Analytics.json"
import { NavbarProps } from "src/Utils/NavbarProps";

interface Product {
    createdAt: string; 
    stars: number;    
}

const AnalyticsPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('Аналитика')  
    const gameOptions: OptionType[] = [
        { 
            label: "Garry's mod", 
            value: "Garrys-mod"  // game name 
        },
        { 
            label: "Minecraft", 
            value: "Minecraft"  // game name 
        }
    ]

    const categoryOptions: OptionType[] = [ 
        { 
            label: "Донат", 
            value: "31323213123213312"  // category id 
        },
        { 
            label: "Сборки", 
            value: "78327832839892947"  // category id 
        }
    ]
    // end deletable zone! 

    let options: OptionScheme[] = []
    const [selectedGame, setSelectedGame] = useState<string>()
    const [selectedCategory, setSelectedCategory] = useState<string>()
    const [searchText, setSearchText] = useState<string>('')

    data.options.forEach((option) => {
        options.push(
            {
                ...option, 
                type: option.type as OptionTypes
            }
        )
    })

    return (
        <div className="root-analytic">
            <div className="analytic-korobka123">
                <h2 className="analytic-name123">Аналитика</h2>
                <div className="contentlinename123"><ContentLine /></div>
                <h2 className="analytic-categoryname123">Общая</h2>
                <div className="analytic-row123">
                    <div className="info-korobka123">
                        <div className="korobkadliakorobok123">
                            <div className="levaia-korobka123">
                                <div className="pervaiakorobka123">
                                    <p className="textvkorobke123"> </p>
                                    <p className="textvkorobke123">Просмотров <br/>обьявления</p>
                                    <p className="textvkorobke123">Оплачено <br/>покупок</p>
                                </div>
                                <div className="vtoraiakorobka123">
                                    <p className="textvkorobke123">Всего</p>
                                    <p className="numbervkorobke123">7328</p>
                                    <p className="numbervkorobke123">0</p>
                                </div>
                                <div className="tretiaiakorobka123">
                                    <p className="textvkorobke123">За неделю</p>
                                    <p className="numbervkorobke123">1</p>
                                    <p className="numbervkorobke123">0</p>
                                </div>
                            </div>

                            <div className="sredniaia-korobka123">
                                <div className="korobkaprostotak321">
                                    <p className="stringstyle321">Выручка</p>
                                    <div className="korobkaprostotak123"><p className="stringstyle123">0 ₽</p></div>
                                </div>
                                
                                <div className="korobkaprostotak321">
                                    <p className="stringstyle321">Обороты</p>
                                    <div className="korobkaprostotak123"><p className="stringstyle123">0 ₽</p></div>
                                </div>
                            </div>

                            <div className="pravaia-korobka123">
                                <div className="korobkaprostotak321">
                                    <p className="stringstyle321">Средняя оценка</p>
                                    <div className="ocenkamid123">
                                        <p className="stringstyle123">4.0</p>
                                        <StarsComponent stars={4} width={15} height={15}/>
                                    </div>
                                </div>

                                <div className="korobkaprostotak321">
                                    <p className="stringstyle321">Уникальных покупателей</p>
                                    <div className="korobkaprostotak123"><p className="stringstyle123">123</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="korobka-deneg123"></div>
                        <div className="korobka-accaunta123"></div>
                    </div>
                </div>
                <ContentLine />
                <h2 className="analytic-categoryname123">Товары</h2>
                <SearchbarComponent searchText={searchText} onChange={setSearchText} placeholder="Введите название"/> 
                <div className="analytic-row123">
                    <SelectorComponent 
                        options={gameOptions}
                        onChange={(value) => {setSelectedGame(value?.value)}}
                    />
                    <SelectorComponent 
                        options={categoryOptions}
                        onChange={(value) => {setSelectedCategory(value?.value)}}
                    />
                </div>
                <div className="categoryproduct-sorter">
                    <div className="analytic-filter-sort">
                        <p className="filter-sorting-textname">Сортировать: </p>
                        <ItemsSortComponent
                            name="По Популярности"
                            items={data.products}
                            sortFunction={(product1, product2) => new Date(product2.createdAt).getTime() - new Date(product1.createdAt).getTime()}
                        />
                        <ItemsSortComponent<Product>
                            name="По рейтингу"
                            items={data.products}
                            sortFunction={(product1: Product, product2: Product) => product2.stars - product1.stars}
                        />
                        <ItemsSortComponent<Product>
                            name="По умолчанию"
                            items={data.products}
                            sortFunction={(product1, product2) => 1}
                        />
                    </div>
                </div>

                <div className="product-redact123"></div>
            </div>
        </div>
    ); 
}

export default AnalyticsPage; 