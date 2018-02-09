// @flow
import { LogicBase, Event, child, task, context } from 'mangojuice-core';
import { APP_CONTEXT } from '../AppPage/Logic';
import * as User from '../User';
import * as ResultItem from '../ResultItem';
import * as Events from './Events';
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
  create({ query }: FactoryProps = {}) {
    const initModel = {
      results: [],
      query: '',
      loading: false,
      error: '',
      hasNoResults: () =>
        !this.model.results.length && !this.model.loading
    };
    return [
      context(APP_CONTEXT),
      initModel,
      this.startIntervalUpdater,
      query && this.search(query)
    ];
  }

  update(event: Event) {
    return [
      event.when(Events.Search, ({ query }) => this.search(query)),
      event.when(User.Events.Login, () => this.doSomething)
    ];
  }

  startIntervalUpdater() {
    return task(Tasks.intervalTrigger)
      .notify(() => this.search(this.model.query));
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
      results: results.map(x => child(ResultItem.Logic).create({ text: x.article })),
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

  doSomething() {
    return context(APP_CONTEXT).get((appCtx) => ({
      query: appCtx.user.name
    }));
  }
}
