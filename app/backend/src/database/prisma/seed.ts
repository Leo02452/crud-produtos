/* eslint-disable max-lines-per-function */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: 'Escova de dentes',
        description: 'Cerdas macias na cor preta',
        price: '25,99',
      },
      {
        name: 'Escova de cabelo',
        description: 'Tamanho grande com cabo branco',
        price: '10,99',
      },
      {
        name: 'Organizador de cabo',
        description: 'Para organizar seus cabos especiais',
        price: '5,99',
      },
      {
        name: 'Shampoo Orgânico',
        description: 'Para cabelos lisos',
        price: '22,49',
      },
      {
        name: 'Ração GranPlus',
        description: 'Para cachorros adultos',
        price: '62,90',
      },
      {
        name: 'Vermífugo Milbemax',
        description: 'Para gatos',
        price: '20,99',
      },
      {
        name: 'Vermífugo Ourofino',
        description: 'Para cachorros',
        price: '25,40',
      },
      {
        name: 'Caixa de transporte',
        description: 'Feita para animais de pequeno porte',
        price: '100,29',
      },
      {
        name: 'Arranhador',
        description: 'Para gatos filhotes',
        price: '15,99',
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
