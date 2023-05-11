import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { useForm } from 'react-hook-form';
import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  EsqueciText,
  CriarText,
  Row,
  Wrapper,
  ErrorMessage,
} from './styles';

const Login = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors }, setError } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);

      if (data.length && data[0].id) {
        navigate('/feed');
        return;
      }

      setError('email', { type: 'manual', message: 'Usuário ou senha inválido' });
    } catch (e) {
      setError('email', { type: 'manual', message: 'Houve um erro ao fazer login, tente novamente mais tarde' });
    } finally {
