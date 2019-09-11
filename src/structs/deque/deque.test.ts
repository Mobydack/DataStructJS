import { Deque } from './Deque';

describe('deque', () => {
	test('constructor', () => {
		const deque = new Deque<number>();
		expect(deque.toArray()).toEqual([]);
	});

	test('dequeueInverse', () => {
		const deque = new Deque<number>([1, 2, 3, 4]);
		deque.dequeueInvers();
		expect(deque.peekInverse()).toBe(3);
	});

	test('enqueueInverse', () => {
		const deque = new Deque<number>([1, 2, 3, 4]);
		deque.enqueueInverse(5);
		expect(deque.peek()).toBe(5);
	});

	test('peekInverse and empty queue', () => {
		const deque = new Deque<number>([]);
		expect(deque.peekInverse()).toBeUndefined();
	});
});
