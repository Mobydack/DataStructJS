import { Queue } from '../queue/Queue';
import { IDeque } from './IDeque';

export class Deque<T> extends Queue<T> implements IDeque<T> {
	constructor(value: T[] = []) {
		super(value);
	}

	public dequeueInvers(): T {
		return this._data.pop();
	}

	public enqueueInverse(value: T): void {
		this._data.splice(0, 0, value);
	}

	public peekInverse(): T {
		const length = this._data.length;

		if (! length) {
			return;
		}

		return this._data[length - 1];
	}
}
