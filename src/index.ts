import { Server } from './server/Server';

const run = async () => {
  try {
    const server = new Server();
    await server.listen();
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
    process.exit(1);
  }
};

run();