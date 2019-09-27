import pkg from './package';
import axios from 'axios';

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#f7df1e' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#41b883' },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css', '~/assets/css/app.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Pre-render dynamic routes
   ** https://nuxtjs.org/api/configuration-generate#the-generate-property
   ** fallback: https://nuxtjs.org/faq/netlify-deployment#for-site-generated-in-spa-mode
   */
  /*
   ** Pre-render dynamic routes
   ** https://nuxtjs.org/api/configuration-generate#the-generate-property
   */
  generate: {
    fallback: true,
    routes: async function() {
      let data = [];
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      data = res.data.slice(0, 4);
      return data.map(post => {
        return {
          route: '/posts/' + post.id,
          payload: post
        };
      });
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
