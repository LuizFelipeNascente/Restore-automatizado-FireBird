import {Imagem, Roda} from "./styles"
import logoInvertida from '../../../img/logo-invertida.png'


function Footer () {
  return (
    <Roda>
      <Imagem src={logoInvertida} alt="link do site" />
    </Roda>
  );
}

export default Footer;