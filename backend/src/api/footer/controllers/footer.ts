import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::footer.footer', ({ strapi }) => ({
  async find(ctx) {
    try {
      const data = await strapi.documents('api::footer.footer').findFirst({
        status: 'published',
        populate: {
          sociallinks: '*',
        } as any,
      });
      ctx.body = { data };
    } catch (err) {
      console.error('ERROR:', err);
      ctx.body = { error: (err as Error).message };
    }
  },
}));