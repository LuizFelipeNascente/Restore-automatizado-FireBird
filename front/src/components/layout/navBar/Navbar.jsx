import { Link } from 'react-router-dom'
import logo from '../../../img/logo-g.png'
import { useUserAuth } from "../../../auth/Auth"
import { useNavigate } from "react-router";
import {Nav, Paragrafo, Ul, Li, BtnLogout, Img} from "./styles";

function Navbar () {

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }}

  return(
    <Nav>

      <Link to="/Home">
        <Img src={logo} alt="Prime" />
      </Link>
      <Paragrafo>Sistema de Restore Automatizado</Paragrafo>

      <Ul>
        <Li>
          <Link to="/Home">Home</Link>
        </Li>
        <Li>
          <Link to="/Aliases">Aliases</Link>
        </Li>
        <Li>
          <Link to="/Guia">Guia</Link>
        </Li>
        <BtnLogout  type="button" onClick={handleLogout}> Sair </BtnLogout>
      </Ul>
    </Nav>
  );
}

export default Navbar;