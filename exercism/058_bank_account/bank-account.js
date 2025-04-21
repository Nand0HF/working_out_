//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.amount = 0;
    this.isOpen = null;
  }
  
  open() {
    if (this.isOpen) {
     throw new ValueError ('Bank account already open');   
    } else {
      this.isOpen = true;
      this.amount = 0;
    }
  }

  close() {
    if (!this.isOpen) {
      throw new ValueError ('Bank account already closed');
    } else {
      this.isOpen = false;
    }
  }

  deposit(value) {
    if (!this.isOpen) {
      throw new ValueError ('Bank account closed');
    } 
    
    if (value <= 0) {
      throw new ValueError ('Amount must be higher than 0');
    } 
    
    this.amount += value;
  }

  withdraw(value) {
    if (!this.isOpen) {
      throw new ValueError ('Bank account closed');
    }
    
    if (value <= 0) {
      throw new ValueError ('Amount must be higher than 0');
    } 

    if (this.amount < value) {
      throw new ValueError ('Insuficient balance');
    } 
    
    this.amount -= value;
  }

  get balance() {
    if (this.isOpen) {
      return this.amount;
    } else {
      throw new ValueError ('Bank account closed');
    }
  }
}

export class ValueError extends Error {
  constructor(message = 'Bank account error') {
    super(message);
  }
}
