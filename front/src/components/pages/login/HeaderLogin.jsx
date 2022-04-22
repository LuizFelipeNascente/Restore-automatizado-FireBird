import { Link } from 'react-router-dom'
import logo from '../../../img/logo-g.png'
import { Paragrafo, Navbar, Img } from './styles';

function HeaderLogin () {
  return(
    <Navbar>
      <Link to="/">
        <Img src={logo} alt="Prime" />
      </Link>
        <Paragrafo>Sistema de Restore Automatizado</Paragrafo>
    </Navbar>
  );
}

  export default HeaderLogin;