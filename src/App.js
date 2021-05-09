// import logo from './logo.svg';
import './App.css';
import {Fragment, useState, React, Text} from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {
  const [inputFruit, setInputFruit] = useState("");
  const initialFruits = [];
  const [fruits, setfruits] = useState(initialFruits);
  const [fruitLine, setfruitLine] = useState("");
  function handleFruitNameChange(event){
    setInputFruit(event.target.value);
    console.log("handleFruitNameChange: The updated input fruit is: ",inputFruit);
  }
  // handleAdd
  // input: none
  // return: none
  // method:
  //    1. addfruit function call with unput fruit
  function handleAdd(){
    addFruit(inputFruit);
  }

  // addFruit
  // input: input fruit
  // return: nothing, just add the fruit in fruits list
  // method:
  //    1. clone fruits list into temp list
  //    2. temp fruits e push input fruit
  //    3. set input fruits call with temp fruits
  //    4. call show fruits func
  function addFruit(inputFruit){
    // var temporaryFruits = fruits;
    // temporaryFruits.push(inputFruit);
    // setfruits(temporaryFruits);
    var temporaryFruits = [...fruits];
    console.log("addFruit => temp fruits is: ",temporaryFruits);
    temporaryFruits.push(inputFruit);
    setfruits(temporaryFruits);
    console.log("addFruit => Current fruits list is: ",fruits);
    showFruits();
  }

  // showFruits
  // input: none
  // return: none, just show the current fruits list
  // method:
  //    1. current Fruitline hobe empty str
  //    2. fruits er sob index er jonno:
  //      1. current fruitline e concat korbo cross icon block div er vitore cross icon and fruits er current index
  //    3. setFruitLine method call with current fruit line
  function showFruits(){
    console.log("showFruits => Current fruits list is: ",fruits);
    var currentFruitLine = "";
    for(var index = 0; index < fruits.length; index++){
      // currentFruitLine += <Fragment><FontAwesomeIcon icon={faHome} /></Fragment>  + fruits[index] + '\n';
      currentFruitLine += fruits[index] + '\n';
    }
    setfruitLine(currentFruitLine);
  }
  return (
    <div>
      <div id = "addFruitBlock">
        <div>
          <input id = "inputFruitText" placeholder = "Fruit Name" onChange = {handleFruitNameChange}></input>
        </div>
        <div>
          <button id = "addFruitButton" onClick = {handleAdd}>Add Fruit</button>
        </div>
      </div>
      <div id = "middleBar">

      </div>
      <div id = "showFruitsBlock">
        {fruitLine}
      </div>
    </div>
  );
}

export default App;
