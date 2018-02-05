// @flow
import { LogicBase, child } from 'mangojuice-core';


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

  increment(amount: number) {
    return { counter: this.model.counter + amount };
  }

  incrementPositive() {
    return this.increment(1);
  }

  incrementNegative() {
    return this.increment(-1);
  }
}
