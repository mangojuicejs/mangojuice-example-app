// @flow
import { LogicBase, Event, child } from 'mangojuice-core';
import * as Events from './Events';


// Types
export type Model = {
  query: string,
  count: number
};


/**
 * Form for searching the item
 */
export default class SearchForm extends LogicBase<Model> {
  create() {
    return {
      query: '',
      count: () => this.model.query.length
    };
  }

  update(event: Event) {
    return event.when(Events.Search, () => this.search);
  }

  setQuery(e: any) {
    return { query: e.target.value };
  }

  search() {
    return Events.Search(this.model.query);
  }
}
