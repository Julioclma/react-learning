import React, { useEffect, useState } from 'react';


function App() {

  const [tarefas, setTarefas] = useState([]);

  const [tarefa, setTarefa] = useState('');


  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);



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