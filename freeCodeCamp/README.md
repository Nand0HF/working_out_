# 📝 Build a Survey Form

### **Objective:**
Build an app that is functionally similar to [this survey form](https://survey-form.freecodecamp.rocks). **Do not copy** this demo project.

## **User Stories:**

- You should have a page title in an `<h1>` element with an `id` of `title`.
- You should have a short explanation in a `<p>` element with an `id` of `description`.
- You should have a `<form>` element with an `id` of `survey-form`.
- Inside the form element, you are required to enter your name in an `<input>` field that has:
  - `id="name"`
  - `type="text"`
- Inside the form element, you are required to enter your email in an `<input>` field that has:
  - `id="email"`
  - `type="email"`
- If you enter an email that is not formatted correctly, you will see an HTML5 validation error.
- Inside the form, you can enter a number in an `<input>` field that has:
  - `id="number"`
  - `type="number"`
- The number input should not accept non-numbers, either by preventing typing or showing an HTML5 validation error (depending on your browser).
- If you enter numbers outside the allowed range (set by `min` and `max` attributes), you will see an HTML5 validation error.
- For the **name, email, and number** input fields, you must have corresponding `<label>` elements with the following `id`s:
  - `id="name-label"`
  - `id="email-label"`
  - `id="number-label"`
- The name, email, and number input fields must have **placeholder text** for user instructions.
- Inside the form element, you should have a `<select>` dropdown element with:
  - `id="dropdown"`
  - At least **two options** to choose from.
- Inside the form element, you must have **radio buttons** grouped using the `name` attribute, allowing users to select one option.
- Inside the form element, you must have **checkboxes**, each with a `value` attribute, allowing users to select multiple options.
- Inside the form element, you must have a `<textarea>` for additional comments.
- Inside the form element, you must have a `<button>` with:
  - `id="submit"`
  - This button should submit all the inputs.

### **Final Steps:**
Fulfill the user stories and pass all tests to complete this project. **Give it your own personal style.** Happy Coding! 🎨🚀

**Note:** Be sure to add the following line in your HTML to link your stylesheet and apply your CSS:
```html
<link rel="stylesheet" href="styles.css">
