// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

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
  //    1. temporary fruits naam e ekta var banabo jar value hobe fruits state variable
  //    2. temporary fruits e append korbo input fruit
  //    3. setFruits method call with temporary fruits
  //    4. showFruits method call
  function addFruit(inputFruit){
    var temporaryFruits = fruits;
    temporaryFruits.push(inputFruit);
    setfruits(temporaryFruits);
    showFruits();
  }

  // showFruits
  // input: none
  // return: none, just show the current fruits list
  // method:
  //    1. current Fruitline hobe fruitline er soman
  //    2. fruits er sob index er jonno:
  //      1. current fruitline e concat korbo cross icon block div er vitore cross icon and fruits er current index
  //    3. showFruitsBlock e html akare dekhabo current fruit line
  //    4. setFruitLine method call with current fruit line
  function showFruits(){
    console.log("showFruits => Current fruits list is: ",fruits);
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
        <div>
          <button id = "showFruitButton" onClick = {showFruits}>Show Fruits</button>
        </div>
      </div>
      <div id = "middleBar">

      </div>
      <div id = "showFruitsBlock">

      </div>
    </div>
  );
}

export default App;
