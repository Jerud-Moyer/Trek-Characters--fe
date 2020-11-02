import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import CreatePage from '../../containers/CreatePage';
import UpdatePage from '../../containers/UpdatePage';
import DetailPage from '../../containers/DetailPage';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route exact path="/create" component={CreatePage} />
          <Route exect path="/update/:id" component={UpdatePage} />
          <Route exact path="/detail/:id" component={DetailPage} />
        </Switch>
      </Router>
    </div>
  )
}
