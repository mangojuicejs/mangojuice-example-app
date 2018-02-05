// @flow
import type { Model } from './Logic';
import * as React from 'mangojuice-react';
import LogicClass from './Logic';


// Types
type Props = { model: Model };
type Context = { Logic: LogicClass };


// Views
const ResultItemView = ({ model }: Props, { Logic }: Context) => (
  <div>
    {model.text}<br />
    <button onClick={Logic.incrementPositive}>+</button>
    {model.counter}
    <button onClick={Logic.incrementNegative}>-</button>
  </div>
);

export default ResultItemView;
