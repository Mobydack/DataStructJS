import { IIteratorResult, IStack } from './IStack';

export class Stack<T> implements IStack<T> {
	public readonly stackData: T[] = [];
	constructor(...args: T[]) {
		this.stackData = [...args];
	}
	public isEmpty() {
		return Boolean(this.stackData.length);
	}
	public push(value: T) {
		this.stackData.push(value);
	}
	public pop() {
		return this.stackData.pop();
	}
	public values() {
		return this[Symbol.iterator]();
	}
	public [Symbol.iterator]() {
		let current = 0;
		const last = this.stackData.length - 1;
		return {
			next() {
				const data: IIteratorResult<T> = {done: true};
				if (current <= last) {
					data.value = this.stack[current];
					current++;
					return data;
				} else {
					data.done = true;
					return  data;
				}
			},
		};
	}
	public clear() {
		this.stackData.length = 0;
	}
	public toArray(): T[] {
		return [...this.stackData];
	}
	get length() {
		return this.stackData.length;
	}
	get peek() {
		return this.stackData[this.length - 1];
	}
}
