import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles';



export default class Upload extends Component {
    
    renderDragMessage = (isDragActive) => {
        if (!isDragActive) {
          return <UploadMessage>Arraste seu BKP até aqui, ou clique para selecionar</UploadMessage>;
        }
           
        return <UploadMessage type="success">Solte o BKP aqui!</UploadMessage>;
    };
    
    render(){
      const { onUpload } = this.props;


      return (


                <Dropzone accept="" onDropAccepted={onUpload}>
                  { ({ getRootProps, getInputProps, isDragActive}) => (
                    <DropContainer
                      { ...getRootProps()}
                      isDragActive={isDragActive}
                      
                      >
                       <input { ... getInputProps()} /> 
                       {this.renderDragMessage(isDragActive)}
                      </DropContainer>
                  ) }
                </Dropzone>
        );   
    } 
}

         

          
      




  