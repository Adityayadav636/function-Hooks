import React, { useState } from 'react';


function App() {

  const [count, setCount] = useState(0);

  return (
    <div style={{margin : "50px"}}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
