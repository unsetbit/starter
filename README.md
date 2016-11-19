# Starter Repo for Building Browser Libraries

> A quick starter for building a browser library without dealing with build systems.

1. Run `git clone git@github.com:unsetbit/starter.git && cd starter && npm install`
2. Run `sudo npm install webpack webpack-dev-server -g`
3. Run `webpack-dev-server`. This command starts the build system and starts serving the contents of the `example` directory  [http://localhost:8080](localhost:8080). Whatever is exported from `src/starter.js` will be available as a global variable called `starter`;
4. Run `webpack` when you're ready to publish your work, this will build the `src`
directory into the `build` directory.

Check the webpack.config.js once you're ready to rename your project to something other
that "starter".
