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
  const [retryCount, setRetryCount] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      if (transactionId === undefined) {
        throw new Error("no transaction id");
      }
      const transactionApi = new TransactionControllersApi(ApiConfig);

      try {
        const response = await transactionApi.apiTransactionTxIdPost(
          transactionId,
          {
            transactionId: transactionId,
          }
        );
        navigate("/chats")
        
        // Handle response
      } catch (e) {
        console.error(e);
        // Retry logic
        if (retryCount < 3) {
          setTimeout(() => {
            setRetryCount(retryCount + 1);
          }, 2000); // Retry after 5 seconds
        } else {
          console.error("Max retries exceeded");
          // Handle max retries exceeded
        }
      }
    };

    fetchData();
  }, [id, retryCount]);

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
