import styles from "../styles/MobileBasket.module.scss";
import emptyCardImg from "../images/empty_cart.svg";
import BasketItem from "./BasketItem";
import { BasketContext } from "../context/BasketContext";
import { useContext } from "react";
import GetIcon from "./GetIcon";
import Title from "./Title";
import swal from 'sweetalert';

const MobileBasket = () => {
  const { basketItems, basketTotal: _basketTotal,setBasketItems, setBasketTotal } = useContext(BasketContext);
  const openModel = () => {
	  swal(
      "Payment Done",
      "Your Order placed successfully ",
      "success"
    ).then((value) => {
      setBasketItems([]);
      setBasketTotal(0)
    });;
	}
  return (
    <div className={styles.mobileBasket}>
      {basketItems.length > 0 ? (
        <>
          {basketItems.map((item, key) => (
            <BasketItem data={item} key={key} />
          ))}
          <div className={styles.basketTotal}>
            <div className={styles.total}>
              <Title txt="basket summary" size={23} transform="uppercase" />
              <GetIcon icon="BsFillCartCheckFill" size={25} />
            </div>
            <div className={styles.totalPrice}>
              <small>total</small>
              <div className={styles.price}>
                <span>{_basketTotal.toFixed(2)}</span>
              </div>
            </div>
            <button type="button" onClick={() => openModel()} className={styles.confirmBtn}>
              Confirm the Order
            </button>
          </div>
        </>
      ) : (
        <div className={styles.emptyBasket}>
          <img src={emptyCardImg} alt="" />
          <Title txt="your basket is empty" size={23} transform="uppercase" />
        </div>
      )}
    </div>
  );
};

export default MobileBasket;
