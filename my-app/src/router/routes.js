import uuid from "uuid/v4"
import { About, Albums, Users, Contacts } from "../pages"
import Album from "../pages/Album"

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
        label: "Альбом",
        component: Album,
        path: "/albums/album:albumId?",
      },
    ],
  },
  {
    id: uuid(),
    label: "Пользователи",
    component: Users,
    path: "/users",
    routes: [],
  },
]

export default routes
