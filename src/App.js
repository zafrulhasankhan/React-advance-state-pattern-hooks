// import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';

function reducer({ state }) {
  switch (state) {
    case 'passed_one':
      return {
        state: 'passed_two'
      }
    case 'passed_two':
      return {
        state: 'passed_three'
      }
    case 'passed_three':
      return {
        state: 'passed_one'
      }

  }
}

const Button = () => {
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    state: 'passed_one',
  });

  return <div style={{
    color: props.color,
    textDecoration: props.underline ? 'underline' : undefined
  }} >


    <div onClick={() => dispatch()}>i am button</div>
    <div>{state?.state}</div>

  </div>

}

const props = {
  increment: 2,
  underline: true,
  color: 'black'
}

function App() {
  return (

    <div className="App">
      <Button color="gray" />
      <Button color="red" />
      <Button color="blue" />

    </div>
  );
}

export default App;
