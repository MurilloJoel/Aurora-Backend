import prisma from './controllers/prismaClient';

async function main() {
  try {
    const user = await prisma.users.create({
      data: {
        email: 'user3@example.com',
        nombre: 'User Three',
        password_hash: 'hashed_password_placeholder',
        rol_id: 1,
        // optional fields can be null or omitted; provide required timestamps
        creado_en: new Date(),
        actualizado_en: new Date(),
        activo: true,
      },
    });

    console.log('✅ Usuario creado:', user);
  } catch (error) {
    console.error('❌ Error al crear usuario:', error);
  } finally {
    await prisma.$disconnect();
  }
  try {
    const users = await prisma.users.findMany();
    console.log('📋 Usuarios en la base de datos:', users);
  } catch (error) {
    console.error('❌ Error al obtener usuarios:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
