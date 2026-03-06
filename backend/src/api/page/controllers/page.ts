import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::page.page', ({ strapi }) => ({
  async find(ctx) {
    try {
      const data = await strapi.documents('api::page.page').findMany({
        status: 'published',
        populate: {
          sections: {
            on: {
              'sections.hero': {
                populate: {
                  image: '*',
                },
              },
              'sections.about-section': {
                populate: {
                  image: '*',
                  features: { populate: '*' },
                },
              },
              'sections.industries': {
                populate: {
                  industryCard: {
                    populate: { icon: '*' },
                  },
                },
              },
              'sections.service-sections': {
                populate: {
                  services: {
                    populate: { icon: '*' },
                  },
                },
              },
              'sections.case-study': {
                populate: {
                  caseCard: {
                    populate: { link: '*' },
                  },
                  button: '*',
                },
              },
              'sections.tech-stack': {
                populate: {
                  techitem: '*',
                },
              },
              'sections.blog-section': {
                populate: {
                  blogcard: {
                    populate: { image: '*' },
                  },
                  Button: '*',
                },
              },
              'sections.testimonials': {
                populate: {
                  testimonialcard: '*',
                },
              },
              'sections.home-slider': {
                populate: {
                  homeSlider: {
                    populate: { image: '*' },
                  },
                },
              },
            },
          },
        } as any,
      });
      ctx.body = { data };
    } catch (err) {
      console.error('ERROR:', err);
      ctx.body = { error: (err as Error).message };
    }
  },
}));