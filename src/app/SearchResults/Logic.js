// @flow
import { LogicBase, Event, child, task } from 'mangojuice-core';
import * as SearchForm from '../SearchForm';
import * as ResultItem from '../ResultItem';
import * as Tasks from './Tasks';


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


/**
 * Search results
 */
export default class SearchResults extends LogicBase<Model> {
  prepare() {
    return {
      results: [],
      query: '',
      loading: false,
      error: '',
      hasNoResults: () =>
        !this.model.results.length && !this.model.loading
    };
  }

  hub(event: Event) {
    if (event instanceof SearchForm.Events.Search) {
      return this.Search(event.query);
    }
  }

  port(exec: Function, destroyed: Promise<void>) {
    const timer = setInterval(() => {
      exec(this.Search(this.model.query));
    }, 10000);
    destroyed.then(() => clearInterval(timer));
  }

  Search(query: string) {
    return [
      this.InitSearch(query),
      this.DoSearch()
    ];
  }

  DoSearch() {
    return task(Tasks.findResults)
      .success(this.SetResultsList)
      .fail(this.HandleSearchFail);
  }

  InitSearch(query: string) {
    return { query, loading: true };
  }

  SetResultsList(results: Array<SearchItemType>) {
    return {
      results: results.map(x => child(ResultItem.Logic, { text: x.article })),
      loading: false
    };
  }

  HandleSearchFail(err: any) {
    return {
      error: err && err.message || 'Some unkonwn error happened',
      results: [],
      loading: false
    };
  }
}
