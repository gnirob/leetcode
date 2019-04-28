class MinStack<T extends number> {
    push(x: T): void {
        this.store.push(x);

        if (!this.minElements.length || x <= this.minElements[0]) {
            this.minElements.unshift(x);
        }
    }

    pop(): void {
        const element = this.store.pop() as T;

        if (element === this.minElements[0]) {
            this.minElements.shift();
        }
    }

    top(): T {
        return this.store[this.store.length - 1];
    }

    getMin(): T {
        return this.minElements[0];
    }

    store: T[] = [];
    minElements: T[] = [];
}
