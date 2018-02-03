// @flow
import { LogicBase, cmd, child } from 'mangojuice-core';
import { Search } from './Events';


// Types
export type FactoryProps = {
};
export type Model = {
  query: string,
  count: number
};


/**
 * Form for searching the item
 */
export default class SearchForm extends LogicBase<Model> {
  prepare() {
    return {
      query: '',
      count: () => this.model.query.length
    };
  }

  SetQuery(e: any) {
    return { query: e.target.value };
  }

  Search() {
    return Search({ query: this.model.query });
  }
}
