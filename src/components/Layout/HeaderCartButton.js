import React, {useContext, useEffect, useState} from "react";
import CartContext from "../../store/Cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
    const [buttonAnimate, setButtonAnimate] = useState(false)

    const cartContext = useContext(CartContext)

    const cartItemsNumber = cartContext.items.reduce((currentValue,item)=>{
        return currentValue + item.amount
    },0)

    const buttonClasses = `${styles.button} ${buttonAnimate ? styles.bump : ''}`
    useEffect(()=> {
        if(cartContext.items === 0){
            return
        }
        setButtonAnimate(true)
        const timer = setTimeout(()=> {
            setButtonAnimate(false)
        } , 50)
        return ()=> clearTimeout(timer)
    }, [cartContext.items])
 return (
     <>
        <button className={buttonClasses} onClick={props.onclick}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Корзина</span>
             <span className={styles.badge}>
            {cartItemsNumber}
            </span>
        </button>
     </>
)
}

export default HeaderCartButton