// pages/api/eventos.js

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
      const eventos = await prisma.evento.findMany();
      res.status(200).json(eventos);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    try {
      const { nome, data, local, descricao } = req.body;
      const evento = await prisma.evento.create({
        data: {
          nome,
          data,
          local,
          descricao,
        },
      });
      res.status(201).json(evento);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
