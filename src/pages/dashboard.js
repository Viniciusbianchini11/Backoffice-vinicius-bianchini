import Link from 'next/link';
import { useRouter } from 'next/router';
import MainLayout from '../../components/MainLayout';
import '../fonte/Dashboard.css';

export default function Dashboard() {
  const router = useRouter();
 
  const userType = 'admin';

  if (userType !== 'admin') {
    router.push('/login'); 
    return null; 
  }

  
  const { data: eventos, loading } = useFetchEventos();
  const { data: categorias, loading: loadingCategorias } = useFetchCategorias();
  const { data: lotes, loading: loadingLotes } = useFetchLotes();
  const { data: ingressos, loading: loadingIngressos } = useFetchIngressos();

  if (loading || loadingCategorias || loadingLotes || loadingIngressos) {
    return <div>Carregando...</div>;
  }

  return (
    <MainLayout>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
        <h2 className="text-2xl font-semibold mb-4">Eventos</h2>
        <ul>
          {eventos.map((evento) => (
            <li key={evento.id}>
              <Link href={`/eventos/${evento.id}`}>
                <a>{evento.nome}</a>
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Categorias</h2>
        <ul>
          {categorias.map((categoria) => (
            <li key={categoria.id}>{categoria.nome}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Lotes</h2>
        <ul>
          {lotes.map((lote) => (
            <li key={lote.id}>{lote.nome}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Ingressos</h2>
        <ul>
          {ingressos.map((ingresso) => (
            <li key={ingresso.id}>
              <Link href={`/ingressos/${ingresso.id}`}>
                <a>{ingresso.lote.nome} - {ingresso.categoria.nome}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/cadastro-lote">Cadastro de Lotes</Link>
      </div>
    </MainLayout>
  );
}


function useFetchEventos() {
  
  return { data: [], loading: false };
}

function useFetchCategorias() {
  
  return { data: [], loading: false };
}

function useFetchLotes() {
  
  return { data: [], loading: false };
}

function useFetchIngressos() {
  
  return { data: [], loading: false };
}