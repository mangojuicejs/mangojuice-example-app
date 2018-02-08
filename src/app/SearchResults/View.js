// @flow
import type { Model } from './Logic';
import * as React from 'react';
import { Subscribe } from 'mangojuice-react';
import * as ResultItem from '../ResultItem';


// Views
const SearchResultsView = ({ model }) => (
  <Subscribe to={model}>
    {({ loading, error, hasNoResults, results }) => (
      <div>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {hasNoResults && <div>No results found</div>}
        {results.map((x, i) => <ResultItem.View model={x} />)}
      </div>
    )}
  </Subscribe>
);

export default SearchResultsView;
