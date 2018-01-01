// @flow
import type { Model } from './Model';
import { LogicBase, Command, cmd, child, logicOf, depends } from 'mangojuice-core';
import * as SearchForm from '../SearchForm';
import * as SearchResults from '../SearchResults';
import * as Shared from '../../shared/Main';


export default class AppPage extends LogicBase<Model, Shared.Model> {
  children() {
    return {
      form: SearchForm.Logic,
      results: SearchResults.Logic
    };
  }

  computed() {
    return {
      user: depends(this.shared.user).compute(() => this.shared.user)
    };
  }

  hub(cmd: Command) {
    if (cmd.is(logicOf(this.model.form).Search)) {
      return logicOf(this.model.results).Search(this.model.form.query);
    }
  }

  @cmd Login() {
    return logicOf(this.shared.user).Login();
  }
}
