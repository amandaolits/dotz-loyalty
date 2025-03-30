import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useUserContext } from '../context/UserContext';
import { 
  Container, LeftSide, RightSide, LogoImage, Form, Label, Input, Button, ErrorMessage, RegisterLink 
} from '../styles/LoginStyles';

const API_URL = 'http://localhost:5000';

const loginSchema = yup.object().shape({
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
});

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>( {
    resolver: yupResolver(loginSchema),
  });
  const { setUserEmail } = useUserContext();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await axios.get(`${API_URL}/users?email=${data.email}`);
      const user = response.data[0];

      if (!user || user.password !== data.password) {
        alert('E-mail ou senha incorretos!');
        return;
      }

      localStorage.setItem('userEmail', user.email);
      setUserEmail(user.email);

      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      alert('Erro ao fazer login.');
    }
  };

  return (
    <Container>
      <LeftSide>
        <LogoImage src="/assets/dotz-logo.svg" alt="Logo Dotz" />
      </LeftSide>
      <RightSide>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="email">E-mail:</Label>
          <Input id="email" type="email" placeholder="Digite seu e-mail" {...register('email')} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <Label htmlFor="password">Senha:</Label>
          <Input id="password" type="password" placeholder="Digite sua senha" {...register('password')} />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

          <Button type="submit">Entrar</Button>
        </Form>

        <RegisterLink onClick={() => navigate('/register')}>
          Primeira vez aqui? Cadastre-se agora.
        </RegisterLink>
      </RightSide>
    </Container>
  );
};

export default LoginPage;
