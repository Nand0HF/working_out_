//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  #time = 0;

  constructor(hour = 0, minute = 0) {
    this.#time = ((hour * 60 + minute) % 1440 + 1440) % 1440;
  }

  getTime() {
    return this.#time;
  }

  toString() {
    const hour = Math.floor(this.#time / 60); 
    const minute = this.#time % 60; 
    return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  }

  plus(time) {
    this.#time = ((this.#time + time) % 1440 + 1440) % 1440;
    return this; 
  }

  minus(time) {
    this.plus(-time);
    return this; 
  }

  equals(time) {
    return this.#time === time.getTime();
  }
}