import styled, { css } from "styled-components";

/*

##########################################
##########################################
##########################################

Estilos da Upload

##########################################
##########################################
##########################################

*/

const dragActive = css`
    border-color: #000000;
`;

export const DropContainer = styled.div.attrs({
    className: "dropzone"
}) `
    border: 1px dashed #ddd;
    border-radius: 4px;
    cursor: pointer;
    margin: auto;
    max-width: 400px;
    margin-top: 15px;
    

    transition: heigth 0.2s ease;

    ${propos => propos.isDragActive && dragActive};
    

`;

const messageColors = {
    default: "#999",
    success: "#24c50f"
  };
  
  export const UploadMessage = styled.p`
    display: flex;
    color: ${props => messageColors[props.type || "default"]};
    justify-content: center;
    align-items: center;
    padding: 5px 0;
  `;


/*

##########################################
##########################################
##########################################

Estilos da Home

##########################################
##########################################
##########################################

*/



export const Container = styled.div`

    min-height: 100%;
    align-items: center;
    box-shadow: 0px 0px rgb(0, 0, 0);
    margin-top: 25px;
    padding: 0 0 65px;
    
    
  `;
  
  
  export const Area = styled.div` 
    
    margin: auto;
    max-width: 800px;
    padding: 5px 0;
    background-color: #d8d8d8;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgb(0, 0, 0);
  `;
  
  export const Header = styled.div`
      margin: 0;
      padding: 0;
      text-align: center;
      margin-bottom: 30px;
      
  `;
  
  export const Hr = styled.hr `
  
    margin-top: 20px;
    height:2px;
    border-width:0;
    background: #000000;
    
  `; 

  export const Form = styled.form`
    color:#000000;
    text-decoration: none;
    cursor: pointer;
    

    a {

text-decoration: none;
color:#000000;
}

.radio {
  cursor: pointer;
  appearance: none;
  width: 13px;
  height: 13px;
  border: 2px solid #df3535;
  border-radius: 50%;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  
}

.radio:before {
  content: '';
  width: 7px;
  height: 7px;
  margin-left: 1px;
  margin-top: 1px;
  background: rgb(236, 107, 107);
  border-radius: 50%;
  opacity: 0;
  position: absolute;
 

  
  
}

.radio:checked:before {
  opacity: 1;
}

.radio:focus {
  box-shadow: 0 0 5px rgb(236, 107, 107);
}


 `
 export const Fieldset = styled.fieldset `

  border-radius: 5px;
  max-width: 550px;
  color:#000000;
  margin: auto;
 
 `



/*

##########################################
##########################################
##########################################

Estilos da Info

##########################################
##########################################
##########################################

*/

export const Content = styled.ul`
  margin-top: 20px;
  font-size: 20px;
  li {
    display: flex;
    justify-content: space-between;
    margin: 20px;
    align-items: center;
    color: #000000;
    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 12px;
      color: #999;
      margin-top: 10px;
    }
  }
`;
