// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import React from 'react';
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
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect: value of fruits is:", fruits);
    console.log("useEffect: value of fruitLines is:", fruitLines);
    console.log("useEffect: value of input fruit is:", inputFruit);
    console.log(fruitLines);
    setCount(count+1);
    updateCurrentFruitLinesToFruitLines();
  });

  // 1. count = 0 at first
  // 
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


  // handleDelete
  // input: none
  // return: nothing
  // method:
  //  1. deleteFruit method call
  function handleDelete(){
    deleteFruits();
  }


  // deleteFruit
  // input: event
  // return: nothing, just delete the latest fruit from the fruits list
  // method:
  //  1. fruits list er last element delete korbo
  //  2. setFruits e modified fruits list
  function deleteFruits(){
    fruits.shift();
    setfruits(fruits);
    showFruits();
  }

  // handleDeleteAndShowUpdatedFruits
  // input: nothing
  // return: nothing
  // method:
  //  1. call updateCurrentFruitLinesToFruitLines method
  function handleDeleteAndShowUpdatedFruits(){
    updateCurrentFruitLinesToFruitLines();
  }



  // showFruits
  // input: none
  // return: nothing just log current fruits list
  // method:
  //  1. log current fruits list
  function showFruits(){
    console.log("showFruits => current fruits list is: ",fruits);
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
    console.log("addFruit => Previous fruits list is: ",fruits);
    // updateCurrentFruitLinesToFruitLines();
  }
  // updateCurrentFruitLinesToFruitLines
  // input: none
  // return: none, just show the current fruits list
  // method:
  //    1. current fruitLines hobe empty list
  //    2. fruits er sob index er jonno:
  //      1. current fruitLines e concat korbo cross icon block div er vitore cross icon and fruits er current index
  //    3. setfruitLines method call with current fruit line

  // updateCurrentFruitLinesToFruitLines
  // input: nothing
  // return: nothing, just update the new fruits line to existing fruits list
  // method:
  //  1. currentFruitLines empty list
  //  2. fruits er sob fruit er jonno:
  //    1. currentFruitLines e push list akare house icon and current fruit
  //  3. fruitContainer e unordered list akare boshabo current fruit lines
  //  4. setFruitLines e call fruitContainer
  function updateCurrentFruitLinesToFruitLines(){
    var currentFruitLines = [];
    for(var index = 0; index < fruits.length; index++){
      currentFruitLines.push(<li><div className = "crossIcon" id = {index} onClick = {deleteFruits}><FontAwesomeIcon icon = {faHome}></FontAwesomeIcon></div> <div id = "fruitName">{fruits[index]}</div></li>)
    }
    var fruitContainer = <ul>{currentFruitLines}</ul>;
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
        <div>
          <button id = "deleteFruitButton" onClick = {handleDelete}>Delete Fruit</button>
        </div>
        <div>
          <button id = "deleteFruitButton2" onClick = {handleDeleteAndShowUpdatedFruits}>Delete Fruit2</button>
        </div>
        <div>
          <button id = "showFruitsButton" onClick = {showFruits}>Show Fruits</button>
        </div>
      </div>
      <div id = "middleBar">

      </div>
      <div id = "showFruitsBlock">
          {fruitLines}
          
      </div>
      <div>
        The value of count is: {count}
      </div>
    </div>
  );
}

export default App;