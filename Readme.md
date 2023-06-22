The repo aims at a minimal reproduction of the issue  when onfido-sdk-ui is used as a component 
, bundled with vite to a package and the resulting package is consumed in a project using webpack.

Here there are two projects. `component-library` is build with vite to an npm package exposing an esm bundle.
The `host-app` (uses webpack) consumes this package.

Do the below for initial setup and make the app running
1) Run `npm i` on both projects
2) Run `npm run build` in `component-library`
3) In `host-app` do `npm run dev`

You should see a `Initiate ID verification` button. The button triggers fetching the onfido sdk 
and initializing it. But this essentially silently breaks the UI and the sdk does not get rendered.
Any subsequent actions (Eg:adding value and blurring out of the input) result in the below error in logs

```
Uncaught TypeError: n.__ is not a function         preact.module.js:1
    at w (component-library.mjs:110:1)
    at Array.forEach (<anonymous>)
    at b (component-library.mjs:55:1)
w                                                  @ component-library.mjs:110
b                                                  @ component-library.mjs:55
setTimeout (async)
r2                                                 @ component-library.mjs:100
requestAnimationFrame (async)
j                                                  @ component-library.mjs:102
preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed @ component-library.mjs:71
preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed @ hooks.module.js:1
preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed @ compat.module.js:1
L                                                  @ preact.module.js:1
w                                                  @ preact.module.js:1
Promise.then (async)
m                                                  @ preact.module.js:1
k.setState                                         @ preact.module.js:1
o2.__c.o2.__                                       @ component-library.mjs:15
handleDummyChange                                  @ component-library.mjs:237
j                                                  @ preact.module.js:1
```
