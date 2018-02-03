// @flow
import { LogicBase, Command, child, logicOf, depends } from 'mangojuice-core';
import * as SearchForm from '../SearchForm';
import * as SearchResults from '../SearchResults';
import * as User from '../../shared/User';
import * as Shared from '../../shared/Main';


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
export default class AppPage extends LogicBase<Model, Shared.Model> {
  prepare(props: FactoryProps) {
    return {
      form: SearchForm.Logic,
      results: SearchResults.Logic,
      user: depends(this.shared.user).compute(() => this.shared.user)
    };
  }

  Login() {
    return User.Events.Login;
  }
}
