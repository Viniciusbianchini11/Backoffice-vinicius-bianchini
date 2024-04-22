import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'GET') {
    try {
      const relatorio = await prisma.venda.findMany({
        include: {
          ingresso: true,
        },
      });

      const quantidadeVendida = relatorio.reduce((acc, venda) => acc + venda.quantidade, 0);
      const valorTotal = relatorio.reduce((acc, venda) => acc + venda.valorTotal, 0);

      res.status(200).json({ quantidadeVendida, valorTotal, relatorio });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}