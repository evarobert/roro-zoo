import { Link, Route, Switch } from 'react-router-dom';
import React from 'react';
import './app.css';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

const Zoos = () => {
  return (
    <div>
      <h2>Zoos</h2>
    </div>
  );
}

const Animals = () => {
  return (
    <div>
      <h2>Animals</h2>
    </div>
  );
}

export class App extends React.Component {
  constructor(props: any) {
  super(props);
      this.state = {
        weathers: [],
      };
      this.test();
  }

  test() {
    const url = 'https://localhost:44327/weatherforecast';
    fetch(url)
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(err => { 
      console.log(err); 
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/zoos">Zoos</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/zoos"><Zoos /></Route>
          <Route path="/animals"><Animals /></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
