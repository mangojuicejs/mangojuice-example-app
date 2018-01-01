// @flow
import { LogicBase } from 'mangojuice-core';
import * as User from './User';


// Model
export type Model = {
  user: User.Model
};
export const createModel = (): Model => ({
  user: User.createModel()
});


// Logic
export const Logic = class Shared extends LogicBase<Model> {
  children() {
    return {
      user: User.Logic
    };
  }
};
