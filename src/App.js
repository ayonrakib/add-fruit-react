// import logo from './logo.svg';
import './App.css';
import {Fragment, useState, React, Text, useEffect} from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function Example() {
//   const [count, setCount] = useState(0);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

function App() {
  const [inputFruit, setInputFruit] = useState("");
  const initialFruits = [];
  const [fruits, setfruits] = useState(initialFruits);
  const [fruitLines, setfruitLines] = useState([]);

  useEffect(() => {
    console.log("useEffect: value of fruits is:", fruits);
    console.log("useEffect: value of fruitLines is:", fruitLines);
    console.log("useEffect: value of input fruit is:", inputFruit);
    console.log(fruitLines);
  });
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
  //    1. current fruitLines hobe empty list
  //    2. fruits er sob index er jonno:
  //      1. current fruitLines e concat korbo cross icon block div er vitore cross icon and fruits er current index
  //    3. setfruitLines method call with current fruit line
  function showFruits(){
    console.log("showFruits => Current fruits list is: ",fruits);
    var currentfruitLines = [];
    for(var index = 0; index < fruits.length; index++){
      currentfruitLines.push(<li>{fruits[index]}</li>);
      // currentfruitLines += fruits[index] + '\n';

    }
    var fruitContainer = <ul>{currentfruitLines}</ul>;
    setfruitLines(fruitContainer);
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

          {fruitLines}
        
      </div>
    </div>
  );
}

export default App;
