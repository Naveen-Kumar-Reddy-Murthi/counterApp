import React, { useState, Fragment } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <React.Fragment>
      <div className="container"> {counter}</div>
      <div className="container">
        <div className="counter">
          <div>
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              Increment
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <button
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
    </React.Fragment>
  );
}
export default Counter;
