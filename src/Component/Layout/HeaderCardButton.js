
import {useContext} from 'react'
import CardIcon from '../Cart/CardIcon';
import CardContext from '../../Store/Card-Context';
import classes from "./HeaderCardButton.module.css"

const HeaderCardButton=(props)=> {
  const cartCtx=useContext(CardContext)
  const numberOfCartItem=cartCtx.item.reduce((curNumber,item)=>{
    return curNumber +item.amount
  },0)
 
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
      <CardIcon/>
      </span>
      <span>Your Card</span>
      <span className={classes.badge}>
      {numberOfCartItem}
      </span>
    </button>
  )
}

export default HeaderCardButton
