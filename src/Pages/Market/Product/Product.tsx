import "./Product.css"
import ProductCard from "src/Components/ProductCard/ProductCard";
import eye from "@images/eye.png"
import producthuinia from "@images/product_huinia.png"
import StarsComponent from "src/Components/Stars/Stars";
import Modal from "src/Modals/Base/Base";
import { useEffect, useState } from "react";
import BuyModal from "src/Modals/Buy/Buy";
import { NavbarProps } from "src/Utils/NavbarProps";
import { AnalyticsApi, AnalyticsInformationDto, ProductControllersApi, ProductEntity, UserAnalyticsSchema } from "restclient";
import { ApiConfig, asFileUrl } from "src/Gateway/Config";
import { useParams } from "react-router-dom";


const ProductPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('Товары') 
    const [buyModal, setBuyModal] = useState<boolean>(false)

    const openBuyModal = () => { 
        setBuyModal(true)
    }

    const { id } = useParams()
    const productId = id; 
    const [product, setProduct] = useState<ProductEntity>()
    const [otherProducts, setOtherProducts] = useState<ProductEntity[]>()
    const [analyticsInfo, setAnalyticsInfo] = useState<AnalyticsInformationDto>(); 
    const [userAnalyitcsInfo, setUserAnalyitcsInfo] = useState<UserAnalyticsSchema>()
    const productApi = new ProductControllersApi(ApiConfig)
    const [productOptions, setProductOptions] = useState<{[key: string]: string}>({})

    useEffect(() => { 
        (async () => {
            const analyticsApi = new AnalyticsApi(ApiConfig)


            try { 
                let productResponse = await productApi.apiProductProductIdGet(productId || "")
                setProduct(productResponse.data)
                
                let otherProductsResp = await productApi.apiProductGet(undefined, productResponse.data.category.id)
                setOtherProducts(otherProductsResp.data)

                let userAnalyticsResponse = await analyticsApi.apiAnalyticsUserUserIdAnalyticsGet(productResponse.data.createdBy.id || "")
                setUserAnalyitcsInfo(userAnalyticsResponse.data)

                let analyticsResponse = await analyticsApi.apiAnalyticsProductTempProductIdAnalyticsGet("", productResponse.data.id)
                setAnalyticsInfo(analyticsResponse.data)

                setProductOptions(JSON.parse(productResponse.data.attributes || "{}"))
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [])

    return (
        <div className="root-product">
            <Modal isOpen={buyModal} onClose={() => setBuyModal(false)}>
                <BuyModal price={589}/>
            </Modal> 

            <div className="productkorobka228">
                <div className="typonavbar321">
                    <p className="nav-infotext1">Главная </p>
                    <div><p className="nav-tochka">•</p></div>
                    <p className="nav-infotext1">Игры</p>
                    <div><p className="nav-tochka">•</p></div>
                    <p className="nav-infotext1">{product?.game.name}</p>
                    <div><p className="nav-tochka">•</p></div>
                    <p className="nav-infotext1">{product?.category.name}</p>
                    <div><p className="nav-tochka">•</p></div>
                    <p className="nav-infotext2">{product?.name}</p>
                </div>
                <h2 className="productName">{product?.name}</h2>
                <div className="viewscount321">
                    <img src={eye} alt="" />
                    <div className="views321">{analyticsInfo?.totalViews}</div>
                </div>
                <div className="razedenitel228">
                    <div className="lefthuinia228">
                        <img src={producthuinia} alt="product img" />
                    </div>
                    <div className="righthuinia228">
                        <p className="cenanatovar">{product?.currentPrice?.amount || 0} ₽</p>
                        <p className="nuopisanienoneopisanie">{product?.description}</p>
                        <p className="securitysdelki">🔒 Безопасность сделки </p>
                        <div className="karobkadliaotziva">
                            <div className="ocenkatovara">
                                <p className="ocenka-number">{userAnalyitcsInfo?.avarageRating}</p>
                                <StarsComponent stars={userAnalyitcsInfo?.avarageRating || 0} width={15} height={15}/>
                                <p className="numberotzivov">1</p>
                            </div>
                        </div>
                        <button className="kupittovar228" onClick={(e) => openBuyModal()}>Купить</button>
                    </div>
                </div>

                <h3 className="razdeli228">Описание</h3>
                <h5 className="opisanietovara228">{product?.description}</h5>

                <h3 className="razdeli228">Характеристики</h3>
                <div className="rowdliarazdela">
                    {Object.entries(productOptions).map((value) => 
                        <div className="harakteristika">
                            <h5 className="nazvanieharakteristiki">{value[0]}</h5>
                            <p className="opisanieharakteristiki">{value[1]}</p>
                        </div>
                    )}
                </div>

                <h3 className="razdeli228">Продавец</h3>
                <div className="sallerprofile">
                    <img src={asFileUrl(product?.createdBy.image?.id)} alt="" width={50} height={50} />
                    <div className="salleropisanie">
                        <h4 className="sallername">{product?.createdBy.userName}</h4>
                        <div className="karobkadliaotziva">
                            <div className="ocenkatovara">
                                <p className="ocenka-number">{userAnalyitcsInfo?.avarageRating}</p>
                                <StarsComponent stars={userAnalyitcsInfo?.avarageRating || 0} width={15} height={15}/>
                            </div>
                            <p className="numberotzivov">{userAnalyitcsInfo?.avarageRating} отзывов</p>
                        </div>
                    </div>
                </div>

                <h3 className="razdeli228">Отзывы</h3>
                <div className="arslangay"></div>

                <h3 className="razdeli228">Похожие товары</h3>
                <div className="rowdliarazdela">
                    {otherProducts?.map((value) => {
                        if (value.id === productId) { 
                            return null; 
                        }
                        return <ProductCard 
                            title={value.name}
                            category={value.category.name}
                            price={value.basePrice.amount}
                            game={value.category.name}
                            gameImage={value.game.logo.id}
                            productId={value.id}
                            image={value.images[0].id}
                            userStars={4} // Исправить
                        />
                    })}
                </div>
            </div>
        </div>
    ); 
}

export default ProductPage; 