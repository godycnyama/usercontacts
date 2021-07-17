import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './Layout';
import './App.css';
import PageTransitionAnimation from './shared/PageTransitionAnimation';
import CreateUser from './features/users/CreateUser';
import ManageUsers from './features/users/ManageUsers';
import UpdateUser from './features/users/UpdateUser';
import ViewUser from './features/users/ViewUser';

function App() {
  return (
    <Layout>
      <ToastContainer />
      <Switch>
          <Route exact path="/" component={PageTransitionAnimation(ManageUsers)} />
          <Route path="/create-user" component={PageTransitionAnimation(CreateUser)}/>
          <Route path="/update-user" component={PageTransitionAnimation(UpdateUser)}/>
          <Route path="/view-user" component={PageTransitionAnimation(ViewUser)}/>
      </Switch>
    </Layout>
  );
}

export default App;
