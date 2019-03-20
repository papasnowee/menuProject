import uuid from 'uuid/v4'
import About from '../pages/About'
import Contacts from '../pages/Contacts'

const routes = [
  {
    id: uuid(),
    label: 'О нас',
    component: About,
    path: '/about',
    routes: [
      {
        id: uuid(),
        label: 'контакты',
        component: Contacts,
        path: '/contacts',
      },
    ],
  },
]

export default routes
