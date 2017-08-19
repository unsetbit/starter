# Starter App for Browsers

> Quickly start a new application

## How to build this app
1. Install [git](https://git-scm.com), [node](https://nodejs.org/), and
 [jekyll](https://jekyllrb.com/)
2. Run `git clone git@github.com:unsetbit/starter.git && cd starter && npm install`
3. Run `npm run dev`. This command starts the build system and starts serving
the contents of the `docs/_site` directory at [http://localhost:8080](localhost:8080).
4. Modify the contents of `src` and `docs` until the app looks just right

Whatever is exported from `src/starter.js` will be available as a global
variable called `starter`.

Run `npm run prepublish` prior to publishing your work, this will update the
`starter.js` file in `docs`. This allows you to easily host your application via
[GitHub pages](https://pages.github.com/).

Update `webpack.config.js` once you're ready to rename your project to
something other that "starter".
