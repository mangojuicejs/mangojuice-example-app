// @flow
import * as Model from './Model';
import * as React from 'mangojuice-react';
import LogicClass from './Logic';


// Types
type Props = { model: Model.Model };
type Context = { Logic: LogicClass };


// Views
const SearchFormView = ({ model }: Props, { Logic }: Context) => (
  <div>
    <h2>Complicated Search Form</h2>
    <input value={model.query} onChange={Logic.setQuery} /><br />
    <button onClick={Logic.search}>Search {model.count} chars</button>
  </div>
);

export default SearchFormView;
