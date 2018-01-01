// @flow
import type { Model } from './Model';
import { LogicBase, cmd, child } from 'mangojuice-core';


export default class ResultItem extends LogicBase<Model> {
  @cmd Increment(amount: number) {
    return { counter: this.model.counter + amount };
  }
}
