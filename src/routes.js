import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login';
import Cadastro from './pages/Cadastro'
import Profile from './pages/Profile';
import NewReceita from './pages/NewReceita';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/perfil" component={Profile} />
        <Route path="/receitas/new" component={NewReceita} />
      </Switch>
    </BrowserRouter>
  );
}