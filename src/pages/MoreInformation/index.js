import {Link} from 'react-router-dom';

function MoreInformation(){
    return(
        <div>
            
            <h2>Mais informações</h2>

            <Link to="/">Home</Link><br></br>
            <Link to="/sobre">Sobre</Link><br></br>
            <Link to="/contato">Contato</Link><br></br>
        </div>
    )
}

export default MoreInformation;