// import logo from './logo.svg';
import { Fragment, useState } from 'react';
import './App.css';
import Header from './Component/Layout/Header';
// import Meals from './Component/Meals/Mealss';
import Mealss from './Component/Meals/Mealss';
import Card from './Component/Cart/Card';

function App() {
   const [cardIsShown,SetCardIsShown]=useState(false)

   const showCard=()=>{
    SetCardIsShown(true)
   }
   const hidenshowcard=()=>{
    SetCardIsShown(false)
   }
  return (
    <Fragment >
    { cardIsShown && <Card onClosed={hidenshowcard}/>}
     <Header onShowCard={showCard}/>
     <main>
     <Mealss/>
     </main>
    </Fragment>
  );
}

export default App;
