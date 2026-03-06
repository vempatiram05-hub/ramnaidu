import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::navbar.navbar', ({ strapi }) => ({
  async find(ctx) {
    try {
      const data = await strapi.documents('api::navbar.navbar').findFirst({
        status: 'published',
        populate: {
          logo: '*',
          navLinks: {
            populate: {
              dropdownLinks: '*',
            },
          },
        } as any,  // ✅ fixes the TS error
      });
      ctx.body = { data };
    } catch (err) {
      console.error('ERROR:', err);
      ctx.body = { error: (err as Error).message };
    }
  },
}));