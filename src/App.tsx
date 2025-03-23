import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reduxManager/store';
import UserList from './components/UserList';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import UserDetails from './pages/UserDetails';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/add-user" component={AddUser} />
          <Route path="/edit-user/:id" component={EditUser} />
          <Route path="/users/:id" component={UserDetails} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;