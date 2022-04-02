import React from 'react';
import './App.css';

export default function App() {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    document.title = `You clicked ${counter} times`;
  })

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      </header>
    </div >
  );
}