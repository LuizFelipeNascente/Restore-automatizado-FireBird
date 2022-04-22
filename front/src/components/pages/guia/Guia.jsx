import { Container, Area, Header } from './styles';
import { Link } from 'react-router-dom'
import  Navbar  from '../../layout/navBar/Navbar';
 


function App () {
  return (
    <>
      <Navbar />   
        <Container>
          <Area >
            <Header >
              <h1>Guia do usuário</h1>
                <Link to="/Home">
                  <button>Voltar para a Home</button>
                </Link>
            </Header> 
          </Area> 
        </Container> 
    </>
  );
}
  
export default App;
  