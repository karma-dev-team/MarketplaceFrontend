import "./Analytics.css"
import StarsComponent from "src/Components/Stars/Stars";
import ContentLine from "src/Components/ContentLine/ContentLine";
import SelectorComponent from "src/Components/Selector/Selector";
import { OptionType } from "src/Schemas/Option";
import { useEffect, useState } from 'react'
import ItemsSortComponent from "src/Components/ItemsSorting/ItemsSort";
import SearchbarComponent from "src/Components/Search/Search";
import { NavbarProps } from "src/Utils/NavbarProps";
import { AnalyticsApi, AnalyticsInformationDto, CategoryControllersApi, GameControllersApi, ProductControllersApi, ProductEntity, UserAnalyticsSchema } from "restclient";
import { ApiConfig, asFileUrl } from "src/Gateway/Config";
import { convertObjectToOptions } from "src/Utils/Options";
import { useCookies } from "react-cookie";
import { AuthKey } from "src/Gateway/Consts";
import { useNavigate } from "react-router-dom";
import ProductWithActionsComponent from "src/Components/ProductWithActions/ProductWithActions";

const AnalyticsPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('Аналитика')  
    const [categoryOptions, setCategoryOptions] = useState<OptionType[]>([])
    const [gameOptions, setGamesOptions] = useState<OptionType[]>([])
    const navigate = useNavigate()
    const [selectedGame, setSelectedGame] = useState<string>()
    const [selectedCategory, setSelectedCategory] = useState<string>()
    const [searchText, setSearchText] = useState<string>()
    const [products, setProducts] = useState<ProductEntity[]>([])
    const [userAnalyticsInfo, setUserAnalyticsInfo] = useState<UserAnalyticsSchema>(); 
    const [analyticsInfo, setAnalyticsInfo] = useState<AnalyticsInformationDto>()
    const [cookies] = useCookies([AuthKey])

    useEffect(() => { 
        if (cookies.Authorization === undefined || cookies.Authorization === "") { 
            navigate("/login")
        }
    }, [cookies, navigate])

    useEffect(() => { 
        const categoryApi = new CategoryControllersApi(ApiConfig)
        const gameApi = new GameControllersApi(ApiConfig);

        (async () => { 
            try { 
                let gameResponse = await gameApi.apiGameGet()
                let data = convertObjectToOptions(gameResponse.data)
                setGamesOptions(data)

                let categoryResponse = await categoryApi.apiCategoryGet(selectedGame)
                let catData = convertObjectToOptions(categoryResponse.data)
                setCategoryOptions(catData)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [selectedGame, selectedCategory])
    
    useEffect(() => { 
        (async () => {
            const productApi = new ProductControllersApi(ApiConfig)
            
            try { 
                let response = await productApi.apiProductGet(searchText, selectedCategory, selectedGame, undefined, props.user?.id)
                setProducts(response.data)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [searchText, props.user, selectedCategory, selectedGame])

    useEffect(() => { 
        (async () => {
            try { 
                if (props.user?.id === undefined) { 
                    return; 
                }
                const analyticsApi = new AnalyticsApi(ApiConfig)

                let userAnalyticsResponse = await analyticsApi.apiAnalyticsUserUserIdAnalyticsGet(props.user?.id)
                setUserAnalyticsInfo(userAnalyticsResponse.data)

                // will be changed
                let analyticsInfo = await analyticsApi.apiAnalyticsProductTempProductIdAnalyticsGet("")
                setAnalyticsInfo(analyticsInfo.data)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [props.user])

    const deleteProduct = async (productId: string) => { 
        const productApi = new ProductControllersApi(ApiConfig)

        await productApi.apiProductProductIdDelete(productId)

        let productIndex = products.findIndex((product) => productId === product.id)
        const tempProducts = [...products.slice(0, productIndex), ...products.slice(productIndex + 1, products.length)]
        setProducts(tempProducts)
    }

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
                                    <p className="textvkorobke123">Просмотров <br/>обьявления</p>
                                    <p className="textvkorobke123">Оплачено <br/>покупок</p>
                                </div>
                                <div className="vtoraiakorobka123">
                                    <p className="textvkorobke123">Всего</p>
                                    <p className="numbervkorobke123">{analyticsInfo?.totalViews || 0}</p>
                                    <p className="numbervkorobke123">{userAnalyticsInfo?.reviewsCount || 0}</p>
                                </div>
                                <div className="tretiaiakorobka123">
                                    <p className="textvkorobke123">За неделю</p>
                                    <p className="numbervkorobke123">{analyticsInfo?.viewsInWeek || 0}</p>
                                    <p className="numbervkorobke123">{userAnalyticsInfo?.reviewsCount || 0}</p>
                                </div>
                            </div>

                            <div className="sredniaia-korobka123">
                                <div className="korobkaprostotak321">
                                    <p className="stringstyle321">Выручка</p>
                                    <div className="korobkaprostotak123"><p className="stringstyle123">{analyticsInfo?.revenue.amount || 0} ₽</p></div>
                                </div>
                                
                                <div className="korobkaprostotak321">
                                    <p className="stringstyle321">Обороты</p>
                                    <div className="korobkaprostotak123"><p className="stringstyle123">{analyticsInfo?.revenue.amount || 0} ₽</p></div>
                                </div>
                            </div>

                            <div className="pravaia-korobka123">
                                <div className="korobkaprostotak321">
                                    <p className="stringstyle321">Средняя оценка</p>
                                    <div className="ocenkamid123">
                                        <p className="stringstyle123">{userAnalyticsInfo?.avarageRating}</p>
                                        <StarsComponent stars={userAnalyticsInfo?.avarageRating || 0} width={15} height={15} reviewsCount={userAnalyticsInfo?.reviewsCount || 0}/>
                                    </div>
                                </div>

                                <div className="korobkaprostotak321">
                                    <p className="stringstyle321">Уникальных покупателей</p>
                                    <div className="korobkaprostotak123"><p className="stringstyle123">1</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="korobka-deneg123"></div>
                        <div className="korobka-accaunta123"></div>
                    </div>
                </div>
                <ContentLine />
                <h2 className="analytic-categoryname123">Товары</h2>
                <SearchbarComponent searchText={searchText || ""} onChange={setSearchText} placeholder="Введите название"/> 
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
                            items={products}
                            sortFunction={(product1, product2) => new Date(product2.createdAt || "").getTime() - new Date(product1.createdAt || "").getTime()}
                        />
                        <ItemsSortComponent<ProductEntity>
                            name="По рейтингу"
                            items={products}
                            sortFunction={(product1: ProductEntity, product2: ProductEntity) => 4 - 1}
                        />
                        <ItemsSortComponent<ProductEntity>
                            name="По умолчанию"
                            items={products}
                            sortFunction={(product1, product2) => 1}
                        />
                    </div>
                </div>

                <div className="product-redact123">
                    {products.length > 0 ? products.map((value) => { 
                        if (value.category.id !== selectedCategory && selectedGame !== undefined) { 
                            return null;
                        }
                        if (value.game.id !== selectedGame && selectedGame !== undefined) { 
                            return null; 
                        }
                        return ( 
                            <ProductWithActionsComponent
                                id={value.id}
                                productImage={asFileUrl(value.images[0].id)}
                                name={value.name}
                                views={value.productViewed}
                                description={value.description}
                                acceptButtonClick={() => deleteProduct(value.id)}
                                badButtonClick={() => navigate(`/product/${value.id}/edit`)}
                                badButtonText="Изменить"
                                acceptButtonText="Удалить"
                            />
                        )
                    }) : <p className="none-text">Не найдено продуктов с статусом Processing</p>}
                </div>
            </div>
        </div>
    ); 
}

export default AnalyticsPage; 