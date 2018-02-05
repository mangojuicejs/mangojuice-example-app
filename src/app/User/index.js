// @flow
import { LogicBase, Event } from 'mangojuice-core';


// Model
export type Model = {
  authorized: boolean,
  name: string
};


// Events
export const Events = {
  Login: Event.create()
};


// Logic
export const Logic = class User extends LogicBase<Model> {
  hub(event: Event) {
    if (event instanceof Events.Login) {
      return this.login;
    }
  }

  prepare() {
    return this.logout();
  }

  login() {
    return {
      authorized: true,
      name: 'Test User'
    };
  }

  logout() {
    return {
      authorized: false,
      name: ''
    };
  }
}
