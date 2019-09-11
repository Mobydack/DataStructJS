import { Queue } from './Queue';

describe('queue', () => {
	test('constructor', () => {
		const queue = new Queue<number>([1, 2, 3, 4]);
		expect(queue.peek()).toBe(1);
	});

	test('dequeue', () => {
		const queue = new Queue<number>([1, 2, 3, 4]);
		queue.dequeue();
		expect(queue.peek()).toBe(2);
	});

	test('remove', () => {
		const queue = new Queue<number>([1, 2, 3, 4]);
		queue.remove();
		expect(queue.peek()).toBe(2);
	});

	test('peek', () => {
		const queue = new Queue<number>([]);

		expect(queue.peek()).toBeUndefined();
	});

	test('enqueue', () => {
		const queue = new Queue<number>();
		queue.enqueue(2);
		expect(queue.peek()).toBe(2);
	});

	test('add', () => {
		const queue = new Queue<number>();
		queue.add(2);
		expect(queue.peek()).toBe(2);
	});

	test('clear', () => {
		const queue = new Queue<number>([1, 2, 3, 4]);
		queue.clear();
		expect(queue.length).toBe(0);
	});

	test('contains', () => {
		const queue = new Queue<number>([1, 2, 3, 4]);
		expect(queue.contains(3)).toBeTruthy();
	});

	test('toArray', () => {
		const queue = new Queue<number>([1, 2, 3, 4]);
		expect(queue.toArray()).toEqual([1, 2, 3, 4]);
	});
});
