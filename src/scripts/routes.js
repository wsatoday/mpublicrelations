const routes = [
  {
    path: '/',
    component: require('./views/Home'),
    meta: {
      keepAlive:  true
    }
  },
  {
    path: '/about',
    component: require('./views/About'),
    meta: {
      keepAlive:  true
    }
  }
]

export default routes