// @flow
import * as SearchForm from '../SearchForm';
import * as SearchResults from '../SearchResults';


// Types
export type FactoryProps = {
};
export type Model = {
  form: SearchForm.Model,
  results: SearchResults.Model
};


// Utils
export const createModel = (props: FactoryProps = {}): Model => ({
  form: SearchForm.createModel(),
  results: SearchResults.createModel()
});
