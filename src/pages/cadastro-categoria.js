import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import MainLayout from '../../components/MainLayout';
import '../fonte/cadastro-categoria.css';

const schema = Yup.object().shape({
  nome: Yup.string().required('O nome da categoria é obrigatório'),
  descricao: Yup.string(),
});

export default function CadastroCategoria() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nome">Nome da Categoria</label>
          <input type="text" id="nome" {...register('nome')} />
          {errors.nome && <p>{errors.nome.message}</p>}
        </div>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea id="descricao" {...register('descricao')} />
          {errors.descricao && <p>{errors.descricao.message}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
