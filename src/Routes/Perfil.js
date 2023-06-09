import React from 'react';
import ImgUser from '../Components/Perfil/ImgUser/ImgUser';
import ButtonUserConfig from '../Components/Perfil/ButtonUserConfig/ButtonUserConfig';
import BannerPub from '../Components/Perfil/BannerPub/BannerPub';
import UsuarioFeed from '../Components/Perfil/Publicaciones/Publicaciones';

class Perfil extends React.Component {
  render() {
    return (
      <div>
        <ImgUser />
        <ButtonUserConfig />
        <BannerPub />
        <UsuarioFeed />
      </div>
    );
  }
}

export default Perfil;
