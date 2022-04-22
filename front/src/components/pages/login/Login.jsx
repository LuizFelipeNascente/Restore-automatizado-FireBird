import React, { useState } from 'react';
import { useNavigate, Navigate } from "react-router-dom";
import { useUserAuth } from "../../../auth/Auth";
import HeaderLogin from "./HeaderLogin";
import Footer from "../../layout/fotter/Footer"

import { Container,
         Area, 
         Header,
         Hr,
         Cardshadow,
         Label,
         Btnlogin,
         Button
   } from './styles';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const { user } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      if (err.code) {
        switch(err.code) {
        case 'auth/user-not-found':
        alert("Usuario invalido");
        break;
        case 'auth/wrong-password':
        alert("Senha invalida");
        break;
        default:
          alert('Erro desconhecido');
        };
      }
      setError(err.message);
   }
  };

if (!user) {  
return (
  <>
  <HeaderLogin />
 
  <Container>
    <Area >
      <Header > <h1>Realize seu Login</h1>
             
        <Cardshadow>
          <form onSubmit={handleSubmit}>
            <Label>
              <label  htmlFor="exampleInputEmail1">Login</label> &nbsp;&nbsp;
              <input  type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}  />
            </Label>

            <Label>
              <label htmlFor="exampleInputPassword1">Senha</label> &nbsp;
              <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
            </Label>

            <Hr/>

            <Button>
            <Btnlogin variant="primary" type="submit"> Login </Btnlogin>
            </Button>
          </form>
        </Cardshadow>
      </Header> 
    </Area> 
  </Container> 
  <Footer/>
  </>       
      
);}

else {
  return <Navigate to="/Home" />;
}

};
  
  
  export default Login;