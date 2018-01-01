// @flow
import * as Model from './Model';
import { LogicBase, cmd, child, task } from 'mangojuice-core';
import * as ResultItem from '../ResultItem';
import * as Tasks from './Tasks';


export default class SearchResults extends LogicBase<Model.Model> {
  children() {
    return {
      results: ResultItem.Logic
    };
  }

  computed() {
    return {
      hasNoResults: () =>
        !this.model.results.length && !this.model.loading
    };
  }

  port(exec: Function, destroyed: Promise<void>) {
    const timer = setInterval(() => {
      exec(this.Search(this.model.query));
    }, 10000);
    destroyed.then(() => clearInterval(timer));
  }

  @cmd Search(query: string) {
    return [
      this.InitSearch(query),
      this.DoSearch()
    ];
  }

  @cmd DoSearch() {
    return task(Tasks.findResults)
      .success(this.SetResultsList)
      .fail(this.HandleSearchFail);
  }

  @cmd InitSearch(query: string) {
    return { query, loading: true };
  }

  @cmd SetResultsList(results: Array<Model.SearchItemType>) {
    return {
      results: results.map(x => ResultItem.createModel({ text: x.article })),
      loading: false
    };
  }

  @cmd HandleSearchFail(err: any) {
    return {
      error: 'Something weird happened',
      loading: false
    };
  }
}
