# M3-UI - Material 3 React and Tailwind

Material 3 design system  for React and Tailwind

## Setup

### Install

```bash
npm install @mavvy/m3-ui
```

### Setup Tailwind

Make sure you already setup your tailwind on your app

[Install Tailwind](https://tailwindcss.com/docs/guides/create-react-app)

### Configuration for tailwind.config

```javascript
const preset = require('@mavvy/m3-ui/preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: preset.content,
  theme: {
    extend: preset.theme.extend,
  },
  plugins: [],
  presets: [preset],
};
```


## Components

### Badge

### Button
|prop|type|description|
|----|----|-----------|
|variant|outlined\|elevated\|filled\|text\|fab|button variant. default text|
|size|small\|medium\|large| button size. default text
|color| [color](/#color)|button color|
|activeColor| [color](/#color)|button color when it's active|
|disabled|boolean|disables the button|
|vertical|boolean|arrangement of icon and button text on y axis|
|reversed|boolean|if true - reversed ararngement of icon and text|
|className|string|className of the button container|
|style|object|style of the button container|
|textClassName|string|className of the button's Text component|
|iconClassName|string|className of the button's Icon component|
|stateClassName|string|className of the button's state div|
|icon|string|icon name|
|iconVariant|[IconVariant](/#icon-variant)|variant of the icon|
|buttonAttrs|object|props to override or extend the button props|
|textAttrs|object|props to override or extend the button's Text component props|
|iconButton|boolean|render button as icon button - no text will be shown|
|selected|boolean|set button as selected|
|selectable|boolean|set button as selectable|
|RenderComponent|React Component|render a react component as children of the button|

### Checkbox
### Chip
### Circular Progress
### Dialog
### Linear Progress
### Menu
### Radio
### Select
### Side Sheet
### Snackbar
### Switch
### Textfield
### Tooltip
### Top App Bar

## Types

### Color

```bash
primary
on-primary
primary-container
secondary
on-secondary
secondary-container
tertiary
on-tertiary
tertiary-container
surface-container-lowest
surface-container-low
surface-container
surface-container-high
surface-container-highest
on-surface
on-surface-variant
surface-container
outline
outline-variant
success
info
warning
error
on-error
on-error-container
inverse-surface
on-inverse-surface;
```

### Icon Variant
```bash
outlined
rounded
sharp
```
