import React from "react";
import edaImage from "../../assets/eda2.jpeg"
import styles from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) =>{

    return(
    <>
        <header className={styles.header}>
            <h1 className={styles.font}>Еда</h1>
            <HeaderCartButton onclick={props.onShowCart}/>
        </header>
        <div className={styles['main-image']}>
            <img src={edaImage} alt="Блюдо"/>
        </div>
    </>
    )
}

export default Header