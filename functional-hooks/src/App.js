// import React, { useState } from "react";
// import C1 from './c1';

// function App() {
//   const [user, setUser] = useState("I am Aditya");

//   return (
//     <C1 user={user} />
//   );
// }

// export default App;




import React, { useState, createContext } from "react";
import C1 from './c1';

export const UserContext = createContext(); // Export UserContext

function App() {
  const [user, setUser] = useState("I am A");

  return (
    <UserContext.Provider value={user}>
      <C1 />
    </UserContext.Provider>
  );
}

export default App;
