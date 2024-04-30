import React, { useState } from 'react';


function App() {

  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React Hooks'
  ]);

  const [tarefa, setTarefa] = useState('');

  function handleAdd() {
    setTarefas([...tarefas, tarefa]);
    setTarefa('');
  }


  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))
        }
      </ul>
      <input type="text" name="tarefa" value={tarefa} onChange={element => setTarefa(element.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );

}

export default App;