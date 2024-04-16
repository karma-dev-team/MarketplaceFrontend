import "./ProductApprove.css"
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ProductControllersApi, ProductEntity } from "restclient";
import ContentLine from "src/Components/ContentLine/ContentLine";
import SearchbarComponent from "src/Components/Search/Search";
import StaffControlsComponent from "src/Components/StaffControls/StaffControls";
import TagsSearchComponent from "src/Components/Tags/Tags";
import { ApiConfig } from "src/Gateway/Config";
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

    useEffect(() => { 
        (async () => { 
            const productApi = new ProductControllersApi(ApiConfig)

            try { 
                let productResponse = await productApi.apiProductGet(searchText, undefined, undefined, "Processing")
                setProducts(productResponse.data)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [searchText])

    return (
        <div className="root-productapprove">
            <h1>Управление сайтом</h1>
            <ContentLine color="#4F5A71"/>
            <div className="productapprove-container">
                <div className="productapprove-content">
                    <SearchbarComponent searchText={searchText || ''} onChange={() => null} onSubmit={(v) => setSearchText(v)} placeholder="Введите название..."/>
                    
                </div>
                <StaffControlsComponent setCategory={setCategory} currentCategory={category} user={props.user}/>
            </div>
        </div>
    ); 
}

export default ProductApprovePage; 