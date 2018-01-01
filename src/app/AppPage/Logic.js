// @flow
import type { Model } from './Model';
import { LogicBase, Command, cmd, child, logicOf } from 'mangojuice-core';
import * as SearchForm from '../SearchForm';
import * as SearchResults from '../SearchResults';


export default class AppPage extends LogicBase<Model> {
  children() {
    return {
      form: SearchForm.Logic,
      results: SearchResults.Logic
    };
  }
  hub(cmd: Command) {
    if (cmd.is(logicOf(this.model.form).Search)) {
      return logicOf(this.model.results).Search(this.model.form.query);
    }
  }
}
