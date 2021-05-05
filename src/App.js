import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [inputFruit, setInputFruit] = useState("");
  const fruits = [];
  function handleFruitNameChange(event){
    setInputFruit(event.target.value);
    console.log("handleFruitNameChange: The updated input fruit is: ",inputFruit);
  } 
  function handleAdd(event){
    console.log("handleAdd: The current fruit name is: ",inputFruit);
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
      <div>

      </div>
    </div>
  );
}

export default App;
