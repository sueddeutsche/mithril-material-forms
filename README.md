# mithril-material-forms

Lightweight input form components using mithril. Requires material-icon font to work correctly (checkbox, select). 

```html
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

```scss
  // pick requried styles
  @import "mithril-material-forms/styles/layout";
  @import "mithril-material-forms/styles/typography";
  // maybe add additional themes
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

Change default theme, by including styles and setting the theme through attributes

```typescript
  import m from "mithril";
  import "mithril-material-forms/styles/theme-solid";
  import { Switch, SwitchAttrs } from "mithril-material-forms";
  m.render(document.body, 
    m(Switch, <SwitchAttrs>{ theme: "the-solid" })
  );
```


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
 
## Adding a new component
A set of instructions for creating and adding a new mithril material component. 

1. Add a new folder to `./components/<component-name>`
2. In this folder, create following files:
    - Component code:  `./components/<component-name>/index.ts`
    - General style: `./components/<component-name>/layout.scss`
    - [Optional] Style for material theme: `./components/<component-name>/<component-name>-material.scss`
    - [Optional] Style for solid theme: `./components/<component-name>/<component-name>-solid.scss`
3. Register your component in `./index.ts`
4. Add your layout file (`./components/<component-name>/layout.scss`) to `./styles/layout.scss`
5. To add your new to component to the demo page, in `./app/index.ts`...
    - Add it to the `template` object, in all possible variations (e.g. disabled, with(out) icon, etc.)
    - Add it to the last render function