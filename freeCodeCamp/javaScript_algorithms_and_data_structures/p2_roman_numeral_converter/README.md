# Build a Roman Numeral Converter

## Roman Numerals Guide
Roman numerals are based on seven symbols and can be written using various combinations to represent Arabic numerals. For example:

| Roman Numeral | Arabic Numeral |
|:---------------|:----------------|
| M               | 1000             |
| CM              | 900              |
| D               | 500              |
| CD              | 400              |
| C               | 100              |
| XC              | 90               |
| L               | 50               |
| XL              | 40               |
| X               | 10               |
| IX              | 9                |
| V               | 5                |
| IV              | 4                |
| I               | 1                |

---

## Objective
Build an app that is functionally similar to [this Roman numeral converter](https://roman-numeral-converter.freecodecamp.rocks).

---

## **User Stories**
1. **You should have an input element with an id of `number`.**
2. **You should have a button element with an id of `convert-btn`.**
3. **You should have a `div`, `span`, or `p` element with an id of `output`.**

---

## **Functional Requirements**
- When you click on the `#convert-btn` element **without entering a value** into the `#number` element, the `#output` element should contain the text:
  ➡️ **"Please enter a valid number"**
- When the `#number` element contains the number **-1** and the `#convert-btn` element is clicked, the `#output` element should contain:
  ➡️ **"Please enter a number greater than or equal to 1"**
- When the `#number` element contains the number **4000** or greater and the `#convert-btn` element is clicked, the `#output` element should contain:
  ➡️ **"Please enter a number less than or equal to 3999"**

---

## **Conversion Requirements**
| Input Number | Output Roman Numeral |
|:---------------|:-------------------------|
| **9**               | **IX**                     |
| **16**              | **XVI**                    |
| **649**             | **DCXLIX**                 |
| **1023**            | **MXXIII**                 |
| **3999**            | **MMMCMXCIX**              |

---

## **Additional Requirements**
- For a **random negative number**, the output should be:
  ➡️ **"Please enter a number greater than or equal to 1"**
- For a **number greater than 4000**, the output should be:
  ➡️ **"Please enter a number less than or equal to 3999"**

---

## **Testing Instructions**
✅ Run the Tests with `Ctrl + Enter`
✅ Save your Code
✅ Revert to Saved Code if needed
✅ Get Help if you encounter issues

---

## **Test Checklist**
✔️ 1. An input element with an id of `"number"`
✔️ 2. A button element with an id of `"convert-btn"`
✔️ 3. A div, span, or p element with an id of `"output"`
✔️ 4. Correct error message for **empty input**
✔️ 5. Correct error message for **negative values**
✔️ 6. Correct error message for values **≥ 4000**
✔️ 7. Correct Roman numeral conversion for values like **9**, **16**, **649**, **1023**, and **3999**

---

🎯 **Happy Coding!**
