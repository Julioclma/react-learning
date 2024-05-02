import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/mais-informacoes">Mais Informações</Link></li>
            </ul>
        </div>
    )
}

export default Header;