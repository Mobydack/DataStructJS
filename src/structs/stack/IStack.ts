export interface IIteratorResult<T> {
	done: boolean;
	value?: T;
}

export interface IIterator<T> {
	next(): IIteratorResult<T>;
}

export interface IStack<T> {
	readonly stackData: T[];
	isEmpty(): boolean;
	push(value: T): void;
	pop(): T | undefined;
	values(): IIterator<T>;
	toArray(): T[];
	clear(): void;
}
