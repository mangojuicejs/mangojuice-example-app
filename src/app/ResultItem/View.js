// @flow
import * as Model from './Model';
import * as React from 'mangojuice-react';
import LogicClass from './Logic';


// Types
type Props = { model: Model.Model };
type Context = { Logic: LogicClass };


// Views
const ResultItemView = ({ model }: Props, { Logic }: Context) => (
  <div>
    {model.text}<br />
    <button onClick={Logic.Increment(1)}>+</button>
    {model.counter}
    <button onClick={Logic.Increment(-1)}>-</button>
  </div>
);

export default ResultItemView;
