// cli/user.mjs
import { createUser, findUserByEmail } from '../repo/user.repo.mjs';

async function main() {
  const [,, command, ...args] = process.argv;

  switch (command) {
    case 'create':
      const [nome, email, senha] = args;
      if (!nome || !email || !senha) {
        console.error('Por favor, forneça nome, email e senha.');
        process.exit(1);
      }
      try {
        await createUser({ nome, email, senha });
        console.log('Usuário cadastrado com sucesso!');
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
      }
      break;
    case 'find':
      const [searchEmail] = args;
      if (!searchEmail) {
        console.error('Por favor, forneça o email a ser pesquisado.');
        process.exit(1);
      }
      try {
        const user = await findUserByEmail(searchEmail);
        if (user) {
          console.log('Usuário encontrado:', user);
        } else {
          console.log('Usuário não encontrado.');
        }
      } catch (error) {
        console.error('Erro ao pesquisar usuário:', error);
      }
      break;
    default:
      console.log('Comando inválido. Use "create" para criar um novo usuário ou "find" para pesquisar um usuário por email.');
  }
}

main();
