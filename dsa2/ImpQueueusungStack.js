class Queue {
    constructor() {
      this.S1 = new Stack();
      this.S2 = new Stack();
    }
  
    push(value) {
      // Push the new value into S1
      this.S1.push(value);
    }
  
    pop() {
      // If S2 is empty, move all elements from S1 to S2
      if (this.S2.isEmpty()) {
        while (!this.S1.isEmpty()) {
          const element = this.S1.top();
          this.S1.pop();
          this.S2.push(element);
        }
      }
  
      // Pop and return the top element from S2
      return this.S2.pop();
    }
  
    front() {
      // If S2 is empty, move all elements from S1 to S2
      if (this.S2.isEmpty()) {
        while (!this.S1.isEmpty()) {
          const element = this.S1.top();
          this.S1.pop();
          this.S2.push(element);
        }
      }
  
      // Return the top element from S2 without removing it
      return this.S2.top();
    }
  
    isEmpty() {
      // Check if both S1 and S2 are empty
      return this.S1.isEmpty() && this.S2.isEmpty();
    }
  }
  