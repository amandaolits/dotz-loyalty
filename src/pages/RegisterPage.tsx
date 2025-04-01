import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useUserContext } from '../context/UserContext';
import { Container, LeftSide, RightSide, Form, Input, Label, Button, LogoImage, ErrorMessage, ContainerLabel, LoginLink } from '../styles/RegisterStyles';

const API_URL = 'http://localhost:5000';

const registerSchema = yup.object().shape({
  name: yup.string()
    .trim()
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, 'O nome deve conter apenas letras')
    .min(3, 'O nome deve ter pelo menos 3 caracteres')
    .required('Nome é obrigatório'),

  email: yup.string()
    .trim()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),

  password: yup.string()
    .required('Senha é obrigatória')
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
    .matches(/[\W_]/, 'A senha deve conter pelo menos um caractere especial (!@#$%^&*)'),

  phone: yup.string()
    .trim()
    .matches(/^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/, 'Telefone inválido')
    .required('Telefone é obrigatório'),
});

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

const RegisterPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });
  const { setUserEmail } = useUserContext();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const existingUserResponse = await axios.get(`${API_URL}/users?email=${data.email}`);
      
      if (existingUserResponse.data.length > 0) {
        alert("Este e-mail já está cadastrado!");
        return;
      }
  
      const response = await axios.post(`${API_URL}/users`, data);
      setUserEmail(response.data.email);
  
      alert("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar.");
    }
  };
  
  return (
    <Container>
      <LeftSide>
        <LogoImage src="/assets/dotz-logo.svg" alt="Logo Dotz" />
      </LeftSide>

      <RightSide>
        <h1>Cadastro de usuário</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ContainerLabel>
            <Label htmlFor="name">Nome:</Label>
            <Input id="name" type="text" placeholder="Digite seu nome" {...register('name')} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </ContainerLabel>

          <ContainerLabel>
            <Label htmlFor="email">E-mail:</Label>
            <Input id="email" type="email" placeholder="Digite seu e-mail" {...register('email')} />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </ContainerLabel>

          <ContainerLabel>
            <Label htmlFor="password">Senha:</Label>
            <Input id="password" type="password" placeholder="Digite sua senha" {...register('password')} />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </ContainerLabel>

          <ContainerLabel>
            <Label htmlFor="phone">Telefone:</Label>
            <Input id="phone" type="text" placeholder="Digite seu telefone" {...register('phone')} />
            {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
          </ContainerLabel>

          <Button type="submit">Cadastrar</Button>
        </Form>

        <LoginLink onClick={() => navigate('/')}>
          Já tem cadastro? Faça o seu login aqui!
        </LoginLink>
      </RightSide>
    </Container>
  );
};

export default RegisterPage;
