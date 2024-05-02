import {Link} from 'react-router-dom'

function About() {
    return (
      <div>
  <h2>Bem vindo a rota About</h2>

  <Link to="/">Home</Link><br></br>
  <Link to="/contato">Contato</Link><br></br>
  <Link to="/mais-informacoes">Mais Informações</Link><br></br>

      </div>
    );
  
  }
  
  export default About;