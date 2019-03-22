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
        label: 'Kонтакты1',
        component: Contacts,
        path: '/about/contacts1',
      },
      {
        id: uuid(),
        label: 'Kонтакты2',
        component: Contacts,
        path: '/about/contacts2',
      },
    ],
  },
  {
    id: uuid(),
    label: 'О нас2',
    component: About,
    path: '/about2',
    routes: [
      {
        id: uuid(),
        label: 'Kонтакты3',
        component: Contacts,
        path: '/about/contacts3',
      },
      {
        id: uuid(),
        label: 'Kонтакты4',
        component: Contacts,
        path: '/about/contacts4',
      },
    ],
  },
]

export default routes
