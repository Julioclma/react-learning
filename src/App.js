import React, { useEffect, useState } from 'react';
import './style.css';

//https://sujeitoprogramador.com/rn-api/?api=posts

function App() {

  const [nutri, setNutri] = useState([]);

  //Carrega automático quando abrir aplicação
  useEffect(() => {

    function loadApi() {
      fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
        .then(response => response.json())
        .then(json => {
          console.log(json);
          setNutri(json);
        });
    };

    loadApi();

  }, []);


  return (
    <div className='container'>
      <header>
        <strong>React Nutri</strong>
      </header>
      <div id='container-posts'>
        {nutri.map(item => (
          
            <ul key={item.id}>
              <li><strong>{item.titulo}</strong></li>
              <li><img src={item.capa} alt={item.titulo} /></li>
              <li><p>{item.categoria}</p></li>
              <li><p>{item.subtitulo}</p></li>
              <li><a href="#">acessar</a></li>
            </ul>
        ))}
      </div>
      
    </div>
  );

}

export default App;