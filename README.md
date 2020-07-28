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


## Usage

- per convention, an attribute `onchange(value): void` is used to register to change events


## Breaking Changes

`v4`

- mithril is now written in typescript and uses no babel transpilation. There may be a need for polyfills
- components are exported separately

`v3` 

- required mithril-dependency `>= v2`
- all callbacks have mithil-lowercase names `onchange` instead of _onChange_
    - this was inconsistent in `button`, `checkbox` and `input`
