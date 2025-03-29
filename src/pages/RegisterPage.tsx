import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useUserContext } from '../context/UserContext';

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

  const onSubmit = (data: RegisterFormData) => {
    setUserEmail(data.email);

    alert('Cadastro realizado com sucesso!');
    navigate('/login');
  };

  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input id="name" type="text" placeholder="Digite seu nome" {...register('name')} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="email">E-mail:</label>
          <input id="email" type="email" placeholder="Digite seu e-mail" {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input id="password" type="password" placeholder="Digite sua senha" {...register('password')} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div>
          <label htmlFor="phone">Telefone:</label>
          <input id="phone" type="text" placeholder="Digite seu telefone" {...register('phone')} />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
