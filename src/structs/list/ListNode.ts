import { IList } from './IList';
import { IListNode, TListNode } from './IListNode';
import { List } from './list';

export class Node<T> implements IListNode<T> {
	public next: Node<T> = null;
	public previous: Node<T> = null;
	public value: T = null;
	public list: List<T> = null;

	constructor(value: T = null) {
		this.value = value;
	}
}
