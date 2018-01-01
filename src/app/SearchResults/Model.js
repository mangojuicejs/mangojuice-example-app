// @flow
import * as ResultItem from '../ResultItem';


// Types
export type SearchItemType = {
  article: string
};
export type FactoryProps = {
};
export type Model = {
  results: Array<ResultItem.Model>,
  query: string,
  loading: bool,
  error: string,
  hasNoResults: bool
};


// Utils
export const createModel = (props: FactoryProps = {}): Model => ({
  results: [],
  query: '',
  loading: false,
  error: '',
  hasNoResults: false
});
