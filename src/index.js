import * as ReactDOM from 'react-dom';
import { run, mount } from "mangojuice-core";


// Constants
const container = document.querySelector('#content');

// Run the app using provided app and shared blocks
const start = (AppBlock, model = {}) => {
  const app = run(AppBlock, { model });
  React.render(container, <AppBlock.View model={app.model} />);
  return app;
}

// Run the app for the first time
let currRun = start(require('./app/AppPage'));

// Watch for module changes and re-run the app with
// new versions of app and shared blocks
if(module.hot) {
  module.hot.accept(['./app/AppPage'], function() {
    ReactDOM.unmountComponentAtNode(container);
    currRun.proc.destroy();
    currRun = start(require('./app/AppPage'), currRun.app.model);
  });
}
