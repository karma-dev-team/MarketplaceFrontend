import "./Product.css"
import ProductCard from "src/Components/ProductCard/ProductCard";
import eye from "@images/eye.png"
import StarsComponent from "src/Components/Stars/Stars";
import Modal from "src/Modals/Base/Base";
import { useEffect, useState } from "react";
import BuyModal from "src/Modals/Buy/Buy";
import { NavbarProps } from "src/Utils/NavbarProps";
import { AnalyticsApi, AnalyticsInformationDto, ProductControllersApi, ProductEntity, ProductEntityStatusEnum, ReviewControllersApi, ReviewEntity, UserAnalyticsSchema } from "restclient";
import { ApiConfig, asFileUrl } from "src/Gateway/Config";
import { useParams } from "react-router-dom";
import ReviewComponent from "src/Components/Review/Review";


const ProductPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('Товары') 
    const [buyModal, setBuyModal] = useState<boolean>(false)

    const openBuyModal = () => { 
        setBuyModal(true)
    }

    const { id } = useParams()
    const productId = id; 
    const [product, setProduct] = useState<ProductEntity>()
    const [otherProducts, setOtherProducts] = useState<ProductEntity[]>([])
    const [analyticsInfo, setAnalyticsInfo] = useState<AnalyticsInformationDto>(); 
    const [userAnalyitcsInfo, setUserAnalyitcsInfo] = useState<UserAnalyticsSchema>()
    const [productOptions, setProductOptions] = useState<{[key: string]: string}>({})
    const [reviews, setReviews] = useState<ReviewEntity[]>([])

    useEffect(() => { 
        (async () => {
            const productApi = new ProductControllersApi(ApiConfig)
            const analyticsApi = new AnalyticsApi(ApiConfig)
            const reviewsApi = new ReviewControllersApi(ApiConfig)

            try { 
                let productResponse = await productApi.apiProductProductIdGet(productId || "")
                setProduct(productResponse.data)
                
                let otherProductsResp = await productApi.apiProductGet(
                    undefined, productResponse.data.category.id, undefined)
                setOtherProducts(otherProductsResp.data)

                let userAnalyticsResponse = await analyticsApi.apiAnalyticsUserUserIdAnalyticsGet(productResponse.data.createdBy.id || "")
                setUserAnalyitcsInfo(userAnalyticsResponse.data)

                setProductOptions(JSON.parse(productResponse.data.attributes || "{}"))
                let analyticsResponse = await analyticsApi.apiAnalyticsProductTempProductIdAnalyticsGet(productResponse.data.id, productResponse.data.id)
                setAnalyticsInfo(analyticsResponse.data)

                let reviewsResponse = await reviewsApi.apiReviewUserUserIdGet(productResponse.data.createdBy.id, 0, 5)

                setReviews(reviewsResponse.data)
            } catch (e) { 
                console.error(e)
            }
        })()
    }, [productId])

    return (
        <div className="root-product">
            <Modal isOpen={buyModal} onClose={() => setBuyModal(false)}>
                <BuyModal price={product?.currentPrice.amount || 0}  productId={product?.id}/>
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
                        <img src={asFileUrl(product?.images[0].id)} alt="product img" />
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
                        
                        {product?.status === ProductEntityStatusEnum.Sold ? 
                            <div className="product-is-sold">
                                Куплен
                            </div>
                        : <button className="kupittovar228" onClick={(e) => openBuyModal()}>Купить</button> }
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
                    {product?.createdBy.image !== undefined || product?.createdBy.image !== null ? 
                        <img src={asFileUrl(product?.createdBy.image?.id || "")} alt="" width={50} height={50} />
                    : null}
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
                <div className="arslangay">
                    {reviews.map((value) => {
                        return <ReviewComponent 
                            review={value}
                            userStars={4}
                            product={product}
                        />
                    })}
                </div>

                <h3 className="razdeli228">Похожие товары</h3>
                <div className="rowdliarazdela">
                    {otherProducts.length > 0 ? otherProducts?.map((value) => {
                        if (value.id === productId) { 
                            return null; 
                        }
                        return <ProductCard 
                            product={value}
                            userStars={4} // Исправить
                        />
                    }) : <p className="none-text">Отсвутсвуют похожие продукты</p>}
                </div>
            </div>
        </div>
    ); 
}

export default ProductPage; 