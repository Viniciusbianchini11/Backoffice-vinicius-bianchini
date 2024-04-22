
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createCategory(name, description) {
  try {
    const category = await prisma.categoria.create({
      data: {
        nome: name,
        descricao: description,
      },
    });

    console.log('Category created:', category);
    return category;
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
}

module.exports = {
  prisma,
  createCategory,
};
