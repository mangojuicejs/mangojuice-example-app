// @flow
import { LogicBase } from 'mangojuice-core';
import * as Events from './Events';


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
  create({ text = 'No text' }: FactoryProps = {}) {
    return {
      counter: 0,
      text
    };
  }

  update(event: Event) {
    return [
      event.when(Event.Increment, () => this.increment(1)),
      event.when(Event.Decrement, () => this.increment(-1))
    ];
  }

  increment(amount: number) {
    return { counter: this.model.counter + amount };
  }
}
