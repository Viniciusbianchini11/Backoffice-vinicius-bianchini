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
      const lotes = await prisma.loteIngresso.findMany();
      res.status(200).json(lotes);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    try {
      const { nome, quantidade, valor, categoriaId, eventoId } = req.body;
      const lote = await prisma.loteIngresso.create({
        data: {
          nome,
          quantidade,
          valor,
          categoriaId,
          eventoId,
        },
      });
      res.status(201).json(lote);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}