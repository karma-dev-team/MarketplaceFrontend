import "./Product.css"
import ProductCard from "src/Components/ProductCard/ProductCard";
import eye from "@images/eye.png"
import producthuinia from "@images/product_huinia.png"
import zvezda from "@images/star-image.svg"
import testicon from "@images/testico123.png"
import testsmth from "@images/test123.png"
import testico from "@images/testico255.png"
import { range } from "src/Utils/Range";
import StarsComponent from "src/Components/Stars/Stars";
import Modal from "src/Modals/Base/Base";
import { useState } from "react";
import BuyModal from "src/Modals/Buy/Buy";
import { NavbarProps } from "src/Utils/NavbarProps";


const ProductPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('Товары') 
    const [buyModal, setBuyModal] = useState<boolean>(false)

    const openBuyModal = () => { 
        setBuyModal(true)
    }

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
                    <p className="nav-infotext1">Garry's mod</p>
                    <div><p className="nav-tochka">•</p></div>
                    <p className="nav-infotext1">Аккаунты</p>
                    <div><p className="nav-tochka">•</p></div>
                    <p className="nav-infotext2">Имя товара</p>
                </div>
                <h2 className="productName">Название товара</h2>
                <div className="viewscount321">
                    <img src={eye} alt="" />
                    <div className="views321">999 просмотров</div>
                </div>
                <div className="razedenitel228">
                    <div className="lefthuinia228">
                        <img src={producthuinia} alt="product img" />
                    </div>
                    <div className="righthuinia228">
                        <p className="cenanatovar">589 ₽</p>
                        <p className="nuopisanienoneopisanie">250 ГЕМОВ НА ТВОЙ АККАУНТ В <br /> STUMBLE GUYS 250 ГЕМОВ НА <br /> STUMBLE GUYS</p>
                        <p className="securitysdelki">🔒 Безопасность сделки </p>
                        <div className="karobkadliaotziva">
                            <div className="ocenkatovara">
                                <p className="ocenka-number">4.0</p>
                                <StarsComponent stars={4} width={15} height={15}/>
                                <p className="numberotzivov">20 отзывов</p>
                            </div>
                        </div>
                        <button className="kupittovar228" onClick={(e) => openBuyModal()}>Купить</button>
                    </div>
                </div>

                <h3 className="razdeli228">Описание</h3>
                <h5 className="opisanietovara228">Ну галымжан где бекенд</h5>

                <h3 className="razdeli228">Характеристики</h3>
                <div className="rowdliarazdela">
                    <div className="harakteristika">
                        <h5 className="nazvanieharakteristiki">Донат</h5>
                        <p className="opisanieharakteristiki">1000</p>
                    </div>
                    <div className="harakteristika">
                        <h5 className="nazvanieharakteristiki">Донат</h5>
                        <p className="opisanieharakteristiki">1000</p>
                    </div>
                    <div className="harakteristika">
                        <h5 className="nazvanieharakteristiki">Донат</h5>
                        <p className="opisanieharakteristiki">1000</p>
                    </div>
                    <div className="harakteristika">
                        <h5 className="nazvanieharakteristiki">Донат</h5>
                        <p className="opisanieharakteristiki">1000</p>
                    </div>
                    <div className="harakteristika">
                        <h5 className="nazvanieharakteristiki">Донат</h5>
                        <p className="opisanieharakteristiki">1000</p>
                    </div>
                </div>

                <h3 className="razdeli228">Продавец</h3>
                <div className="sallerprofile">
                    <img src={testico} alt="" />
                    <div className="salleropisanie">
                        <h4 className="sallername">Галымжан </h4>
                        <div className="karobkadliaotziva">
                            <div className="ocenkatovara">
                                <p className="ocenka-number">4.0</p>
                                <StarsComponent stars={4} width={15} height={15}/>
                            </div>
                            <p className="numberotzivov">20 отзывов</p>
                        </div>
                    </div>
                </div>

                <h3 className="razdeli228">Отзывы</h3>
                <div className="galymzhangay"></div>

                <h3 className="razdeli228">Похожие товары</h3>
                <div className="rowdliarazdela">
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

export default ProductPage; 