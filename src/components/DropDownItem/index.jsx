import React from 'react'
import { Link } from "react-router-dom";
import styles from "./dropDownItem.modules.scss";
const DropDownItem = (item) => {
  return (
    <li className="dropDownItem">
        <p>{item.category}</p>
    </li>
  )
}

export default DropDownItem