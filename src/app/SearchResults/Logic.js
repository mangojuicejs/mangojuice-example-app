// @flow
import { LogicBase, Event, child, task } from 'mangojuice-core';
import * as ResultItem from '../ResultItem';
import * as Tasks from './Tasks';


// Types
export type SearchItemType = {
  article: string
};
export type FactoryProps = {
  query?: string
};
export type Model = {
  results: Array<ResultItem.Model>,
  query: string,
  loading: bool,
  error: string,
  hasNoResults: bool
};


/**
 * Search results
 */
export default class SearchResults extends LogicBase<Model> {
  port(exec: Function, destroyed: Promise<void>) {
    const timer = setInterval(() => {
      exec(this.search(this.model.query));
    }, 10000);
    destroyed.then(() => clearInterval(timer));
  }

  prepare({ query }: FactoryProps = {}) {
    const initModel = {
      results: [],
      query: '',
      loading: false,
      error: '',
      hasNoResults: () =>
        !this.model.results.length && !this.model.loading
    };
    return [
      initModel,
      query && this.search(query)
    ];
  }

  search(query: string) {
    return [
      { query, loading: true },
      task(Tasks.findResults)
        .success(this.setResultsList)
        .fail(this.handleSearchFail)
    ];
  }

  setResultsList(results: Array<SearchItemType>) {
    return {
      results: results.map(x => child(ResultItem.Logic, { text: x.article })),
      loading: false
    };
  }

  handleSearchFail(err: any) {
    return {
      error: err && err.message || 'Some unkonwn error happened',
      results: [],
      loading: false
    };
  }
}
