import { ReactNode, useState } from 'react';

const Stepper = ({ initial = 0, onChange = (...args: any[]) => {} }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(1);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onChange(1);
  };

  return (
    <div>
      <button
        data-cy="decrement"
        className="bg-red-500"
        onClick={handleDecrement}
      >
        -
      </button>
      <span data-cy="counter">{count}</span>
      <button data-cy="increment" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};
export default Stepper;
