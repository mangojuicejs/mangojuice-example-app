// @flow
import { LogicBase } from 'mangojuice-core';
import * as User from './User';


// Model
export type Model = {
  user: User.Model
};

// Logic
export const Logic = class Shared extends LogicBase<Model> {
  prepare() {
    return {
      user: User
    };
  }
};
