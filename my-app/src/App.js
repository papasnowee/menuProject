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