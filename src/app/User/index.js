// @flow
import { LogicBase, Event, evt } from 'mangojuice-core';


// Model
export type Model = {
  authorized: boolean,
  name: string
};


// Events
export const Events = {
  Login: evt(),
  LoggedIn: evt()
};


// Logic
export const Logic = class User extends LogicBase<Model> {
  create() {
    return this.logout();
  }

  update(event: Event) {
    return event.when(Events.Login, () => this.login);
  }

  login() {
    return [
      {
        authorized: true,
        name: 'Test User'
      },
      Events.LoggedIn
    ];
  }

  logout() {
    return {
      authorized: false,
      name: ''
    };
  }
}
