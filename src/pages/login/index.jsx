import Header from "../../components/Header";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

import Button from "../../components/Button";
import { MdEmail, MdLock } from "react-icons/md";
// import { useNavigate } from "react-router";

const schema = yup
  .object({
    email: yup
      .string()
      .email("O e-mail não é válido")
      .required("O e-mail é obrigatório"),
    password: yup
      .string()
      .min(8, "Sua senha deve ter, no mínimo, 8 caracteres")
      .required("A senha é obrigatória"),
  })
  .required();

const Login = () => {
  // const navigate = useNavigate();
  /* const handleClickSignIn = () => {
    navigate("/feed");
  }; */
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  console.log(errors, isValid);
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                errorMessage={errors?.email?.message}
                name="email"
                control={control}
                placeholder="E-mail"
                type="email"
                leftIcon={<MdEmail />}
              />
              <Input
                errorMessage={errors?.password?.message}
                name="password"
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button
                title="Entrar"
                variant="secondary"
                //onClick={handleClickSignIn}
                type="submit"
              />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </div>
  );
};

export default Login;
