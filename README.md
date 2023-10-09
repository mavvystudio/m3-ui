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
* [Divider](#divider)
* [Icon](#icon)
* [LinearProgress](#linear-progress)
* [Menu](#menu)
* [Radio](#radio-button)
* [Select](#select)
* [SideSheet](#side-sheet)
* [Snackbar](#snackbar)
* [Select](#select)
* [Switch](#switch)
* [Text](#text)
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

### Divider

|prop|type|description|
|----|----|-----------|
|none|||


### Icon

|prop|type|description|
|----|----|-----------|
|children|string|icon name of the google material icon|
|variant|outlined\|rounded\|sharp|variant of the icon|
|color|[Color](#color)|icon color|
|size|[Size](#size)|size of the chip component|
|filled|boolean|if true, will be displayed as a fileld icon|
|fontVariant|[TextVariant](#text-variant)|variant to apply|

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

Extends [TextField Props](#Textfield)

|prop|type|description|
|----|----|-----------|
|options|{text: string, value: any}[]|array of option item to display on the dropdown list|
|autoComplete|boolean|if true, will apply auto complete feature|
|top|boolean|if true, show the dropdown list at the top of the component|
|ItemComponent|React Component|Renders a custom component for each item on the list|
|disableRemoveOverflow|boolean|default behaviour is to add an overflow class to the body, set if to true to disable it|
|noOptionText|string|if list is empty, show this text|

### Side Sheet

|prop|type|description|
|----|----|-----------|
|open|boolean|required. if true, show the side sheet|
|onClose|() => void|required. on close handler|
|closeDelay|number|in ms. the delay before closeing the sidesheet|

[Material 3 SideSheet Reference](https://m3.material.io/components/side-sheets/overview)


### Snackbar

|prop|type|description|
|----|----|-----------|
|open|boolean|required. if true, show the snackbar|
|onClose|() => void|required. on close handler|
|color|[Color](#color)|component color|
|accentColor|[Color](#color)|component accent color|
|duration|number|in ms. duration to show the snackbar|
|centered|boolean|if true, will center the snackbar horizontally|
|showCloseIcon|boolean|if true, shows a close icon button|
|action|{text:string, fn: () => void}}|render an action text button|

[Material 3 Snackbar Reference](https://m3.material.io/components/snackbar/overview)


### Switch

|prop|type|description|
|----|----|-----------|
|selected|boolean|required. if true will show a selected state|
|onClick|(event)=>void|on click handler|
|label|string|switch component label|
|color| [color](#color)|switch component color|
|disabled|boolean|if true, disables the switch component|
|activeIcon|string|icon name to display if the state is selected|
|inactiveIcon|string|icon name to display if the state is not selected|
|activeIconProps|IconProps|props of the Icon Component of the active icon|
|inactiveIconProps|IconProps|props of the Icon Component of the inactive icon|

[Material 3 Switch Reference](https://m3.material.io/components/switch/overview)

### Text

|prop|type|description|
|----|----|-----------|
|children|string|text|
|color| [color](#color)|text component color|
|attrs|Object|any html attributes to apply|
|component|string|html tag to render|
|size|[Size](#size)|size of the text component|
|variant|[TextVariant](#text-variant)|variant to apply|
|style|Object|style props|
|className|string|className of the component|

### Textfield
|prop|type|description|
|----|----|-----------|
|onChange|(value: string\|number\|boolean) => void|required. onChange handler|
|label|string|textfield label|
|value|string\|number\|boolean|value of the textfield|
|type|string|HTMLInputTypeAttribute|
|attrs|Object|html attributes for the input element|
|onKeyDown|(event) => void| onKeyDown event handler|
|onKeyUp|(event) => void| onKeyUp event handler|
|onFocus|(event) => void| onFocus event handler|
|onBlur|(event) => void| onBlur event handler|
|className|string|className of the Textfield component|
|contentClassName|string|className of the container component of the input element|
|inputClassName|string|className of the input element|
|labelClassName|string|className of the label|
|variant|outlined\|fileld|Textfield variant|
|color| [color](#color)|component color|
|disabled|boolean|if true, component will be disabled|
|multiple|boolean|for input type file to handle multiple selection|
|placeholder|string|placeholder of the input element|
|icon|string|icon to display|
|iconVariant|[Icon Variant](#icon-variant)| variant of the icon|
|iconClassName|string|className of the Icon component|
|size|[Size](#size)|size of the Textfield component|
|error|boolean|if true, shows an error state|
|supportingText|string| supporting text below the input element|
|supportingTextClassName|string|className of the supportingText Text Component|
|showClearButton|boolean|if true, shows a clear button|
|clearIconClassName|string|className of the Clear IconButton|
|trailingIcon|string|icon name of the trailing icon|
|onClear|(value: string\|number\|boolean) => void| on clear handler|
|outlineClassName|string|className of the outline component|
|prefix|string|render a prefix text|
|suffix|string|render a suffix text|
|FieldComponent|Function|Render a Field component aside from the input element|
|options|any|pass the options to the FieldComponent|
|endAdornment|(props: {focused:boolean}) => JSX Component| end Adornment to render|
|startAdornment|Raect.ReactNode|start Adornment to render|

[Material 3 Textfield Reference](https://m3.material.io/components/text-fields/overview)


### Tooltip

|prop|type|description|
|----|----|-----------|
|text|string|required. tooltip text|
|children|React.ReactNode|required. tootlip to attach on|
|yPosition|top\|bottom\|center|tooltip position on y axis|
|xPosition|left\|right\|center|tooltip position on x axis|
|className|string|className of the Tooltip component|
|contentClassName|string|className of the Text component container|
|textClassName|string|className of the Text Component|

[Material 3 Tooltip Reference](https://m3.material.io/components/tooltips/overview)

### Top App Bar

|prop|type|description|
|----|----|-----------|
|color| [color](#color)|text component color|
|variant|small\|medium\|large\|ceter|app bar variant|
|className|string|className of the Top App Bar component|
|children|React.ReactNode|children component|

[Material 3 Top App Bar Reference](https://m3.material.io/components/top-app-bar/overview)

## CSS Variables
--color-primary
--color-primary-light
--color-primary-dark
--color-on-primary
--color-primary-container
--color-on-primary-container
--color-secondary
--color-secondary-light
--color-on-secondary
--color-secondary-container
--color-on-secondary-container
--color-tertiary
--color-on-tertiary
--color-tertiary-container
--color-on-tertiary-container
--color-surface-container-low
--color-surface-container-lowest
--color-surface-container
--color-surface-container-high
--color-surface-container-highest
--color-on-surface-container-highest
--color-on-surface
--color-on-surface-variant
--color-outline
--color-outline-variant
--color-error
--color-on-error
--color-error-container
--color-on-error-container
--color-scrim
--color-inverse-surface
--color-on-inverse-surface
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

### Text Variant
```bash
display
headline
title
label
body
```
