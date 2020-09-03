# mithril-material-forms

Lightweight input form components using mithril. Requires material-icon font to work correctly (checkbox, select). 

```html
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

```scss
  // include styles are required
  @import "mithril-material-forms/styles/layout";
  @import "mithril-material-forms/styles/typography";
  @import "mithril-material-forms/styles/theme-material";
  @import "mithril-material-forms/styles/theme-solid";
  // and choose a default theme
  @import "mithril-material-forms/styles/theme-solid-as-default";
```

Use with

```typescript
  import m from "mithril";
  import { Switch, SwitchAttrs } from "mithril-material-forms";
  m.render(document.body, 
    m(Switch, <SwitchAttrs>{ requiredAttributes })
  );
```

For attribute details check each component implementation in _index.js_. For a list of example build checkout the examples page in `/docs/index.html` or goto [mithril-material-forms docs](https://sueddeutsche.github.io/mithril-material-forms/index.html)


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
