import Button from "../Button";
import {
  Container,
  BuscarInputContainer,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
  UserPicture,
} from "./styles";
import Logo from "../../assets/logo-dio.png";

const Header = ({ isAuth }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={Logo} alt="Logo da Dio" />
          {isAuth ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {isAuth ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/139155209?v=4" />
          ) : (
            <>
            <MenuRight href="#">Home</MenuRight>
            <Button title="Entrar" />
            <Button title="Cadastrar" />
            </>
          )}
          
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
