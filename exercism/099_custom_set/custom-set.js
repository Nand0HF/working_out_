//
// This is only a SKELETON file for the 'Custom Set' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class CustomSet {
  constructor(numbersArray = []) {
    this.elements = [];
    
    if (numbersArray) { 
      for (const num of numbersArray) {
        if (!this.elements.includes(num)) this.elements.push(num);
      }
    }
    this.elements.sort((a, b) => a - b);
  }

  empty() {
    return this.elements.length === 0;
  }

  contains(num) {
    return this.elements.includes(num); 
  }

  add(num) {
    if (!this.contains(num)) this.elements.push(num);
    return this; 
  }

  _filterElements(predicate) {
    const newElements = [];
    
    for (const element of this.elements) {
      if (predicate(element)) newElements.push(element);
    }
    return new CustomSet(newElements);
  }
  
  subset(otherSet) {
    if (this.empty()) return true; 
    return this.elements.every(element => otherSet.contains(element));
  }

  disjoint(otherSet) {
    if (this.empty() || otherSet.empty()) return true;
    return this.elements.every(element => !otherSet.contains(element));
  }

  eql(otherSet) {
    if (this.elements.length !== otherSet.elements.length) return false;
    return this.subset(otherSet);
  }

  union(otherSet) {
    const newElements = [...this.elements];

    for (const element of otherSet.elements) {
      if (!this.contains(element)) newElements.push(element);
    }
    return new CustomSet(newElements);
  }

  intersection(otherSet) {
    return this._filterElements(element => otherSet.contains(element));
  }

  difference(otherSet) {
    return this._filterElements(element => !otherSet.contains(element));
  }
}
