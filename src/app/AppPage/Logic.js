// @flow
import { Event, child, context } from 'mangojuice-core';
import * as SearchForm from '../SearchForm';
import * as SearchResults from '../SearchResults';
import * as User from '../User';


// Types
export type Model = {
  form: SearchForm.Model,
  results: SearchResults.Model,
  user: ?User.Model
};


// Context with commonly used models, like user, router, etc
export const APP_CONTEXT = () => ({
  user: child(User.Logic).create()
});

/**
 * Root logic of the app
 */
export default class AppPage extends LogicBase<Model> {
  create() {
    return [
      context(APP_CONTEXT).create(),
      { form: child(SearchForm.Logic).create()
        results: child(SearchResults.Logic).create() }
    ];
  }

  update(event: Event) {
    return [
      event.when(SearchForm.Events.Search, (evt) => this.search(evt))
    ];
  }

  login() {
    return context(APP_CONTEXT).update({
      user: child(User.Logic).update(User.Events.Login)
    });
  }

  search({ query }) {
    return {
      results: child(SearchResults.Logic)
        .update(SearchResults.Events.Search(query))
      };
  }
}
