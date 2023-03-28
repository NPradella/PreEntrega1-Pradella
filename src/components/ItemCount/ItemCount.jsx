import { useState } from "react";
import styles from "./itemCount.modules.scss";

const ItemCount = ({}) => {
    const [count, setCount] = useState(0);
    
    const restar = () => {
        if (count>0){
            setCount(count - 1);
        }
        
    }

    const sumar = () => {
        setCount(count + 1);
    }
    

    return(
        <div>
            <p>contador: {count}</p>
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount