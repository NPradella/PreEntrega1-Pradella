import styles from "./navbar.module.scss";
import CartWidget from "../CartWidget/CartWidget";
const Navbar = ({}) => {
  return (
    <nav className={styles.container}>
      
      <div className={styles.barra}>
      <div>
        <a href="">La Taberna del Jugón</a>
      </div>
      <div className={styles.barra}>
        <a href="">Inicio</a>
        <a href="">Juegos</a>
        <a href="">Acerca De</a>
        <CartWidget/>
      </div>
            
      </div>
    </nav>
  )
}

export default Navbar