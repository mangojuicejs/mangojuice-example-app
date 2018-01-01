// @flow
import * as Model from './Model';
import * as React from 'mangojuice-react';
import LogicClass from './Logic';
import * as ResultItem from '../ResultItem';


// Types
type Props = { model: Model.Model };


// Views
const SearchResultsView = ({ model }: Props) => (
  <div>
    {model.loading && <div>Loading...</div>}
    {model.error && <div>{model.error}</div>}
    {model.hasNoResults && <div>No results found</div>}
    {model.results.map((x, i) => <ResultItem.View model={x} />)}
  </div>
);

export default SearchResultsView;
