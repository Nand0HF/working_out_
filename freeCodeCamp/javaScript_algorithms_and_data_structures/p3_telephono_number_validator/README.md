# US Phone Number Validator

In the US, phone numbers can be formatted in many ways. Here are some examples of valid formats for US phone numbers:

- 1 555-555-5555
- 1 (555) 555-5555
- 1(555)555-5555
- 1 555 555 5555
- 5555555555
- 555-555-5555
- (555)555-5555

**Note:** The area code is required. Also, if the country code is provided, you must confirm that the country code is **1**.

## Objective
Build an app that is functionally similar to [this example](https://telephone-number-validator.freecodecamp.rocks).

## User Stories

1. You should have an input element with an `id` of `"user-input"`.
2. You should have a button element with an `id` of `"check-btn"`.
3. You should have a button element with an `id` of `"clear-btn"`.
4. You should have a `div`, `span`, or `p` element with an `id` of `"results-div"`.
5. When you click on the `#check-btn` element without entering a value into the `#user-input` element, an alert should appear with the text **"Please provide a phone number"**.
6. When you click on the `#clear-btn` element, the content within the `#results-div` element should be removed.

### Valid Input Cases
When the `#user-input` element contains the following values and the `#check-btn` is clicked, the `#results-div` element should display:

- **"Valid US number: 1 555-555-5555"**
- **"Valid US number: 1 (555) 555-5555"**
- **"Valid US number: 5555555555"**
- **"Valid US number: 555-555-5555"**
- **"Valid US number: (555)555-5555"**
- **"Valid US number: 1(555)555-5555"**
- **"Valid US number: 1 555 555 5555"**
- **"Valid US number: 1 456 789 4444"**

### Invalid Input Cases
When the `#user-input` element contains the following values and the `#check-btn` is clicked, the `#results-div` element should display:

- **"Invalid US number: 555-5555"**
- **"Invalid US number: 5555555"**
- **"Invalid US number: 1 555)555-5555"**
- **"Invalid US number: 123**&!!asdf#"**
- **"Invalid US number: 55555555"**
- **"Invalid US number: (6054756961)"**
- **"Invalid US number: 2 (757) 622-7382"**
- **"Invalid US number: 0 (757) 622-7382"**
- **"Invalid US number: -1 (757) 622-7382"**
- **"Invalid US number: 10 (757) 622-7382"**
- **"Invalid US number: 27576227382"**
- **"Invalid US number: (275)76227382"**
- **"Invalid US number: 2(757)6227382"**
- **"Invalid US number: 555)-555-5555"**
- **"Invalid US number: (555-555-5555"**
- **"Invalid US number: (555)5(55?)-5555"**
- **"Invalid US number: 55 55-55-555-5"**
- **"Invalid US number: 11 555-555-5555"**

### Summary
- If the `#user-input` contains a valid US phone number and the `#check-btn` is clicked, `#results-div` should display **"Valid US number: [phone number]"**.
- If the `#user-input` contains an invalid US phone number and the `#check-btn` is clicked, `#results-div` should display **"Invalid US number: [phone number]"**.

Complete the user stories and pass all the tests to finish this project. Customize it with your own style. **Happy Coding! 🚀**
