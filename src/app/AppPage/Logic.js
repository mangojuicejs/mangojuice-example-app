// @flow
import { LogicBase, Command, child, depends } from 'mangojuice-core';
import * as SearchForm from '../SearchForm';
import * as SearchResults from '../SearchResults';
import * as User from '../User';


// Types
export type Model = {
  form: SearchForm.Model,
  results: SearchResults.Model,
  user: ?User.Model
};


/**
 * Root logic of the app
 */
export default class AppPage extends LogicBase<Model> {
  prepare() {
    return {
      form: child(SearchForm.Logic)
        .on(SearchForm.Events.Search, this.search),
      results: SearchResults.Logic,
      user: User.Logic
    };
  }

  context() {
    return {
      user: this.model.user
    };
  }

  login() {
    return User.Events.Login;
  }

  search(event: SearchForm.Events.Search) {
    const props = { query: event.query };
    return { results: child(SearchResults.Logic, props) };
  }
}
