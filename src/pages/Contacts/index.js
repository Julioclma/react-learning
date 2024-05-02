import {Link} from 'react-router-dom';

function Contact() {
    return (
      <div>
  <h2>Bem vindo a rota Contatos</h2>

  <Link to="/">Home</Link><br></br>
  <Link to="/sobre">Sobre</Link><br></br>
  <Link to="/mais-informacoes">Mais Informações</Link><br></br>
      </div>
    );
  
  }
  
  export default Contact;