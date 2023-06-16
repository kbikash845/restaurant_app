import {Fragment}from 'react'
// import "./Header.module.css";
import Mealsimage from "../../assets/meals.jpg"
import classes from './Header.module.css'
import HeaderCardButton from './HeaderCardButton'

const Header=(props)=> {
  return (
   <Fragment>
    <header  className={classes.header}>
    <h1>React Meals</h1>
    <HeaderCardButton onClick={props.onShowCard}/>
    
    </header>
    <div className={classes["main-image"]}>
    <img src={Mealsimage} alt='A table full of delicius food'/>
    </div>

    </Fragment>
  )
  
   
  
}

export default Header
