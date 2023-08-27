import Header from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from "./styles";

import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";

const Feed = () => {
  return (
    <div>
      <Header isAuth={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># Ranking 5 Top da Semana</TitleHighlight>
          <UserInfo
            percentual={80}
            nome="Fellipe Marcel"
            image="https://avatars.githubusercontent.com/u/139155209?v=4"
          />
          <UserInfo
            percentual={75}
            nome="João Pedro"
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          />
          <UserInfo
            percentual={60}
            nome="Maria Rita"
            image="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
          <UserInfo
            percentual={55}
            nome="Sandro Martins"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          />
          <UserInfo
            percentual={50}
            nome="Carolina Silva"
            image="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11bGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </Column>
      </Container>
    </div>
  );
};

export default Feed;
