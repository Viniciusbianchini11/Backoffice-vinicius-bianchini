import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import MainLayout from '../../components/MainLayout';
import '../fonte/cadastro-ingresso.css';

const schema = Yup.object().shape({
  quantidade: Yup.number()
    .positive('Quantity must be a positive number')
    .integer('Quantity must be an integer')
    .required('Quantity is required'),
  valor: Yup.number()
    .positive('Value must be a positive number')
    .required('Value is required'),
  loteId: Yup.string()
    .required('Lote ID is required'),
  categoriaId: Yup.string()
    .required('Category ID is required'),
});

export default function CadastroIngresso() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="quantidade" className="sr-only">Quantity</label>
          <input
            type="number"
            id="quantidade"
            {...register('quantidade')}
            className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Quantity"
          />
          {errors?.quantidade && <p className="text-red-500 text-sm mt-1">{errors.quantidade.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="valor" className="sr-only">Value</label>
          <input
            type="number"
            step="0.01"
            id="valor"
            {...register('valor')}
            className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Value"
          />
          {errors?.valor && <p className="text-red-500 text-sm mt-1">{errors.valor.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="loteId" className="sr-only">Lote ID</label>
          <input
            type="text"
            id="loteId"
            {...register('loteId')}
            className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Lote ID"
          />
          {errors?.loteId && <p className="text-red-500 text-sm mt-1">{errors.loteId.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="categoriaId" className="sr-only">Category ID</label>
          <input
            type="text"
            id="categoriaId"
            {...register('categoriaId')}
            className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Category ID"
          />
          {errors?.categoriaId && <p className="text-red-500 text-sm mt-1">{errors.categoriaId.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full px-3 py-2 text-white bg-indigo-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Create Ingresso
        </button>
      </form>
    </div>
  );
}