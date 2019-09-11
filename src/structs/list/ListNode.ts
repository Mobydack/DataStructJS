import { IListNode } from './IListNode';
import { LinkedList } from './LinkedList';

export class Node<T> implements IListNode<T> {
	public next: Node<T> = null;
	public previous: Node<T> = null;
	public value: T = null;
	public list: LinkedList<T> = null;

	constructor(value: T = null) {
		this.value = value;
	}

	public destructor() {
		delete this.next;
		delete this.previous;
		delete this.value;
		delete this.list;
	}
}
