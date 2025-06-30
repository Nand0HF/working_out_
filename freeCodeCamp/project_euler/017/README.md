# Problem 17: Number Letter Counts

If the numbers 1 to 5 are written out in words (one, two, three, four, five), then there are 3 + 3 + 5 + 4 + 4 = **19 letters** used in total.

The challenge is to figure out how many letters would be used if all the numbers from 1 up to a given `limit` (inclusive) were written out in words.

**Important Notes:**

* **No spaces or hyphens:** Don't count spaces or hyphens in your total.
    * For example, 342 (three hundred and forty-two) contains 23 letters.
    * 115 (one hundred and fifteen) contains 20 letters.
* **"And" usage:** The use of "and" when writing out numbers should comply with British English usage.


## Tests

To ensure your solution is correct, it will be checked against the following test cases:

1.  `numberLetterCounts(5)` should return a number.
2.  `numberLetterCounts(5)` should return `19`.
3.  `numberLetterCounts(150)` should return `1903`.
4.  `numberLetterCounts(1000)` should return `21124`.