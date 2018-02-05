// @flow
import { LogicBase, child } from 'mangojuice-core';
import * as Events from './Events';


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
    return Events.Search({ query: this.model.query });
  }
}
