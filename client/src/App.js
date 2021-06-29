import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// components
import NavBar from './components/Layout/NavBar';
import ListItems from './screens/ListItems';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ListItems} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
