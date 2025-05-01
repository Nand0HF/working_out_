//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(elementsArray = []) {
    this.values = [...elementsArray];
    this.size = elementsArray.length;
  }

  append(element) {
    if(element instanceof List) {
      for (let item of element.values) {
        this.values[this.size++] = item;
      }
    } else {
      this.values[this.size++] = element;
    }
    return this;
  }

  concat(otherList) {
    for (const element of otherList.values) {
      if (element instanceof List) {
        for (let item of element.values) {
          this.values[this.size++] = item;
        }
      } else {
        this.values[this.size++] = element;
      }
    }
    return this;
  }

  filter(predicate) {
    const filteredValues = new List();
    for (const element of this.values) {
      if (predicate(element)) {
        filteredValues.append(element);
      }
    }
    return filteredValues;
  }

  map(predicate) {
    const mappedValues = new List();
    for (const element of this.values) { 
      mappedValues.append(predicate(element));
    }
    return mappedValues;
  }

  length() {
    return this.size;
  }

  foldl(predicate, acc) {
    for (let item of this.values) {
      acc = predicate(acc, item);
    }
    return acc;
  }

  foldr(predicate, acc) {
    for (let index = this.size - 1; index >= 0; index--) {
      acc = predicate(acc, this.values[index]);
    }
    return acc;
  }

  reverse() {
    const reversedList = new List();
    for (let index = this.size - 1; index >= 0; index--) {
      reversedList.append(this.values[index]);
    }
    return reversedList;
  }
}
