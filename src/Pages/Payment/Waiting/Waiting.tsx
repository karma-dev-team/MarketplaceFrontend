import "./Waiting.css";

import cartIcon from "@images/image32.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TransactionControllersApi } from "restclient";
import { ApiConfig } from "src/Gateway/Config";
import { NavbarProps } from "src/Utils/NavbarProps";

const WaitingPage: React.FC<NavbarProps> = (props: NavbarProps) => {
  props.setCategory('Покупки');
  const { id } = useParams();
  const transactionId = id;
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const transactionApi = new TransactionControllersApi(ApiConfig);

      try {
        await transactionApi.apiTransactionTxIdPost(
          transactionId || "",
          {
            transactionId: transactionId || "",
          }
        );
        navigate("/chats")
        
        // Handle response
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
    console.log("I fire once")
  }, []);

  return (
    <div className="root-waiting">
      <div className="container123">
        <img src={cartIcon} alt="shopping cart" width={68} height={68} />
        <br />
        <p className="text-123">Пожалуйста, подождите...</p>
        <p className="text-321">Не перезагружайте страницу. Покупка обрабатывается</p>
      </div>
    </div>
  );
};

export default WaitingPage;
