import React from 'react';
import './App.css';

 function App() {
  
  const [counter,setCounter]=React.useState(0)
  const handleIncrement=(value)=>{
     setCounter(counter+value);
  }
  const handledouble=(value)=>{
     setCounter(counter*value);
  }
  return (
    <div className="App">
        <h1>Counter</h1>
        <h1 style={counter%2==0?{color:"green"}:{color:'red'}}>{counter}</h1>
        <button onClick={()=>handleIncrement(1)}>increment</button>
        <button onClick={()=>handleIncrement(-1)}>decrement</button>
        <button onClick={()=>handledouble(2)}>double</button>
    </div>
  );
}

export default App;
