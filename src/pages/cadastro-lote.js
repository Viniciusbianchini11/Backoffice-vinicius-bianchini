import Link from 'next/link';
import { useRouter } from 'next/router';
import MainLayout from '../../components/MainLayout';
import '../fonte/cadastro-lote.css';

export default function CadastroLote() {
  const router = useRouter();

  const userType = 'admin';

  if (userType !== 'admin') {
    router.push('/login'); 
    return null; 
}

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const formData = new FormData(event.target);
    const nome = formData.get('nome');
    const descricao = formData.get('descricao');
    const quantidade = parseInt(formData.get('quantidade'), 10);
    const valor = parseFloat(formData.get('valor'));

    
    if (!nome || !quantidade || !valor) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    
    const newLote = {
      nome,
      descricao,
      quantidade,
      valor,
    };

    
    fetch('/api/lotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLote),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.created) {
          alert('Lote cadastrado com sucesso!');
          router.push('/dashboard');
        } else {
          alert('Erro ao cadastrar lote.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Erro ao cadastrar lote.');
      });
  };

  return (
    <MainLayout>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-6">Cadastro de Lotes</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nome" className="block text-gray-700 font-bold mb-2">Nome do Lote</label>
            <input type="text" name="nome" id="nome" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="descricao" className="block text-gray-700 font-bold mb-2">Descrição</label>
            <input type="text" name="descricao" id="descricao" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="quantidade" className="block text-gray-700 font-bold mb-2">Quantidade de Ingressos</label>
            <input type="number" name="quantidade" id="quantidade" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="valor" className="block text-gray-700 font-bold mb-2">Valor do Ingresso</label>
            <input type="number" step="0.01" name="valor" id="valor" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Cadastrar Lote
          </button>
        </form>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </MainLayout>
  );
}