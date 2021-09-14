import Fastify from 'fastify';
import fastifyNextJs from 'fastify-nextjs';

const fastify = Fastify();

fastify.register(fastifyNextJs).after(() => {
  fastify.next('/');
});

fastify.listen(3000, (error, address) => {
  if (error) {
    throw error;
  }
  console.log(`Server listening on ${address}`);
});
