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
  JaPossuiText,
  LoginText,
  Row,
  AceitarCondicoes,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

import Button from "../../components/Button";
import { MdEmail, MdLock, MdPermIdentity } from "react-icons/md";
import { useNavigate } from "react-router";
import api from "../../services/api";

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

const Register = () => {
  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate("/feed");
  };
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  console.log(errors, isValid);
  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        handleClickSignIn();
      } else {
        alert("Email ou senha inválidos");
      }
    } catch (error) {
      alert("Houve um erro. Tente novamente.");
    }
  };
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
            <TitleLogin>Comece agora, grátis.</TitleLogin>
            <AceitarCondicoes>Faça seu login e make the change._</AceitarCondicoes>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                errorMessage={errors?.email?.message}
                name="fullname"
                control={control}
                placeholder="Nome completo"
                type="text"
                leftIcon={<MdPermIdentity />}
              />
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
                title="Criar minha conta"
                variant="secondary"
                //onClick={handleClickSignIn}
                type="submit"
              />
            </form>
              <AceitarCondicoes>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</AceitarCondicoes>
            <Row>
              <JaPossuiText>Já tenho conta.</JaPossuiText>
              <LoginText>Fazer login</LoginText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </div>
  );
};

export default Register;
