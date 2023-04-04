import { Link } from "react-router-dom";
import styles from "./item.module.scss";
import ItemCount from "../ItemCount"
const Item = ({ producto }) => {
  return (
    <Link to={`${producto.id}`}>
      <div className={styles.container}>
        <h3>{producto.title}</h3>
        <img
          src={producto.image}
          alt={producto.title}
          width="200"
          height="250"
        />
        <p>{producto.description}</p>
        <p>$ {producto.price}</p>
      </div>
    </Link>    
  );
};

export default Item;