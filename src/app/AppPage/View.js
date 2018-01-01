// @flow
import * as Model from './Model';
import * as React from 'mangojuice-react';
import LogicClass from './Logic';
import * as SearchForm from '../SearchForm';
import * as SearchResults from '../SearchResults';


// Types
type Props = { model: Model.Model };
type Context = { Logic: LogicClass };


// Views
const AppPageView = ({ model }: Props, { Logic }: Context) => (
  <div>
    {model.user && model.user.authorized && <div>Hello, {model.user.name}</div>}
    {model.user && !model.user.authorized && (
      <button onClick={Logic.Login}>Login</button>
    )}
    <SearchForm.View model={model.form} />
    <SearchResults.View model={model.results} />
  </div>
);

export default AppPageView;
