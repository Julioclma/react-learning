import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/About';
import Contact from './pages/Contacts';
import MoreInformation from './pages/MoreInformation';
import Header from './components/Header';

function RoutesApp() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/mais-informacoes" element={<MoreInformation />} />
            </Routes>
        </BrowserRouter>
    );

}

export default RoutesApp;