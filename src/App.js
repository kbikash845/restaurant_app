// import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css';
import Header from './Component/Layout/Header';
// import Meals from './Component/Meals/Mealss';
import Mealss from './Component/Meals/Mealss';

function App() {
  return (
    <Fragment >
     <Header/>
     <main>
     <Mealss/>
     </main>
    </Fragment>
  );
}

export default App;
