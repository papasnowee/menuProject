import uuid from "uuid/v4"
import { About, Albums, Users, Contacts } from "../pages"

const routes = [
  {
    id: uuid(),
    label: "О нас",
    component: About,
    path: "/about",
    routes: [
      {
        id: uuid(),
        label: "Kонтакты1",
        component: Contacts,
        path: "/about/contacts1",
      },
      {
        id: uuid(),
        label: "Kонтакты2",
        component: Contacts,
        path: "/about/contacts2",
      },
    ],
  },
  {
    id: uuid(),
    label: "Альбомы",
    component: Albums,
    path: "/albums",
    routes: [
      {
        id: uuid(),
        label: "Kонтакты3",
        component: Contacts,
        path: "/albums/contacts3",
      },
      {
        id: uuid(),
        label: "Kонтакты4",
        component: Contacts,
        path: "/albums/contacts4",
      },
    ],
  },
  {
    id: uuid(),
    label: "Пользователи",
    component: Users,
    path: "/users",
    routes: [
      {
        id: uuid(),
        label: "Kонтакты3",
        component: Contacts,
        path: "/users/contacts3",
      },
      {
        id: uuid(),
        label: "Kонтакты4",
        component: Contacts,
        path: "/users/contacts4",
      },
    ],
  },
]

export default routes
