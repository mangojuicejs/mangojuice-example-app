// @flow
import * as SearchForm from '../SearchForm';
import * as SearchResults from '../SearchResults';
import * as User from 'shared/User';


// Types
export type FactoryProps = {
};
export type Model = {
  form: SearchForm.Model,
  results: SearchResults.Model,
  user: ?User.Model
};


// Utils
export const createModel = (props: FactoryProps = {}): Model => ({
  form: SearchForm.createModel(),
  results: SearchResults.createModel(),
  user: null
});
