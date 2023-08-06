class Stack {
    constructor() {
      this.Q1 = new Queue();
      this.Q2 = new Queue();
    }
  
    push(value) {
      // Push the new value into Q1
      this.Q1.push(value);
    }
  
    pop() {
      // Move all elements except the last one from Q1 to Q2
      while (this.Q1.size() > 1) {
        const element = this.Q1.front();
        this.Q1.pop();
        this.Q2.push(element);
      }
  
      // Pop and return the last element from Q1
      const poppedElement = this.Q1.front();
      this.Q1.pop();
  
      // Swap Q1 and Q2
      const temp = this.Q1;
      this.Q1 = this.Q2;
      this.Q2 = temp;
  
      return poppedElement;
    }
  
    top() {
      // Move all elements except the last one from Q1 to Q2
      while (this.Q1.size() > 1) {
        const element = this.Q1.front();
        this.Q1.pop();
        this.Q2.push(element);
      }
  
      // Get and return the last element from Q1
      const topElement = this.Q1.front();
  
      // Move the last element from Q1 to Q2
      this.Q2.push(topElement);
  
      // Swap Q1 and Q2
      const temp = this.Q1;
      this.Q1 = this.Q2;
      this.Q2 = temp;
  
      return topElement;
    }
  
    isEmpty() {
      return this.Q1.isEmpty();
    }
  }
  