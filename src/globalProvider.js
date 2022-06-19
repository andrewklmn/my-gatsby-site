import React, { useState, useEffect } from 'react';

export const globalStateContext = React.createContext();

const Provider = props => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    const previous = counter;
    const newValue = previous + 1;
    console.log(`=== prev: `, previous);
    console.log(`=== new: `, newValue);
    setCounter(newValue);
  }
  const decrease = () => setCounter(counter - 1);

  useEffect(() => {
    console.log(`=== globalProvider was started ===`);

    return () => console.log(`=== About was stopped ===`);
  }, []);

  useEffect(() => {
    console.log(`=== counter changed to: `, counter);

  }, [counter]);

  return (
    <globalStateContext.Provider value={{
      counter,
      increase,
      decrease,
    }}>
      {props.children}
    </globalStateContext.Provider>
  )
};

const Wrapper = ({ element }) => (
  <Provider>
    {element}
  </Provider>
);

export default Wrapper;
