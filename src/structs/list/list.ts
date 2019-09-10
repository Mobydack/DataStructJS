import { IList } from './IList';
import { Node } from './ListNode';

export class List<T> implements IList<T> {
	private _first: Node<T> = null;
	private _last: Node<T> = null;
	private _length: number = 0;

	public addAfter(node: Node<T>, value: Node<T> | T): Node<T> {
		if (! (node && node.list === this)) {
			return;
		}

		if (! (value instanceof Node)) {
			value = new Node(value);
			value.list = this;
		}

		if (value.list !== this) {
			return;
		}

		if (node === this._last) {
			node.next = value;
			value.previous = node;
			this._last = value;
		} else {
			value.next = node.next;
			value.previous = node;
			node.next.previous = value;
			node.next = value;
		}

		this._length++;

		return value;
	}

	public addBefore(node: Node<T>, value: Node<T> | T): Node<T> {
		if (! (node && node.list === this)) {
			return;
		}

		if (! (value instanceof Node)) {
			value = new Node(value);
			value.list = this;
		}

		if (value.list !== this) {
			return;
		}

		if (node === this._first) {
			node.previous = value;
			value.next = node;
			this._first = value;
		} else {
			value.previous = node.previous;
			value.next = node;
			node.previous.next = node;
			node.previous = node;
		}

		this._length++;

		return value;
	}

	public addFirst(value: Node<T> | T): Node<T> {
		if (! (value instanceof Node)) {
			value = new Node(value);
			value.list = this;
		}

		if (value.list !== this) {
			return;
		}

		if (! this._length) {
			this._first = value;
			this._last = value;
		} else {
			value.next = this.first;
			this._first.previous = value;
			this._first = value;
		}

		this._length++;
		return value;
	}

	public addLast(value: Node<T> | T): Node<T> {
		if (! (value instanceof Node)) {
			value = new Node(value);
		}

		if (value.list !== this) {
			return;
		}

		if (! this._length) {
			this._first = value;
			this._last = value;
		} else {
			value.previous = this._last;
			this._last.next = value;
			this._last = value;
		}

		this._length++;
		return value;
	}

	public find(value: T) {
		let node: Node<T> = this._first;
		let desiredNode: Node<T> = null;

		while (node && ! desiredNode) {
			if (node.value === value) {
				desiredNode = node;
				continue;
			}

			node = node.next;
		}

		return desiredNode;
	}

	public findLast(value: T) {
		let node: Node<T> = this._last;
		let desiredNode: Node<T> = null;

		while (node && ! desiredNode) {
			if (node.value === value) {
				desiredNode = node;
				continue;
			}

			node = node.previous;
		}

		return desiredNode;
	}

	public removeFirst() {
		if (! this._length) {
			return;
		}

		this._first.next.previous = null;
		this._first = this.first.next;
		this._length--;
	}

	public removeLast() {
		if (! this._length) {
			return;
		}

		this._last.previous.next = null;
		this._last = this._last.previous;
		this._length--;
	}

	public remove(value: Node<T> | T): boolean {
		if (! this._length) {
			return false;
		}

		if (! (value instanceof Node)) {
			value = this.find(value);

			if (! value) {
				return false;
			}
		}

		if (value.list !== this) {
			return false;
		}

		if (value === this._first) {
			this.removeFirst();

			return true;
		} else if (value === this._last) {
			this.removeLast();

			return true;
		} else {
			value.next.previous = value.previous;
			value.previous.next = value.next;
		}

		this._length--;
		return true;
	}

	public clear() {
		while (this.length) {
			this.removeFirst();
		}
	}

	public add(value: Node<T> | T): Node<T> {
		return this.addLast(value);
	}

	public contains(value: T): boolean {
		const desiredValue = this.find(value);

		return Boolean(desiredValue);
	}

	public toArray(): T[] {
		const arr: T[] = [];
		let node: Node<T> = this._first;

		while (node) {
			arr.push(node.value);
			node = node.next;
		}

		return arr;
	}

	get length() {
		return this._length;
	}

	get first() {
		return this._first;
	}

	get last() {
		return this._last;
	}
}
