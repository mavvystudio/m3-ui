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

* [Badge](#badge)
* [Button](#button)
* [Card](#card)
* [Checkbox](#checkbox)
* [Chip](#chip)
* [CircularProgress](#circular-progress)
* [Dialog](#dialog)
* [LinearProgress](#linear-progress)
* [Menu](#menu)
* [Radio](#radio-button)
* [Select](#select)
* [SideSheet](#side-sheet)
* [Snackbar](#snackbar)
* [Select](#select)
* [Switch](#switch)
* [Textfield](#textfield)
* [Tooltip](#tooltip)
* [TopAppBar](#top-app-bar)

### Badge
|prop|type|description|
|----|----|-----------|
|value|number|value shown on the badge|
|size|small\|large|badge size|
|max|number|if set, will put a + sign if the value is greater than max|
|show|boolean|displays the badge value. default is false|
|containerClasName|string|className of the badge container component|
|className|string|className of the badge component|
|children|React.ReactNode|optional children component|

[Material 3 Badge Reference](https://m3.material.io/components/badges/overview)

### Button

|prop|type|description|
|----|----|-----------|
|variant|outlined\|elevated\|filled\|text\|fab|button variant. default text|
|size|small\|medium\|large| button size. default text
|color| [color](#color)|button color|
|activeColor| [color](#color)|button color when it's active|
|disabled|boolean|disables the button|
|vertical|boolean|arrangement of icon and button text on y axis|
|reversed|boolean|if true - reversed ararngement of icon and text|
|className|string|className of the button container|
|style|object|style of the button container|
|textClassName|string|className of the button's Text component|
|iconClassName|string|className of the button's Icon component|
|stateClassName|string|className of the button's state div|
|icon|string|icon name|
|iconVariant|[IconVariant](#icon-variant)|variant of the icon|
|buttonAttrs|object|props to override or extend the button props|
|textAttrs|object|props to override or extend the button's Text component props|
|iconButton|boolean|render button as icon button - no text will be shown|
|selected|boolean|set button as selected|
|selectable|boolean|set button as selectable|
|RenderComponent|React Component|render a react component as children of the button|

[Material 3 Button Reference](https://m3.material.io/components/all-buttons)

### Card

|prop|type|description|
|----|----|-----------|
|className|string|className of the component|
|children|React.ReactNode|react children|
|style|Object|style of the component|

[Material 3 Card Reference](https://m3.material.io/components/cards/overview)

### Checkbox

|prop|type|description|
|----|----|-----------|
|color|[Color](#color)|component color|
|checked|boolean|required. if true, shows a checked state|
|onChange|(checked: boolean) => void|required. handler for change event|
|className|string| className of the component|
|iconClassName|string|className for the icon|
|name|string|name attribute for the input element|
|disabled|boolean|disables the checkbox|
|error|boolean|if true, shows an error state|
|indeterminate|boolean|if true, shows an indeterminate state|

[Material 3 Checkbox Reference](https://m3.material.io/components/checkbox/overview)

### Chip
|prop|type|description|
|----|----|-----------|
|color|[Color](#color)|component color|
|leadingIcon|string|leading icon to render on the chip|
|leadingIconClassName|string|className to apply on the leadingIcon Icon component|
|trailingIcon|string|trailing icon to render on the chip|
|trailingIconClassName|string|className to apply on the trailingIcon Icon component|
|className|string|className of the chip component|
|textClassName|string|className of the Text component|
|selected|boolean|if tru, shows a selected state|
|onClick|(event: React.MouseEvent) => void| handler for the click event|
|variant|filled\|outlined| variant of the Chip component|
|size|[Size](#size)|size of the chip component|

[Material 3 Chip Reference](https://m3.material.io/components/chips/overview)

### Circular Progress

|prop|type|description|
|----|----|-----------|
|value|number|value of the current progress|
|color|[Color](#color)|component color|
|size|[Size](#size)|size of the chip component|
|indeterminate|boolean|if true, shows an indeterminate state|
|className|string|className of the component|

[Material 3 Progress Reference](https://m3.material.io/components/progress-indicators/overview)

### Dialog

|prop|type|description|
|----|----|-----------|
|open|boolean|required. if true, will show the dialog|
|onClose|() => void| required. handler for close dialog event|
|fullScreen|boolean| if true, will render a full screen dialog|
|title|string|dialog title|
|disableBackdropClose|boolean|if true, disabled the click event on the backdrop that triggers the close event|
|closeButtonClassName|string|applies the className to the Button component of the close button|
|titleClassName|string|applies the className to the Text component of the title|
|position|top\|bottom\|center|y position of the dialog|
|cardClassName|applies the className to the Card component of the dialog|

[Material 3 Dialog Reference](https://m3.material.io/components/dialogs/overview)

### Linear Progress

|prop|type|description|
|----|----|-----------|
|value|number|value of the current progress|
|color|[Color](#color)|component color|
|indeterminate|boolean|if true, shows an indeterminate state|

[Material 3 Progress Reference](https://m3.material.io/components/progress-indicators/overview)

### Menu

|prop|type|description|
|----|----|-----------|
|items|[MenuItemProps[]](#menu-item-props)|required. menu items array|
|onChange|(value:string, index: number) => void|required. on change handler|
|menuListClassName|string|className to be applied on the menu list container|
|itemClassName|string|className to be applied on each menu item|
|position|top-left\|top-right\|bottom-left\|bottom-right|position of the menu list|
|children|React.ReactNode|react children|
|disableRemoveOverflow|boolean|default behaviour is to add an overflow class to the body, set if to true to disable it|


#### Menu Item Props

|prop|type|description|
|----|----|-----------|
|text|string|menu text to display on the list|
|value|string|menu item value to pass on the change handler|
|trailingIcon|string|icon name to display as a trailing icon|
|trailingText|string|trailing text|
|isDivider|boolean|render as a divider|
|disabled|boolean|if true, will set the item as disabled|
|action|boolean|if true, will set the state as active|

[Material 3 Menu Reference](https://m3.material.io/components/menus/overview)

### Radio Button

|prop|type|description|
|----|----|-----------|
|label|string|label text of the radio button|
|onClick|(event) => void|on click handler|
|color|[Color](#color)|component color|
|selected|boolean|if true, will set the state as selected|
|disabled|boolean|if true, will set the state as disabled|
|className|string|applies the className to the container of the radio ui|
|radioClassName|string|applies the className to the radio component|
|textClassName|string|applies the className to the Text Component|

[Material 3 Menu Reference](https://m3.material.io/components/radio-button/overview)


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
on-inverse-surface
```

### Icon Variant
```bash
outlined
rounded
sharp
```
### Size
```bash
small
medium
large

```