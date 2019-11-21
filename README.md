# mithril-material-forms

Lightweight input form components using mithril. Requires material-icon font to work correctly (checkbox, select). 

```html
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Use with

```js
    m(Component, { requiredAttributes });
```

For attribute details check each component implementation in _index.js_. For a list of example build this project using
`npm run build` and checkout the examples page in `/test/index.html`


## 

`v3` Breaking Changes

- required mithril-dependency `>= v2`
- all callbacks have mithil-lowercase names `onchange` instead of _onChange_
    - this was inconsistent in `button`, `checkbox` and `input`
