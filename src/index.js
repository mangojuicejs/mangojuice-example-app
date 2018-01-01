import { run, mount, hydrate } from "mangojuice-core";
import { Mounter } from "mangojuice-react";


// Run the app using provided app and shared blocks
const start = (AppBlock, SharedBlock) => {
  const shared = run(SharedBlock);
  const app = run(AppBlock, { shared: shared.model });
  const mountRes = mount(new Mounter('#content'), app, shared);

  return {
    stop: mountRes.stop,
    app: app.model,
    shared: shared.model
  };
}

// Run the app for the first time
let currRun = start(
  require('./app/AppPage'),
  require('./shared/Main')
);

// Watch for module changes and re-run the app with
// new versions of app and shared blocks
if(module.hot) {
  module.hot.accept(['./app/AppPage', './shared/Main'], function() {
    const appBlock = require('./app/AppPage');
    const sharedBlock = require('./shared/Main');

    currRun.stop();

    currRun = start(
      hydrate(require('./app/AppPage'), currRun.app),
      hydrate(require('./shared/Main'), currRun.shared)
    );
  });
}
