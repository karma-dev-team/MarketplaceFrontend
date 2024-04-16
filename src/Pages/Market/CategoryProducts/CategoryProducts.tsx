import NavigationMapComponent from "src/Components/NavigationMap/NavigationMap";
import "./CategoryProducts.css"
import data from "@testdata/CategoryProducts.json"
import { useEffect, useState } from "react"
import SearchbarComponent from "src/Components/Search/Search";
import TagsSearchComponent from "src/Components/Tags/Tags";
import { SelectorAttributes } from "../ProductCreate/Attributes";
import ProductCardComponent from "src/Components/ProductCard/ProductCard";
import ItemsSortComponent from "src/Components/ItemsSorting/ItemsSort";
import { NavbarProps } from "src/Utils/NavbarProps";
import { CategoryControllersApi, CategoryEntity, GameControllersApi, GameEntity, OptionEntity, ProductControllersApi, ProductEntity } from "restclient";
import { ApiConfig } from "src/Gateway/Config";
import { useNavigate, useParams } from "react-router-dom";
import { OptionType } from "src/Schemas/Option";

const CategoryProductsPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('Каталог игр') 
    let elements = new Map<string, string>()

    const { id } = useParams()
    if (id === undefined) { 
        throw new Error("id is none") 
    }

    elements.set("Главная", "/")
    elements.set("Игры", "/games")
    elements.set(data.game, `/games/${data.game}`)
    elements.set(data.category.title, `/category/${data.category.id}`)

    const navigate = useNavigate()
    const [game, setGame] = useState<GameEntity>()
    const [searchText, setSearchText] = useState<string>('')
    const [currentCategory, setCurrentCategory] = useState<CategoryEntity>(); 
    const [products, setProducts] = useState<ProductEntity[]>([])
    const [searchTextSubmited, setSubmitedText] = useState<string>('')
    const [options, setOptions] = useState<Map<string, string>>()

    const onLabelClick = (option: OptionType) => { 
        if (options === undefined) { 
            setOptions(new Map<string, string>())
        }
        options?.set(option.label, option.value)
        setOptions(options)
    }

    const productApi = new ProductControllersApi(ApiConfig)
    const categoryApi = new CategoryControllersApi(ApiConfig)
    const gameApi = new GameControllersApi(ApiConfig)

    useEffect(() => { 
        (async () => {
            try { 

                const responseCategory = await categoryApi.apiCategoryCategoryIdGet(id)
                setCurrentCategory(responseCategory.data)

                const responseGame = await gameApi.apiGameGameIdGet(responseCategory.data.gameID || ""); 
                setGame(responseGame.data)
            } catch (e) { 
                console.error(e)
            }
            
        })()
    }, [searchTextSubmited])

    useEffect(() => { 
        (async () => { 
            const responseProducts = await productApi.apiProductGet(
                searchText === '' ? undefined : searchText, currentCategory?.id, game?.id, "Approved", undefined) 
            setProducts(responseProducts.data)
        })()
    }, [searchTextSubmited, currentCategory, game])

    const changeCategory = async (name: string) => { 
        var category = game?.categories?.find(x => x.name === name)
        console.log(category)
        if (category) { 
            setSubmitedText(searchTextSubmited)
            setCurrentCategory(category)
            navigate(`/category/${category.id}`)
        }
    }
    const categoryNames: string[] = []

    game?.categories?.map((value) => { 
        categoryNames.push(value.name)
    }) 

    return (
        <div className="root-categoryproducts">
            <NavigationMapComponent elements={elements} />
            <h1>Аккаунты</h1>
            <SearchbarComponent searchText={searchText} onChange={setSearchText} placeholder="Введите название" onSubmit={(v) => setSubmitedText(v)}/> 
            <div className="categoryproduct-tags">
                <TagsSearchComponent values={categoryNames} currentValue={currentCategory?.name || ""} setCurrentValue={changeCategory}/> 
            </div>
            <div>
                <SelectorAttributes options={currentCategory?.options || []} onLabelClick={onLabelClick} width="fit-content"/>
            </div>
            <div className="categoryproduct-sorter">
            <div className="transaction-filter-sort">
                    <p className="filter-sorting-header">Сортировать: </p>
                    <ItemsSortComponent name="По умолчянию" items={data.products} sortFunction={(product, product2) => { 
                        return new Date(product.createdAt).getTime() - new Date(product2.createdAt).getTime();
                    }}/>
                    <ItemsSortComponent name="По дате" items={data.products} sortFunction={(product, product2) => { 
                        return new Date(product.createdAt).getTime() - new Date(product2.createdAt).getTime();
                    }}/>
                </div>
            </div>
            {products.length > 0 ? 
            <div className="products-list">
                {products.map((value) => { 
                    return ( 
                        <ProductCardComponent 
                            title={value.name}
                            category={value.category.name}
                            price={value.basePrice.amount}
                            game={value.category.name}
                            gameImage={game?.logo.id || ""}
                            productId={value.id}
                            image={value.images[0].id}
                            userStars={4} // Исправить
                        /> 
                    )
                })} 
            </div>
            : <div className="none-text">Товары не найдены по вашему запросу</div>}
        </div>
    ); 
}

export default CategoryProductsPage; 