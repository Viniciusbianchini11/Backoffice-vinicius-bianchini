
import { useState } from 'react';
import { useRouter } from 'next/router';
import '../fonte/signin.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === 'usuario@example.com' && password === 'senha123') {
      router.push('/dashboard'); 
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Entrar</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <label className="block mb-4">
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-4">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input mt-1 block w-full"
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Entrar</button>
      </form>
    </div>
  );
}
