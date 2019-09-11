import { IQueue } from '../queue/IQueue';

export interface IDeque<T> extends IQueue<T> {
	dequeueInvers(): T;
	enqueueInverse(value: T): void;
	peekInverse(): T;
}
