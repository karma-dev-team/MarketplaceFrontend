import NavigationMapComponent from "src/Components/NavigationMap/NavigationMap";
import "./CategoryProducts.css"
import data from "@testdata/CategoryProducts.json"
import { useState } from "react"
import SearchbarComponent from "src/Components/Search/Search";
import TagsSearchComponent from "src/Components/Tags/Tags";
import { SelectorAttributes } from "../ProductCreate/Attributes";
import { OptionScheme } from "src/Schemas/Option";
import { OptionTypes } from "src/Schemas/Enums";
import ProductCardComponent from "src/Components/ProductCard/ProductCard";
import ItemsSortComponent from "src/Components/ItemsSorting/ItemsSort";

const CategoryProductsPage: React.FC = () => {  
    let elements = new Map<string, string>()

    elements.set("Главная", "/")
    elements.set("Игры", "/games")
    elements.set(data.game, `/games/${data.game}`)
    elements.set(data.category.title, `/category/${data.category.id}`)

    const [searchText, setSearchText] = useState<string>('')
    const [currentCategory, setCurrentCategory] = useState<string>(''); 

    const onLabelClick = () => { 
        
    }

    let options: OptionScheme[] = []

    data.options.forEach((option) => {
        options.push(
            {
                ...option, 
                type: option.type as OptionTypes
            }
        )
    })

    return (
        <div className="root-categoryproducts">
            <NavigationMapComponent elements={elements} />
            <h1>Аккаунты</h1>
            <SearchbarComponent searchText={searchText} onChange={setSearchText} placeholder="Введите название"/> 
            <div className="categoryproduct-tags">
                <TagsSearchComponent values={data.categories} currentValue={currentCategory} setCurrentValue={setCurrentCategory}/> 
            </div>
            <div>
                <SelectorAttributes options={options} onLabelClick={onLabelClick} width="fit-content"/>
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
            <div className="products-list">
                {data.products.map((value) => { 
                    return ( 
                        <ProductCardComponent 
                            title={value.title}
                            category={value.category}
                            price={value.price}
                            game={value.game}
                            gameImage={value.gameImage}
                            productId={value.id}
                            image={value.image}
                            userStars={value.stars}
                        /> 
                    )
                })}
            </div>
        </div>
    ); 
}

export default CategoryProductsPage; 