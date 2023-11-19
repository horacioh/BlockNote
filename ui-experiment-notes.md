# UI experiment notes

## Ariakit

> Main goal: remove mantine components and replace them with Ariakit components

- the Style system I'm using will be plain CSS.

- Toolbar
  - I started changing the most simple component (`ToolbarButton`) to Ariakit.
  - for the ToolbarDropdown, I need to change it to a more semantic solution: ToolbarSelect
    - The select needs the items to change and have a unique id/key. this means that instead of passing a function to each item, the function to change the selection is at the top of the select, in this concrete case is in the BlockTypeDropdown (renamed to BlockTypeSelect)
- Theming
  - I remove all the theme, it will all be set using CSS variables.
  - for the theme detection, Ijust left `usePrefersColorScheme` as the theme detector

## General codebase notes

- there's a pattern in the `ToolbarInputDropdownButton` component that renders inside a `Tippy` component either the first or the second child that we might need to change. this is basically nested dialogs or layers. Ariakit has good support for a usecase like this (or even we can use the submenu behavior)
