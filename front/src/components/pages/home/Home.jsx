import React, { Component } from 'react';
import Upload from './Upload';
import { Container, Area, Header, Hr, Form, Fieldset } from './styles';
import { uniqueId } from "lodash";
import filesize from "filesize";
import Info from "./Info";
import api from "../../../services/api";
import  Navbar  from '../../layout/navBar/Navbar';
import { Link } from "react-router-dom";

class Home extends Component {
  
 
    state = {
    uploadedFiles: []
    };
    

    handleUpload = files => {
      
      const uploadedFiles = files.map(file => ({
        file,
        id: uniqueId(),
        name: file.name,
        readableSize: filesize(file.size),
        progress: 0,
        uploaded: false,
        error: false
        }))

        this.setState({
          uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
        });

        uploadedFiles.forEach(this.processUpload);

        
      };

      
      updateFile = (id, data) => {
        this.setState({
          uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
            return id === uploadedFile.id
              ? { ...uploadedFile, ...data }
              : uploadedFile;
          })
        });
      };
      
      processUpload = uploadedFile => {
        const data = new FormData();
    
        data.append("file", uploadedFile.file, uploadedFile.name);
    
        api.post("upload", data, {
            onUploadProgress: e => {
              const progress = parseInt(Math.round((e.loaded * 100) / e.total));
    
              this.updateFile(uploadedFile.id, {
                progress
              });
            }
          })

          .then(response => {
              this.updateFile(uploadedFile.id, {
              uploaded: true,
              id: response.data._id,
              
            });
          })
          .catch((error) => {
            if (error.message) {
              switch(error.message) {
              case 'Request failed with status code 500':
              alert("Formato de arquivo não suportado!");
              break;
              case 'Network Error':
              alert("Erro de servidor, tente novamete ou contate a gerência!");
              break;
              default:
                alert('Erro desconhecido');
              }}
            
            this.updateFile(uploadedFile.id, {
              error: true,
              
            });
          });

      };
      
           
    
    

  render() {
    const { uploadedFiles } = this.state
      
  return (
    
    <>
    <Navbar />
    <Container>
      <Area >
        <Header >
          <h1>Área de Upload dos Backup's</h1>
          <Fieldset>
            <legend> Selecione o formato do banco a ser restaurado </legend>
            <Form>
              <input className="radio"  type="radio" name='file' defaultChecked='checked' />
              <label> BD Windows </label>
              <Link to="/Home/Linux"> <input className="radio" type="radio" name='file' /></Link>
              <label> BD Linux completo </label>
              <Link to="/Home/Linux/inc"><input className="radio"  type="radio" name='file' /></Link>
              <label> BD Linux completo + incremental </label>
            </Form>
          </Fieldset>
          
        <Upload onUpload={this.handleUpload}/>
         { !!uploadedFiles.length && (
          <Hr /> 
          )}
         { !!uploadedFiles.length && (
         <Info files={uploadedFiles} />
         
         
         )}
        </Header> 
      </Area> 
    </Container> 

   
    </>
  );
         

}
};

export default Home;  
          
           
        