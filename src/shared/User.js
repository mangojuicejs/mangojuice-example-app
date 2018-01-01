// @flow
import { LogicBase, cmd } from 'mangojuice-core';


// Model
export type Model = {
  authorized: boolean,
  name: string
};
export const createModel = (): Model => ({
  authorized: false,
  name: ''
});


// Logic
export const Logic = class User extends LogicBase<Model> {
  @cmd Login() {
    return {
      authorized: true,
      name: 'Test User'
    };
  }

  @cmd Logout() {
    return {
      authorized: false,
      name: ''
    };
  }
}
