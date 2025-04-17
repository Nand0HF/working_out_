//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  #students = {};

  roster() {
    const rosterCopy = {};
    for (const grade in this.#students) {
      rosterCopy[grade] = [...this.#students[grade]].sort();
    }
    return rosterCopy;
  }

  add(name, grade) {
    if (!this.#students[grade]) {
      this.#students[grade] = [];
    }
    
    for (const existingGrade in this.#students) {
      this.#students[existingGrade] = this.#students[existingGrade].filter(student => student !== name);
    }
  
    if (!this.#students[grade].includes(name)) {
      this.#students[grade].push(name);
    }
  }

  grade(grade) {
    return [...(this.#students[grade] || [])].sort();
  }
}
