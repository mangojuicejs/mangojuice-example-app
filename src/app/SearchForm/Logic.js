// @flow
import type { Model } from './Model';
import { LogicBase, cmd, child } from 'mangojuice-core';


export default class SearchForm extends LogicBase<Model> {
  computed() {
    return {
      count: () => this.model.query.length
    };
  }
  @cmd SetQuery(e: any) {
    return { query: e.target.value };
  }
  @cmd Search() {
  }
}
