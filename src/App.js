import React, { useEffect, useState, useMemo } from 'react';


function App() {

  const [tarefas, setTarefas] = useState([]);

  const [tarefa, setTarefa] = useState('');

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

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
      </ul><br/>
      <strong>Você tem {totalTarefas} tarefas</strong><br/>
      <input type="text" name="tarefa" value={tarefa} onChange={element => setTarefa(element.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );

}

export default App;