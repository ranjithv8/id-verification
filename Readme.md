The repo aims at a minimal reproduction of the issue  when onfido-sdk-ui is used as a component 
, bundled with vite to a package and the resulting package is consumed in a project using webpack.

Here there are two projects. `component-library` is build with vite to an npm package exposing an esm bundle.
The `host-app` (uses webpack) consumes this package.

Do the below for initial setup and make the app running
1) Run `npm i` on both projects
2) In `host-app` do `npm run dev`