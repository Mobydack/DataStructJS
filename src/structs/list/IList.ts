import { ICollection } from '../../interfaces/ICollection';
import { Node } from './ListNode';

export interface IList<T> extends ICollection<T> {
	first: Node<T>;
	last: Node<T>;
	addAfter(node: Node<T>, newNode: Node<T> | T): Node<T>;
	addBefore(node: Node<T>, newNode: Node<T> | T): Node<T>;
	addFirst(node: Node<T> | T): Node<T>;
	addLast(node: Node<T> | T): Node<T>;
	find(value: T): Node<T>;
	findLast(value: T): Node<T>;
	removeFirst(): void;
	removeLast(): void;
}

export interface IListProps {
	size?: number;
	readOnly?: boolean;
}
