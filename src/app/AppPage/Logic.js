// @flow
import { LogicBase, Command, child, depends } from 'mangojuice-core';
import * as SearchForm from '../SearchForm';
import * as SearchResults from '../SearchResults';
import * as User from '../User';


// Types
export type FactoryProps = {
};
export type Model = {
  form: SearchForm.Model,
  results: SearchResults.Model,
  user: ?User.Model
};


/**
 * Root logic of the app
 */
export default class AppPage extends LogicBase<Model> {
  prepare(props: FactoryProps) {
    return {
      form: SearchForm.Logic,
      results: SearchResults.Logic,
      user: child(User.Logic)
    };
  }

  context() {
    return {
      user: this.model.user
    };
  }

  Login() {
    return User.Events.Login;
  }
}
