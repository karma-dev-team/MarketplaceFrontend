import "./ProductApprove.css"
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ProductControllersApi, ProductEntity } from "restclient";
import ContentLine from "src/Components/ContentLine/ContentLine";
import ProductWithActionsComponent from "src/Components/ProductWithActions/ProductWithActions";
import SearchbarComponent from "src/Components/Search/Search";
import StaffControlsComponent from "src/Components/StaffControls/StaffControls";
import TagsSearchComponent from "src/Components/Tags/Tags";
import { ApiConfig, asFileUrl } from "src/Gateway/Config";
import { AuthKey } from "src/Gateway/Consts";
import { SelectorAttributes } from "src/Pages/Market/ProductCreate/Attributes";
import { StaffCategories } from "src/Schemas/Enums";
import { NavbarProps } from "src/Utils/NavbarProps";

const ProductApprovePage: React.FC<NavbarProps> = (props: NavbarProps) => {  
    props.setCategory("Управление")

    const [category, setCategory] = useState<StaffCategories>('APPROVED')
    const navigate = useNavigate()
    const [cookies, setCookies] = useCookies([AuthKey])
    const [products, setProducts] = useState<ProductEntity[]>([])
    const [searchText, setSearchText] = useState<string>()
    const productApi = new ProductControllersApi(ApiConfig)

    useEffect(() => { 
        if (cookies.Authorization === undefined || cookies.Authorization === "") { 
            navigate("/login")
        }
    }, [cookies])

    useEffect(() => { 
        (async () => { 

            try { 
                let productResponse = await productApi.apiProductGet(searchText, undefined, undefined, "Processing")
                setProducts(productResponse.data)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [searchText])

    const approveProduct = async (productId: string) => { 
        try { 
            await productApi.apiProductProductIdPatch(productId, { 
                productId: productId, 
                productStatus: "Approved"
            })
            let productIndex = products.findIndex((product) => productId === product.id)

            const tempProducts = [...products.slice(0, productIndex), ...products.slice(productIndex + 1, products.length)]
            setProducts(tempProducts)
        } catch (e) { 
            console.error(e)
        } 
    }

    const denyProduct = async (productId: string) => { 
        try { 
            await productApi.apiProductProductIdPatch(productId, { 
                productId: productId, 
                productStatus: "Declined"
            })
            
            let productIndex = products.findIndex((product) => productId === product.id)
            const tempProducts = [...products.slice(0, productIndex), ...products.slice(productIndex + 1, products.length)]
        } catch (e) { 
            console.error(e)
        } 
    }

    return (
        <div className="root-productapprove">
            <h1>Управление сайтом</h1>
            <ContentLine color="#4F5A71"/>
            <div className="productapprove-container">
                <div className="productapprove-content">
                    <SearchbarComponent searchText={searchText || ''} onChange={() => null} onSubmit={(v) => setSearchText(v)} placeholder="Введите название..."/>
                    <div className="productstoapprove-list">
                        {products.length > 0 ? products.map((value) => { 
                            return ( 
                                <ProductWithActionsComponent
                                    id={value.id}
                                    productImage={asFileUrl(value.images[0].id)}
                                    name={value.name}
                                    views={value.productViewed}
                                    description={value.description}
                                    acceptButtonClick={() => approveProduct(value.id)}
                                    badButtonClick={() => denyProduct(value.id)}
                                />
                            )
                        }) : <p className="none-text">Не найдено продуктов с статусом Processing</p>}
                    </div>

                </div>
                <StaffControlsComponent setCategory={setCategory} currentCategory={category} user={props.user}/>
            </div>
        </div>
    ); 
}

export default ProductApprovePage; 