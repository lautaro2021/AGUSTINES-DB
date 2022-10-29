'use strict';
/**
 * nav router
 */
// import { factories } from '@strapi/strapi';
// export default factories.createCoreRouter('api::nav.nav');
const { createCoreRouter } = require('@strapi/strapi').factories;
module.exports = createCoreRouter('api::nav.nav');
