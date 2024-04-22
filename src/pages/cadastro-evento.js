import Link from 'next/link';
import MainLayout from '../../components/MainLayout';
import '../fonte/cadastro-evento.css';

export default function CadastroEvento() {
  return (
    <MainLayout>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-6">Cadastro de Eventos</h1>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="nome" className="block font-medium text-gray-700">Nome do Evento</label>
            <input type="text" id="nome" name="nome" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          
          <div>
            <label htmlFor="data" className="block font-medium text-gray-700">Data do Evento</label>
            <input type="date" id="data" name="data" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          
          
          
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Salvar</button>
          </div>
        </form>
        
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </MainLayout>
  );
}
