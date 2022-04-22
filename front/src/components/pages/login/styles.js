import styled from "styled-components";


export const Container = styled.div`

 
    min-height: 100%;
    margin-top: 80px;
    align-items: center;
    box-shadow: 0px 0px rgb(0, 0, 0);
    margin-top: 30px;
    
    
  `;
  
  
export const Area = styled.div` 
    
    
    margin: auto;
    max-width: 350px;
    padding: 30px 0;
    background-color: #d8d8d8;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgb(0, 0, 0);
    margin-top: 0px;
  
   


   

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

export const Cardshadow = styled.div`
    
    
    margin-top: 10px;
    justify-content: space-between;
    padding: 1em;
     
    
`;

export const Label = styled.div`

    font-size: 20px;  
    font-weight: 800;
    margin-top: 10px;
    
`;

export const Btnlogin = styled.button`
    
    background: #24c50f;
    color: white;
    border-style: outset;
    border-color: #09ff00;
    border-radius: 10px;
    height: 30px;
    width: 90px;
    font: bold 15px arial, sans-serif;
    cursor: pointer;

&:hover{



color: white;
box-shadow: 0 0 5px #09ff00;
font-size:  16px;

}
    
`;

export const Button = styled.div`

    margin-top: 20px;
    border-radius: 10px;
    
`;

/*

#######################
###Estilo do Header###
#######################

*/

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(white, #eeeeee);
  box-shadow: 2px 2px 2px #e3e3e3;
  padding: 20px 20px 5px;
  flex-wrap: wrap;
`;

export const Paragrafo = styled.p`

  margin-right: 250px;
  font-size: 45px;
  font-weight: 800;
  margin-top: 10px;
 `;

export const Img = styled.img`

  max-width: 150px;
  max-height: 70px;
  margin: 0px 0px 0px 20px;

`;
