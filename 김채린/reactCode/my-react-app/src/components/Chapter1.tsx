import React, { memo, useEffect, useState } from 'react';

type Props = {
  counter: number;
};

const Component = memo((props: Props) => {
  useEffect(() => {
    console.log('Component has been rendered!');
  });

  return <h1>{props.counter}</h1>;
});

type DeeperProps = {
  counter: {
    counter: number;
  };
};

const DeeperComponent = memo((props: DeeperProps) => {
  useEffect(() => {
    console.log('DeeperComponent has been rendered!');
  });

  return <h1>{props.counter.counter}</h1>;
});

const Chapter1: React.FC = () => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((prev) => prev + 1);
  }

  return (
    <div className="App">
      <h1>Chapter 1</h1>
      <Component counter={100} />
      <DeeperComponent counter={{ counter: 100 }} />
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default Chapter1;
