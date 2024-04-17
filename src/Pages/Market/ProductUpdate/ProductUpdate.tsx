import "./ProductUpdate.css"
import ProductCard from "src/Components/ProductCard/ProductCard";
import eye from "@images/eye.png"
import producthuinia from "@images/product_huinia.png"
import zvezda from "@images/star-image.svg"
import testicon from "@images/testico123.png"
import testsmth from "@images/test123.png"
import testico from "@images/testico255.png"
import { range } from "src/Utils/Range";
import StarsComponent from "src/Components/Stars/Stars";
import { useState } from "react";
import Modal from "src/Modals/Base/Base";
import BuyModal from "src/Modals/Buy/Buy";
import { NavbarProps } from "src/Utils/NavbarProps";



const ProductAnalPage: React.FC<NavbarProps> = (props: NavbarProps) => { 
    props.setCategory('Товары') 
    const [buyModal, setBuyModal] = useState<boolean>(false)

    return (
        <div className="root-productanal">
            <Modal isOpen={buyModal} onClose={() => setBuyModal(false)}>
                <BuyModal 
                    price={400}
                    title="Выведение на главную"
                />
            </Modal>
            <div className="productkorobka228335">
                <div className="typonavbar321335">
                    <p className="navinfotext1">Аналитика </p>
                    <div><p className="navtochka">•</p></div>
                    <p className="navinfotext1">Имя игры</p>
                    <div><p className="navtochka">•</p></div>
                    <p className="navinfotext2">Имя товара</p>
                </div>
                <h2 className="productName335">Название товара</h2>
                <div className="viewscount321335">
                    <img src={eye} alt="" />
                    <div className="views321335">999 просмотров</div>
                </div>
                <div className="razedenitel228335">
                    <div className="lefthuinia228335">
                        <img src={producthuinia} alt="product img" />
                    </div>
                    <div className="righthuinia228335">
                        <p className="cenanatovar335">589 ₽</p>
                        <p className="nuopisanienoneopisanie335">250 ГЕМОВ НА ТВОЙ АККАУНТ В <br /> STUMBLE GUYS 250 ГЕМОВ НА <br /> STUMBLE GUYS</p>
                        <p className="securitysdelki335">🔒 Безопасность сделки </p>
                        <div className="karobkadliaotziva335">
                            <div className="ocenkatovara335">
                                <p className="ocenka-number335">4.0</p>
                                <StarsComponent stars={4} width={15} height={15}/>
                                <p className="numberotzivov335">20 отзывов</p>
                            </div>
                        </div>
                        <button className="editbutton228335">Редактировать</button>
                        <button className="kupittovar228335" onClick={() => setBuyModal(true)}>Вывести в топ 🔥</button>
                    </div>
                </div>

                <h3 className="razdeli228335">Описание</h3>
                <h5 className="opisanietovara228335">Ну галымжан где бекенд</h5>

                <h3 className="razdeli228335">Характеристики</h3>
                <div className="rowdliarazdela335">
                    <div className="harakteristika335">
                        <h5 className="nazvanieharakteristiki335">Донат</h5>
                        <p className="opisanieharakteristiki335">1000</p>
                    </div>
                    <div className="harakteristika335">
                        <h5 className="nazvanieharakteristiki335">Донат</h5>
                        <p className="opisanieharakteristiki335">1000</p>
                    </div>
                    <div className="harakteristika335">
                        <h5 className="nazvanieharakteristiki335">Донат</h5>
                        <p className="opisanieharakteristiki335">1000</p>
                    </div>
                    <div className="harakteristika335">
                        <h5 className="nazvanieharakteristiki335">Донат</h5>
                        <p className="opisanieharakteristiki335">1000</p>
                    </div>
                    <div className="harakteristika335">
                        <h5 className="nazvanieharakteristiki335">Донат</h5>
                        <p className="opisanieharakteristiki335">1000</p>
                    </div>
                </div>

                <h3 className="razdeli228335">Продавец</h3>
                <div className="sallerprofile335">
                    <img src={testico} alt="" />
                    <div className="salleropisanie335">
                        <h4 className="sallername335">Галымжан </h4>
                        <div className="karobkadliaotziva335">
                            <div className="ocenkatovara335">
                                <p className="ocenka-number335">4.0</p>
                                <StarsComponent stars={4} width={15} height={15}/>
                            </div>
                            <p className="numberotzivov335">20 отзывов</p>
                        </div>
                    </div>
                </div>

                <h3 className="razdeli228335">Отзывы</h3>
                <div className="galymzhangay335"></div>

                <h3 className="razdeli228335">Похожие товары</h3>
                <div className="rowdliarazdela335">
                    {/* {range(1, 3).map((value) => {
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
                    })} */}
                </div>
            </div>
        </div>
    ); 
}

export default ProductAnalPage; 