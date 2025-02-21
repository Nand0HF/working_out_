# Build a Technical Documentation Page

## Objective
Build an app that is functionally similar to [this Technical Documentation Page](https://technical-documentation-page.freecodecamp.rocks). **Do not copy** this demo project.

## User Stories

- You can see a `main` element with a corresponding `id="main-doc"`, which contains the page's main content (technical documentation).
- Within the `#main-doc` element, you can see several `section` elements, each with a class of `main-section`. There should be a minimum of **five**.
- The first element within each `.main-section` should be a `header` element, which contains text that describes the topic of that section.
- Each `section` element with the class of `main-section` should also have an `id` that corresponds with the text of each header contained within it.
  - Any spaces should be replaced with underscores (e.g., a section with the header `"JavaScript and Java"` should have `id="JavaScript_and_Java"`).
- The `.main-section` elements should contain at least **ten** `p` elements in total (not each).
- The `.main-section` elements should contain at least **five** `code` elements in total (not each).
- The `.main-section` elements should contain at least **five** `li` items in total (not each).
- You can see a `nav` element with a corresponding `id="navbar"`.
- The `#navbar` element should contain **one `header` element** that describes the topic of the technical documentation.
- The `#navbar` should also contain `a` elements with the class `nav-link`. There should be one for every `main-section` element.
- The `header` element in the `#navbar` must come **before** any `a` elements in the navbar.
- Each `.nav-link` element should contain text that corresponds to the header text within each section.
  - (e.g., If you have a `"Hello world"` section/header, your navbar should have an element that contains the text `"Hello world"`).
- When you **click on a navbar element**, the page should navigate to the corresponding section of the `#main-doc` element.
  - (e.g., Clicking on a `.nav-link` element that contains `"Hello world"` should navigate to a section with that `id` and corresponding `header`).
- On **regular-sized devices** (laptops, desktops), the element with `id="navbar"` should be shown on the **left side of the screen** and should **always be visible** to the user.
- Your technical documentation should use at least **one media query**.

### Notes
- Fulfill the user stories and pass all the tests to complete this project.
- **Give it your own personal style. Happy Coding!** 🚀
- Be sure to add the following in your HTML to link your CSS:

  ```html
  <link rel="stylesheet" href="styles.css">
