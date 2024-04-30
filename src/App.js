import React, { useState } from 'react';


function App() {

  let [contator, setContator] = useState(0);



  return (
    <div>
      <h2>{contator}</h2>
      <button type="button" onClick={() => setContator(contator - 1)}>+ Diminui</button>
      <button type="button" onClick={() => setContator(contator + 1)}>+ Aumenta</button>
    </div>
  );

}

export default App;