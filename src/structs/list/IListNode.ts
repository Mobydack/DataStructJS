import { Node } from './ListNode';

export interface IListNode<T> {
	next: Node<T>;
	previous: Node<T>;
	value: T;
	list: ThisType<T>;
}
