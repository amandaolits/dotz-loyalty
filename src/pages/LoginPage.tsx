import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useUserContext } from '../context/UserContext';

const loginSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const { setUserEmail } = useUserContext();
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormData) => {
    setUserEmail(data.email);
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input id="email" type="email" {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input id="password" type="password" {...register('password')} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
