import { IQueue } from './IQueue';

export class Queue<T> implements IQueue<T> {
	protected _data: T[] = [];

	constructor(initArr: T[] = []) {
		this._data = [...initArr];
	}

	public dequeue(): T {
		return this._data.shift();
	}

	public enqueue(value: T) {
		this._data.push(value);
	}

	public peek(): T {
		if (! this.length) {
			return;
		}

		return this._data[0];
	}

	public add(value: T) {
		this.enqueue(value);
	}

	public clear() {
		this._data.length = 0;
	}

	public contains(value: T): boolean {
		return this._data.includes(value);
	}

	public toArray(): T[] {
		return [...this._data];
	}

	public remove(): boolean {
		this.dequeue();
		return true;
	}

	get length() {
		return this._data.length;
	}
}
