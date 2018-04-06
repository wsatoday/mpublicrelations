const routes = [
  {
    path: '/',
    component: require('./views/Home'),
    meta: {
      keepAlive:  true
    }
  },
  {
    path: '/sobre',
    component: require('./views/About'),
    meta: {
      keepAlive:  true
    }
  },
  {
    path: '/clientes',
    component: require('./views/Clients'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/servicos',
    component: require('./views/Services'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/equipa',
    component: require('./views/Team'),
    meta: {
      keepAlive:  true
    }
  },
  {
    path: '/contactos',
    component: require('./views/Contacts'),
    meta: {
      keepAlive:  true
    }
  }
]

export default routes