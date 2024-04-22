
import { useState } from 'react';
import { useRouter } from 'next/router';
import '../fonte/SignUp.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Usuário cadastrado:', { email, password });
    router.push('/signin'); 
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Cadastrar-se</h1>
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
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Cadastrar</button>
      </form>
    </div>
  );
}
