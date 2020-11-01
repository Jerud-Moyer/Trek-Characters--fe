import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import CreatePage from '../../containers/CreatePage';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route exact path="/create" component={CreatePage} />
        </Switch>
      </Router>
    </div>
  )
}
