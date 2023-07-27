import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

import { FiThumbsUp } from "react-icons/fi";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/139155209?v=4" />
          <div>
            <h4>Fellipe Marcel</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito no curso de HTML e CSS no Bootcamp do Global
            Avanada...<strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export default Card;
