// @flow
import type { Model } from './Logic';
import * as React from 'react';
import { Subscribe } from 'mangojuice-react';
import { APP_CONTEXT } from './Logic';
import * as User from '../User';
import * as SearchForm from '../SearchForm';
import * as SearchResults from '../SearchResults';


// Views
const AppPageView = ({ model }) => (
  <Subscribe to={[ model, APP_CONTEXT ]} events={User.Events}>
    {(model, appCtx, usrEvents) => (
      <div>
        {appCtx.user.authorized && <div>Hello, {appCtx.user.name}</div>}
        {!appCtx.user.authorized && (
          <button onClick={usrEvents.Login}>Login</button>
        )}
        <SearchForm.View model={model.form} />
        <SearchResults.View model={model.results} />
      </div>
    )}
  </Subscribe>
);

export default AppPageView;
