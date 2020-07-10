'use strict'

const resolve = require('path').resolve

module.exports = {
  telemetry: false,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Adonuxt',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Adonuxt project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#744d82' },
  /*
  ** Point to resources
  */
  srcDir: resolve(__dirname, '..', 'resources'),
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios
  */
  axios: {
    host: process.env.HOST,
    port: process.env.PORT,
    prefix: '/',
    baseURL: `http://${process.env.HOST}:${process.env.PORT}/`
  }
}
