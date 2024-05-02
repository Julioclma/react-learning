import {Link} from 'react-router-dom';

function Home() {
    return (
      <div>
  <h2>Bem vindo a rota Home</h2>

  <Link to="/sobre">Sobre</Link><br></br>
  <Link to="/contato">Contato</Link><br></br>
  <Link to="/mais-informacoes">Mais Informações</Link><br></br>
      </div>
    );
  
  }
  
  export default Home;