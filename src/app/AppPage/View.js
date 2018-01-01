// @flow
import * as Model from './Model';
import * as React from 'mangojuice-react';
import LogicClass from './Logic';
import * as SearchForm from '../SearchForm';
import * as SearchResults from '../SearchResults';


// Types
type Props = { model: Model.Model };


// Views
const AppPageView = ({ model }: Props) => (
  <div>
    <SearchForm.View model={model.form} />
    <SearchResults.View model={model.results} />
  </div>
);

export default AppPageView;
