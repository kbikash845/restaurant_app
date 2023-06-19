import React from 'react'
import CardContext from './Card-Context'

function CardProvider(props) {

    const AddItemCardHandler=item=>{};
    const RemoveItemCardHandler=item=>{}

    const cardContext={
      item:[] ,
      totalAmount:0,
      addItem: AddItemCardHandler,
      removeItem:RemoveItemCardHandler
    }
  return (
    <CardContext.Provider value={cardContext}>
      {props.children}
    </CardContext.Provider>
  )
}

export default CardProvider;
