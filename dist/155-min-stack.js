class MinStack {
    constructor() {
        this.store = [];
        this.minElements = [];
    }
    push(x) {
        this.store.push(x);
        if (!this.minElements.length || x <= this.minElements[0]) {
            this.minElements.unshift(x);
        }
    }
    pop() {
        const element = this.store.pop();
        if (element === this.minElements[0]) {
            this.minElements.shift();
        }
    }
    top() {
        return this.store[this.store.length - 1];
    }
    getMin() {
        return this.minElements[0];
    }
}
