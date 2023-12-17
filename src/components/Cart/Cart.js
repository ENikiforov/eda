import styles from "./Cart.module.css"
import Modal from "../Ui/Modal";
import {useContext} from "react";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem";

const Cart =(props) => {
    const cartContext = useContext(CartContext)
    const totalAmount = `${cartContext.totalAmount.toFixed(2)}`
    const hasItems = cartContext.items.length > 0
    const addItemHandler = (item) =>{
        cartContext.addItem({...item, amount: 1})
    }
    const removeItemHandler = (id) =>{
        cartContext.removeItem(id)
    }

    const cartItems = (
        <ul className={styles["cart-items"]}>
            {cartContext.items.map((item) => (
                <CartItem
                    key = {item.id}
                    name={item.name}
                    amount ={item.amount}
                    price ={item.price}
                    onRemove = {removeItemHandler.bind(null, item.id)}
                    onAdd={addItemHandler.bind(null, item)}
                />
            ))}

        </ul>
    )

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Итого</span>
                <span>{totalAmount} $</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onHideCart}>закрыть</button>
                {hasItems && <button className={styles.button}>заказать</button>}
            </div>
        </Modal>

    )
}
export default Cart