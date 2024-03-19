// import React from 'react';

// function C3({ user }) {
//   return (
//     <div style={{ margin: "50px" }}>Hello, {user}!</div>
//   );
// }

// export default C3;


import React, { useContext } from 'react';
import { UserContext } from './App'; // Import UserContext using {}

function C3() {
  const user = useContext(UserContext);
   
  return (
    <div style={{ margin: "50px" }}>Hello, {user}!</div>
  );
}

export default C3;
