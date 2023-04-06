import React from 'react'
import { useEffect, useState } from "react";
import DropDownItem from '../DropDownItem';
import { NavLink } from "react-router-dom";
import styles from './dropDownMenu.module.scss';

const DropDownMenu = () => {
    const [open, setOpen] = useState(false);
    return (
      <div className={styles.menuContainer}>
        <div className="menu-trigger" onClick={() => setOpen(!open)}>
          <h3>Categories</h3>
        </div>
  
        <div className={`${open ? styles.dropDownMenu.active : styles.dropDownMenu.inactive}`}>
          <ul>
            <NavLink to="/category/men's clothing">
                <DropDownItem category={"men's clothing"} />
            </NavLink>
            <NavLink to="/category/jewelery">
                <DropDownItem category={"Jewelry"} />
            </NavLink>
            <NavLink to="/category/women's clothing">
                <DropDownItem category={"Women's clothing"} />
            </NavLink>
            <NavLink to="/category/electronics">
                <DropDownItem category={"Electronics"} />
            </NavLink>
          </ul>
        </div>
      </div>
    );
  };
  
  export default DropDownMenu;