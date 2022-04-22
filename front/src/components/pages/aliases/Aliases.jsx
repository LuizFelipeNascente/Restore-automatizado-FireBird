import React, { Component } from 'react';
import { Container, Area, Header, Hr, Conteudo, Hrlist } from './styles';
import  Navbar  from '../../layout/navBar/Navbar';
import filesize from "filesize";
import api from "../../../services/api";

class App extends Component {

  state = {
    files: []
  };

  async componentDidMount() {
   const response = await api.get("Backup");

    this.setState({files: response.data.map(file => ({
      id: file._id,
      name: file.name,
      ext: file.ext,
      readableSize: filesize(file.size), 
      data: file.data           

    }))})
  }

  render() {
   const { files } = this.state;
        
    return ( 
      <>
        <Navbar />
          <Container> 
            <Area>
              <Header>
                <h1>Lista de Aliases</h1>
                <Hr/>
                 {files.map(files => (
                    <Conteudo key={files.id} >
                      <br></br>
                        <h1> Aliases: {files.name} </h1>
                        <h1> Tamanho: {files.readableSize} </h1>
                        <h3> Data: {files.data} </h3>
                        <h2> Backup: {files.ext} </h2>
                        <br></br>
                        <h4>USE:</h4>
                        <h3>
                          SERVIDOR_IP=ps.servehttp.com <br></br>
                          SERVIDOR_BD={files.name}
                        </h3>
                      <br></br>
                         
                      <Hrlist/>
                    </Conteudo>
                  ))}
                
              </Header> 
            </Area> 
          </Container> 
      </>
    );
  }
}
  
export default App;
  