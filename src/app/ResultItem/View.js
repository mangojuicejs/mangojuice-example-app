// @flow
import type { Model } from './Logic';
import * as React from 'react';
import { Subscribe } from 'mangojuice-react';
import { APP_CONTEXT } from '../AppPage/Logic';
import * as Events from './Events';


// Views
const ResultItemView = ({ model }) => (
  <Subscribe to={[ model, APP_CONTEXT ]} events={Events}>
    {(model, appCtx, { Increment, Decrement }) => (
      <div>
        {model.text}<br />
        <button onClick={Increment}>+</button>
        {model.counter}
        <button onClick={Decrement}>-</button><br />
        {appCtx.user.name}
      </div>
    )}
  </Subscribe>
);

export default ResultItemView;
