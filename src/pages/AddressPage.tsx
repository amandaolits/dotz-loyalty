import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useUserContext } from '../context/UserContext';
import { addAddress, getAddresses, removeAddress } from '../services/addresses';
import Header from '../components/Header';
import { AddressList, Container, ModalContent, ModalOverlay, NoAddresses, TitleContainer } from '../styles/AddressStyles';

const addressSchema = yup.object().shape({
  cep: yup.string().required('CEP é obrigatório').matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
  street: yup.string().required('Rua é obrigatória'),
  number: yup.string().required('Número é obrigatório'),
  complement: yup.string().nullable(),
  city: yup.string().required('Cidade é obrigatória'),
  state: yup.string().required('Estado é obrigatório'),
});

interface AddressFormData {
  cep: string;
  street: string;
  number: string;
  complement?: string | null;
  city: string;
  state: string;
}

const AddressPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<AddressFormData>({
    resolver: yupResolver(addressSchema),
  });

  const { userEmail } = useUserContext();
  const [addresses, setAddresses] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const addressList = await getAddresses();
        setAddresses(addressList);
      } catch (error) {
        console.error('Erro ao carregar endereços:', error);
      }
    };

    fetchAddresses();
  }, []);

  const onSubmit = async (data: AddressFormData) => {
    if (userEmail) {
      const enderecoComEmail = {
        email: userEmail,
        ...data,
      };

      try {
        const newAddress = await addAddress(enderecoComEmail);
        setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
        alert('Endereço cadastrado com sucesso!');
        reset();
        setIsModalOpen(false);
      } catch (error) {
        alert('Erro ao cadastrar o endereço');
      }
    } else {
      alert('Usuário não autenticado!');
    }
  };

  const handleRemoveAddress = async (addressId: string) => {
    try {
      await removeAddress(addressId);
      setAddresses((prevAddresses) => prevAddresses.filter(address => address.id !== addressId));
      alert('Endereço removido com sucesso!');
    } catch (error) {
      console.error('Erro ao remover o endereço:', error);
      alert('Erro ao remover o endereço.');
    }
  };

  return (
    <Container>
      <Header />
      <TitleContainer>
        <h1>Meus Endereços</h1>
        <button onClick={() => setIsModalOpen(true)}>Adicionar Endereço</button>
      </TitleContainer>

      {addresses.length === 0 ? (
        <NoAddresses>Nenhum endereço cadastrado</NoAddresses>
      ) : (
        <AddressList>
          {addresses.map((address, index) => (
            <li key={index}>
              {address.street}, {address.number} - {address.city}, {address.state}
              <img
                src="/assets/remove.svg"
                alt="Remover Endereço"
                onClick={() => handleRemoveAddress(address.id)}
                style={{ cursor: 'pointer'}}
                height={16}
              />
            </li>
          ))}
        </AddressList>
      )}

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>Cadastrar Endereço</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="cep">CEP:</label>
                <input id="cep" type="text" placeholder="Digite o CEP" {...register('cep')} />
                {errors.cep && <span>{errors.cep.message}</span>}
              </div>

              <div>
                <label htmlFor="street">Rua:</label>
                <input id="street" type="text" placeholder="Digite a rua" {...register('street')} />
                {errors.street && <span>{errors.street.message}</span>}
              </div>

              <div>
                <label htmlFor="number">Número:</label>
                <input id="number" type="text" placeholder="Digite o número" {...register('number')} />
                {errors.number && <span>{errors.number.message}</span>}
              </div>

              <div>
                <label htmlFor="complement">Complemento:</label>
                <input id="complement" type="text" placeholder="Digite o complemento (opcional)" {...register('complement')} />
              </div>

              <div>
                <label htmlFor="city">Cidade:</label>
                <input id="city" type="text" placeholder="Digite a cidade" {...register('city')} />
                {errors.city && <span>{errors.city.message}</span>}
              </div>

              <div>
                <label htmlFor="state">Estado:</label>
                <input id="state" type="text" placeholder="Digite o estado" {...register('state')} />
                {errors.state && <span>{errors.state.message}</span>}
              </div>

              <button type="submit">Cadastrar</button>
              <button type="button" onClick={() => setIsModalOpen(false)}>Fechar</button>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default AddressPage;
