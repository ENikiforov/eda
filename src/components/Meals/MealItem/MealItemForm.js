import styles from "./MealItemForm.module.css"
import Input from "../../Ui/Input";
import {useRef, useState} from "react";


const MealItemForm = (props)=>{
    const[isValidAmount, setValidAmount] = useState(true)

    const amountInputRef = useRef()

    const submitHandler = (event) =>{
        event.preventDefault()
        const inputAmount = amountInputRef.current.value
        if (inputAmount.trim().length===0 || +inputAmount < 1 || +inputAmount > 10 ){
            setValidAmount(false)
                return
        }
        props.onAddToCart(+inputAmount)
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref ={amountInputRef}
                label ="Количество"
                   input={{
                   id: props.idMeal,
                   type: "number",
                   min: "1",
                   step: "1",
                   defaultValue: "1"
                   }}
            />
            <button>
                добавить
            </button>
            {!isValidAmount && <p>Введите от 1 до 10</p>}
        </form>

    )
}

export default MealItemForm