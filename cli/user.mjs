// cli/user.mjs

import { program } from 'commander';
import { createUser, getUserByEmail, checkUserPassword } from '../src/repo/user.repo.mjs';

program
    .command('create-user')
    .description('Cria um novo usuário')
    .requiredOption('-e, --email <email>', 'User email')
    .requiredOption('-p, --password <password>', 'User password')
    .action(async (options) => {
        try {
            let u = await createUser({
                email: options.email,
                password: options.password,
            });
            console.log("Usuário criado com id:", u.id);
        }
        catch (err) {
            console.error(err);
        }
    });

program
    .command('get-user-by-email')
    .description('Busca um usuário pelo email')
    .requiredOption('-e, --email <email>', 'User email')
    .action(async (options) => {
        try {
            let u = await getUserByEmail(options.email);
            if (!u) {
                console.log("Usuário não encontrado");
                return;
            }
            console.log(u);
        }
        catch (err) {
            console.error(err);
        }
    });    

program
    .command('check-email-password')
    .description('Tenta autenticar email e senha')
    .requiredOption('-e, --email <email>', 'User email')
    .requiredOption('-p, --password <password>', 'User password')
    .action(async (options) => {
        try {
            let ok = await checkUserPassword(options.email, options.password);
            if (ok) 
                console.log("Usuário autenticado.");
            else
                console.log("Email e/ou senha inválidos.");
        }
        catch (err) {
            console.error(err);
        }
    });     

program.parse();
