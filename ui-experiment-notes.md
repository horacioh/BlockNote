# UI experiment notes

## Ariakit

> Main goal: remove mantine components and replace them with Ariakit components

- the Style system I'm using will be plain CSS.

- Toolbar
  - I started changing the most simple component (`ToolbarButton`) to Ariakit.
  -

## General codebase notes

- there's a pattern in the `ToolbarInputDropdownButton` component that renders inside a `Tippy` component either the first or the second child that we might need to change. this is basically nested dialogs or layers. Ariakit has good support for a usecase like this (or even we can use the submenu behavior)
