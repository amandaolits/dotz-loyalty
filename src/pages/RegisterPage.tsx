import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useUserContext } from '../context/UserContext';
import { Container, LeftSide, RightSide, Form, Input, Label, Button, LogoImage, ErrorMessage } from '../styles/RegisterStyles';

const API_URL = 'http://localhost:5000';

const registerSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
  phone: yup.string().required('Telefone é obrigatório'),
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
      const response = await axios.post(`${API_URL}/users`, data);
      setUserEmail(response.data.email);

      alert('Cadastro realizado com sucesso!');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar.');
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
          <div>
            <Label htmlFor="name">Nome:</Label>
            <Input id="name" type="text" placeholder="Digite seu nome" {...register('name')} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>

          <div>
            <Label htmlFor="email">E-mail:</Label>
            <Input id="email" type="email" placeholder="Digite seu e-mail" {...register('email')} />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </div>

          <div>
            <Label htmlFor="password">Senha:</Label>
            <Input id="password" type="password" placeholder="Digite sua senha" {...register('password')} />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </div>

          <div>
            <Label htmlFor="phone">Telefone:</Label>
            <Input id="phone" type="text" placeholder="Digite seu telefone" {...register('phone')} />
            {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
          </div>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </RightSide>
    </Container>
  );
};

export default RegisterPage;
