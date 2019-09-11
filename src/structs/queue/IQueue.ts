import { ICollection } from '../../interfaces/ICollection';

export interface IQueue<T> extends ICollection<T> {
	dequeue(): T;
	enqueue(value: T): void;
	peek(): T;
}
