import { run, mount, hydrate } from "mangojuice-core";
import { Mounter } from "mangojuice-react";


// Run the app using provided app and shared blocks
const start = (AppBlock) => {
  const app = run(AppBlock);
  const mountRes = mount(new Mounter('#content'), app, shared);

  return {
    stop: mountRes.stop,
    app: app.model
  };
}

// Run the app for the first time
let currRun = start(require('./app/AppPage'));

// Watch for module changes and re-run the app with
// new versions of app and shared blocks
if(module.hot) {
  module.hot.accept(['./app/AppPage', './shared/Main'], function() {
    const appBlock = require('./app/AppPage');
    currRun.stop();
    currRun = start(hydrate(require('./app/AppPage'), currRun.app));
  });
}
