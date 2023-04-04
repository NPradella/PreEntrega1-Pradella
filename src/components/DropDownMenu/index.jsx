import React from 'react'
import { useEffect, useState } from "react";
import DropDownItem from '../DropDownItem';
import { NavLink } from "react-router-dom";
import styles from './dropDownMenu.module.scss';

const DropDownMenu = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className={styles.menuContainer}>
        <div className="menu-trigger" onClick= {()=> {setOpen(!open)}}>
            <h3>Categories</h3>
        </div>

        <div className={`${open? 'styles.dropDownMenu.active': 'styles.dropDownMenu.inactive'}`}>
            
        <ul>
            <NavLink
                to="/products/men's clothing"
                >
                <DropDownItem category={"Men's clothing"} />
            </NavLink>
            <NavLink
                to="/products/jewelery"
                >
                <DropDownItem category={"Jewlery"} />
            </NavLink>
            <NavLink
                to="/products/women's clothing"
                >
                <DropDownItem category={"Women's clothing"} />
            </NavLink>
            <NavLink
                to="/products/electronics"
                >
                <DropDownItem category={"Electronics"} />
            </NavLink>
            
            <div>
      
    </div>
            
            
        </ul>
        </div>
    </div>
  )
}


export default DropDownMenu