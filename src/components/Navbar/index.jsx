import styles from "./navbar.module.scss";
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from "react-router-dom";
import DropDownMenu from "../DropDownMenu";


const Navbar = ({}) => {

    const activeStyle = {
      color: "aqua",
    };


  return (
    <nav className={styles.container}>
      
      <div className={styles.barra}>
      <NavLink
        to="/"
      >
        <p>La Taberna del Jugon</p>
      </NavLink>
      <div className={styles.barra}>
      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Home</p>
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Products</p>
        </NavLink>
        <DropDownMenu />
        <CartWidget />
      
      </div>
            
      </div>
    </nav>
  )
}

export default Navbar