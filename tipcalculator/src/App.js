import React ,{ useState } from "react";


import tipPage from "./components/tipPage.jsx"


function App() {
  const [bill, setBill] = useState(100);
  const [tipPercentage, setTipPercentage] = useState(20);
  const [people, setPeople] = useState(1);

  const totalTip = (bill * tipPercentage) / 100;
  const perPersonTip = totalTip / people ;
  return (
    <>
      <label htmlFor = "price">Bill</label>
      <input 
      id = "price"
      min = "0"
      type = "number"
      value = { bill }
      onChange = {event => {
        setBill(parseInt(event.target.value));
        
      }}
      />

      <label htmlFor = "tipPercentage">Tip Percentage</label>
      <input 
        id = "tipPercentage"
        type = "number"
        min = "0"
        value = {tipPercentage}
        onChange = {event => {
          setTipPercentage(parseInt(event.target.value));
          
        }}
        />
      <label htmlFor = "people">Number of People</label>
      <input 
        id = "people"
        type = "number"
        min = "1"
        value = {people}
        onChange = {event => {
          setPeople(parseInt(event.target.value));
          
        }}
        />
        <p>Total Tip: {isNaN(totalTip) ? "-" : `$${totalTip.toFixed(2)}`}</p>
        <p>Tip Per Person: {isNaN(perPersonTip) ? "-" : `$${perPersonTip.toFixed(2)}`}</p>
    </>
  );
}

export default App;
