import styles from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import {useContext} from "react";
import CartContext from "../../../store/Cart-context";

const MealItem = (props)=>{
        const cartContext = useContext(CartContext)


        const addCartItemHandler = (amount) =>{
            cartContext.addItem({
                id: props.id,
                name: props.name,
                amount: amount,
                price: props.price
            })
        }

return (
    <li className={styles.meal}>
        <div>
            <h3>{props.name}</h3>
            <img className={styles.imgpic} src={props.img}/>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.price}>{props.price} $</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addCartItemHandler} id ={props.id}/>
        </div>
    </li>
)
}

export default MealItem