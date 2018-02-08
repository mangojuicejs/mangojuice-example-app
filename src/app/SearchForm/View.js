// @flow
import type { Model } from './Logic';
import * as React from 'react';
import { Subscribe } from 'mangojuice-react';
import * as Events from './Logic';


// Views
const SearchFormView = ({ model }) => (
  <Subscribe to={model} events={Events}>
    {({ query, count }, { ChangeQuery, Search }) => (
      <div>
        <h2>Complicated Search Form</h2>
        <input value={query} onChange={ChangeQuery} /><br />
        <button onClick={Search}>Search {count} chars</button>
      </div>
    )}
  </Subscribe>
);

export default SearchFormView;
