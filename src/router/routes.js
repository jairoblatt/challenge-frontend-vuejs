function page(path) {
  return () => import( /* webpackChunkName: '' */  `@/pages/${path}`).then(m => m.default || m)
}
export default [
  {
    path: '/',
    component: page('Movies.vue'),
    name: 'movie'
  },
  {
    path: '/tv',
    component: page('TvShow.vue'),
    name: 'tv'
  },
  {
    path: '/:type/:id',
    component: page('Details.vue'),
    name: 'details'
  }

  // {
  //     path: '*',
  //     component: page('errors/404')
  // }

]