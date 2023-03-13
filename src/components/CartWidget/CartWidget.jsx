import styles from "./CartWidget.module.scss";
import React from 'react'

const CartWidget = () => {
  return (
   <div className={styles.carrito}>
    <img className={styles.imagen} src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="" />
    
    <p>6</p>
   </div> 
    )
}

export default CartWidget