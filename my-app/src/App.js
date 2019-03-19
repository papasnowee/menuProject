<<<<<<< HEAD
import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/contacts" components={Contacts} />
        <Route component={Home} />
      </Switch>
    </div>
  )
}

function Home() {
  return null
}

function About({ match }) {
  return (
    <>
      <ul>
        <li>
          <Link to={`${match.url}/111`}>111</Link>

          <Route path={`${match.path}/111`} component={LinkList} />
        </li>
        <li>
          <Link to={`${match.url}/222`}>222</Link>

          <Route path={`${match.path}/222`} component={LinkList2} />
        </li>
        <li>
          <Link to={`${match.url}/333`}>333</Link>

          <Route path={`${match.path}/333`} component={LinkList3} />
        </li>
      </ul>
    </>
  )
}

function Topics({ match }) {
  return (
    <>
      <ul>
        <li>
          <Link to={`${match.url}/aaa`}>aaa</Link>

          <Route path={`${match.path}/aaa`} component={LinkList} />
        </li>
        <li>
          <Link to={`${match.url}/bbb`}>bbb</Link>

          <Route path={`${match.path}/bbb`} component={LinkList2} />
        </li>
        <li>
          <Link to={`${match.url}/ccc`}>ccc</Link>

          <Route path={`${match.path}/ccc`} component={LinkList3} />
        </li>
      </ul>
    </>
  )
}

function Contacts({ match }) {
  return (
    <>
      <ul>
        <li>
          <Link to={`${match.url}/111`}>111</Link>

          <Route path={`${match.path}/111`} component={LinkList} />
        </li>
        <li>
          <Link to={`${match.url}/222`}>222</Link>

          <Route path={`${match.path}/222`} component={LinkList2} />
        </li>
        <li>
          <Link to={`${match.url}/333`}>333</Link>

          <Route path={`${match.path}/333`} component={LinkList3} />
        </li>
      </ul>
    </>
  )
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
        <Route path="/about" component={About} />
      </li>
      <li>
        <Link to="/topics">Topics</Link>
        <Route path="/topics" component={Topics} />
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
        <Route path="/contacts" component={Contacts} />
      </li>
    </ul>
  )
}

function LinkList({ match }) {
  return (
    <>
      <h1>{match.params.id}</h1>
      <ul>
        <li>
          <Link to={`${match.url}/111`}>111</Link>
        </li>
        <li>
          <Link to={`${match.url}/222`}>222</Link>
        </li>
        <li>
          <Link to={`${match.url}/333`}>333</Link>
        </li>
      </ul>
    </>
  )
}

function LinkList2({ match }) {
  return (
    <>
      <h1>{match.params.id}</h1>
      <ul>
        <li>
          <Link to={`${match.url}/111`}>111</Link>
        </li>
        <li>
          <Link to={`${match.url}/222`}>222</Link>
        </li>
        <li>
          <Link to={`${match.url}/333`}>333</Link>
        </li>
      </ul>
    </>
  )
}

function LinkList3({ match }) {
  return (
    <>
      <h1>{match.params.id}</h1>
      <ul>
        <li>
          <Link to={`${match.url}/111`}>111</Link>
        </li>
        <li>
          <Link to={`${match.url}/222`}>222</Link>
        </li>
        <li>
          <Link to={`${match.url}/333`}>333</Link>
        </li>
      </ul>
    </>
  )
}
export default App
=======
import React from 'react';
import {Link, Route} from 'react-router-dom';

const Home = () => <p>Home page</p>;
const Cats = ({match}) => <p>Cats page {match.params.id}</p>;
const Hobbies = ({match}) => (
    <div>
      <p>Hobbies page {match.params.id}</p>
      <Link to={`${match.url}/cats/1`}>cats 1</Link>
      <Link to={`${match.url}/cats/2`}>cats 2</Link>
      <Route path={`${match.path}/cats/:id`} component={Cats} />
    </div>
);
const About = ({match}) => (
    <div>
      <p>About page</p>
      <Link to={`${match.url}/hobbies/1`}>Hobbies 1</Link>
      <Link to={`${match.url}/hobbies/2`}>Hobbies 2</Link>
      <Link to={`${match.url}/hobbies/3`}>Hobbies 3</Link>
      <hr />
      <Route path={`${match.path}/hobbies/:id`} component={Hobbies} />
    </div>
);
const App = () => (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
);
export default App;
>>>>>>> 5c7552dedcd113bcefd3a10c24c8add242116e4a
