import { About, Albums, Users, Contacts, UsersPage } from "../ui/pages"
import Album from "../ui/pages/Album"
import { getAlbumsRequest, getIsFetchedAlbums } from "../ducks/albums"
import { getUsersRequest, getIsFetchedUsers } from "../ducks/users"
const loadAlbums = {
  selector: getIsFetchedAlbums,
  effect: getAlbumsRequest,
}
const loadUsers = {
  selector: getIsFetchedUsers,
  effect: getUsersRequest,
}

const routes = [
  {
    id: "0",
    label: "О нас",
    component: About,
    path: "/about",
    isNav: true,
    routes: [
      {
        id: "0-0",
        label: "Kонтакты1",
        component: Contacts,
        path: "/about/contacts1",
      },
      {
        id: "0-1",
        label: "Kонтакты2",
        component: Contacts,
        path: "/about/contacts2",
      },
    ],
  },
  {
    id: "1",
    label: "Альбомы",
    component: Albums,
    path: "/albums",
    effects: [loadAlbums],
    isNav: true,
    routes: [
      {
        id: "1-0",
        label: "Альбом",
        component: Album,
        path: "/albums/album:albumId?",
        effects: "extends",
      },
    ],
  },
  {
    id: "2",
    label: "Пользователи",
    component: Users,
    memoize: true,
    path: "/users",
    effects: [loadUsers],
    routes: [
      {
        id: "2-0",
        label: "Страница пользователей",
        component: UsersPage,
        path: "/users/page:param",
        effects: "extends",
      },
    ],
  },
]

export default routes
