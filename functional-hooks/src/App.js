import React, {useState, useEffect } from 'react';


function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div style={{margin : "50px"}}>
      <p>{data ? data.title : 'Loading...'}</p>
    </div>
  );
}

export default App;
