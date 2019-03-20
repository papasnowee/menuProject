import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import routes from './router'
class App extends React.Component {
  get getRoutes() {
    const _routes = []

    function getRoute(routes) {
      routes.forEach(({ path, component, routes = null }) => {
        _routes.push(<Route path={path} component={component} />)
        if (routes) getRoute(routes)
      })
    }
    getRoute(routes)

    return _routes
  }

  get $renderMenu() {
    function menuBuilder(routes) {
      const menuItem = []
      routes.forEach(({ path, component, label, routes = null }) => {
        menuItem.push(
          <li className="menu__item">
            <Link to={path}>{label[0] + label.slice(1)}</Link>
            {routes ? <ul>{menuBuilder(routes)}</ul> : null}
          </li>
        )
      })
      return menuItem
    }

    return (
      <nav>
        <ul className="menu">{menuBuilder(routes)}</ul>
      </nav>
    )
  }

  render() {
    return (
      <>
        {this.$renderMenu}
        <Switch>{this.getRoutes}</Switch>
      </>
    )
  }
}
export default App

//   return (
//     <div>
//       <Header />

//       <Switch>
//         <Route path="/contacts" components={Contacts} />
//         <Route component={Home} />
//       </Switch>
//     </div>
//   )
// }

// function Home() {
//   return null
// }

// function About({ match }) {
//   return (
//     <>
//       <ul>
//         <li>
//           <Link to={`${match.url}/111`}>111</Link>

//           <Route path={`${match.path}/111`} component={LinkList} />
//         </li>
//         <li>
//           <Link to={`${match.url}/222`}>222</Link>

//           <Route path={`${match.path}/222`} component={LinkList2} />
//         </li>
//         <li>
//           <Link to={`${match.url}/333`}>333</Link>

//           <Route path={`${match.path}/333`} component={LinkList3} />
//         </li>
//       </ul>
//     </>
//   )
// }

// function Topics({ match }) {
//   return (
//     <>
//       <ul>
//         <li>
//           <Link to={`${match.url}/aaa`}>aaa</Link>

//           <Route path={`${match.path}/aaa`} component={LinkList} />
//         </li>
//         <li>
//           <Link to={`${match.url}/bbb`}>bbb</Link>

//           <Route path={`${match.path}/bbb`} component={LinkList2} />
//         </li>
//         <li>
//           <Link to={`${match.url}/ccc`}>ccc</Link>

//           <Route path={`${match.path}/ccc`} component={LinkList3} />
//         </li>
//       </ul>
//     </>
//   )
// }

// function Contacts({ match }) {
//   return (
//     <>
//       <ul>
//         <li>
//           <Link to={`${match.url}/111`}>111</Link>

//           <Route path={`${match.path}/111`} component={LinkList} />
//         </li>
//         <li>
//           <Link to={`${match.url}/222`}>222</Link>

//           <Route path={`${match.path}/222`} component={LinkList2} />
//         </li>
//         <li>
//           <Link to={`${match.url}/333`}>333</Link>

//           <Route path={`${match.path}/333`} component={LinkList3} />
//         </li>
//       </ul>
//     </>
//   )
// }

// function Header() {
//   return (
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//         <Route path="/about" component={About} />
//       </li>
//       <li>
//         <Link to="/topics">Topics</Link>
//         <Route path="/topics" component={Topics} />
//       </li>
//       <li>
//         <Link to="/contacts">Contacts</Link>
//         <Route path="/contacts" component={Contacts} />
//       </li>
//     </ul>
//   )
// }

// function LinkList({ match }) {
//   return (
//     <>
//       <h1>{match.params.id}</h1>
//       <ul>
//         <li>
//           <Link to={`${match.url}/111`}>111</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/222`}>222</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/333`}>333</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// function LinkList2({ match }) {
//   return (
//     <>
//       <h1>{match.params.id}</h1>
//       <ul>
//         <li>
//           <Link to={`${match.url}/111`}>111</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/222`}>222</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/333`}>333</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// function LinkList3({ match }) {
//   return (
//     <>
//       <h1>{match.params.id}</h1>
//       <ul>
//         <li>
//           <Link to={`${match.url}/111`}>111</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/222`}>222</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/333`}>333</Link>
//         </li>
//       </ul>
//     </>
//   )
