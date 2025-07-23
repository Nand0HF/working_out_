
## The Goal

Destroy the mountains before your starship collides with one of them. To do this, shoot the **highest mountain** in your path.

## Rules

* At the start of each game turn, you'll receive the height of 8 mountains, ordered from left to right.
* By the end of the turn, you must fire on the highest mountain by outputting its **index** (from 0 to 7).
* Firing on a mountain only reduces its height. Your ship descends after each pass.

## Victory Conditions

* You win if you destroy every mountain.

## Lose Conditions

* Your ship crashes into a mountain.
* You provide incorrect output or your program times out.

## Note

Don't forget to run the tests from the "Test cases" window. The provided tests and validators differ slightly to prevent hard-coded solutions.

## Game Input

Within an infinite loop, read the heights of the mountains from standard input and print the index of the mountain to shoot to standard output.

### Input for one game turn

* **8 lines:** One integer `mountainH` per line. Each represents the height of one mountain, given in order of its index (from 0 to 7).

### Output for one game turn

* A **single line** with one integer: the index of which mountain to shoot.

## Constraints

* `0 ≤ mountainH ≤ 9`
* Response time per turn `≤ 100ms`