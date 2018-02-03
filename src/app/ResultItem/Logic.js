// @flow
import { LogicBase, cmd, child } from 'mangojuice-core';


// Types
export type FactoryProps = {
  text: string
};
export type Model = {
  counter: number,
  text: string
};


// Logic
export default class ResultItem extends LogicBase<Model> {
  prepare({ text = 'No text' }: FactoryProps = {}) {
    return {
      counter: 0,
      text
    };
  }

  Increment(amount: number) {
    return { counter: this.model.counter + amount };
  }
}
