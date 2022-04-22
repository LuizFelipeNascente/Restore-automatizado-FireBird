import styled from "styled-components";

export const Nav = styled.nav `
    display: flex;
    justify-content: space-between;
    background: linear-gradient(white, #eeeeee);
    box-shadow: 2px 2px 2px #e3e3e3;
    padding: 10px 10px 5px;
    flex-wrap: wrap;
    
`;
  
export const Ul = styled.ul `
    display: flex;
    list-style: none;
    align-items: center;
`;
  
export const Li = styled.li `
    margin-right: 1em;
    margin-top: 65px;
    animation-name: tete;
    animation-duration: 5s;
  a {
    color:#000000;
    text-decoration: none;
  };
  
  a:hover {
    color:#ff0026;
  };
`;

export const Img = styled.img `
    max-width: 150px;
    max-height: 70px;
    margin: 0px 0px 0px 20px;
`;

export const Paragrafo = styled.p `
    margin: 0px 0px 0px 20px;
    font-size: 45px;
    font-weight: 800;
    margin-top: 20px;
`;

export const BtnLogout = styled.button `
    background: #df3535;
    color: rgb(0, 0, 0);
    border-style: outset;
    border-color: rgb(236, 107, 107);
    height: 20px;
    width: 45px;
    font: bold 15px arial, sans-serif;
    border-radius: 5px;
    margin-top: 65px;
    animation-name: tete;
    animation-duration: 5s;
    cursor: pointer;
  :hover{
    background: #ff0000;
    border-color: rgb(255, 0, 0);
  }
`;


 
  