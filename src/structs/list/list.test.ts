import { LinkedList } from './LinkedList';

describe('LinkedList test', () => {
	test('add element', () => {
		const list: LinkedList<number> = new LinkedList<number>();
		list.add(123);

		expect(list.first.value).toEqual(123);
	});

	test('icremenent element', () => {
		const list: LinkedList<number> = new LinkedList<number>();
		list.add(123);

		expect(list.length).toBe(1);
	});

	test('addFirst', () => {
		const list: LinkedList<number> = new LinkedList<number>();
		const secondValue = list.add(12);

		list.add(144);

		const firstValue = list.addFirst(44);

		expect(
			firstValue === list.first &&
			firstValue.next === secondValue,
		).toBeTruthy();
	});

	test('addLast', () => {
		const list: LinkedList<number> = new LinkedList<number>();
		const preLast = list.add(12);
		const last = list.addLast(144);

		expect(
			last === list.last &&
			last.previous === preLast,
		).toBeTruthy();
	});

	test('addAfter', () => {
		const list: LinkedList<number> = new LinkedList<number>();
		list.add(1);
		const midNode = list.add(2);

		const lastNode = list.add(3);

		const afterNode = list.addAfter(midNode, 4);

		expect(
			midNode.next === afterNode &&
			afterNode.next === lastNode,
		).toBeTruthy();
	});

	test('addBefore', () => {
		const list: LinkedList<number> = new LinkedList<number>();
		list.add(1);
		const midNode = list.add(2);

		list.add(3);

		const beforeNode = list.addBefore(midNode, 4);

		expect(
			beforeNode.next === midNode &&
			beforeNode.previous === list.first,
		).toBeTruthy();
	});

	test('find', () => {
		const list: LinkedList<number> = new LinkedList<number>();
		list.add(1);
		list.add(2);
		const findNode = list.add(10);
		list.add(12);

		expect(list.find(10)).toEqual(findNode);
	});

	test('findLast', () => {
		const list: LinkedList<number> = new LinkedList<number>();
		list.add(1);
		list.add(2);
		const findNode = list.add(10);
		list.add(12);

		expect(list.findLast(10)).toEqual(findNode);
	});

	test('remove', () => {
		const list: LinkedList<number> = new LinkedList<number>();
		list.add(1);
		list.add(2);

		const deletedNode = list.add(3);

		const resultOperation = list.remove(deletedNode);
		expect(resultOperation).toBeTruthy();
	});

	test('removeFirst', () => {
		const list: LinkedList<number> = new LinkedList<number>();
		list.add(1);

		const secondNode = list.add(2);

		list.add(3);
		list.removeFirst();

		expect(secondNode).toEqual(list.first);
	});

	test('removeLast', () => {
		const list: LinkedList<number> = new LinkedList<number>();
		list.add(1);

		const secondNode = list.add(2);

		list.add(3);
		list.removeLast();

		expect(secondNode).toEqual(list.last);
	});

	test('clear', () => {
		const list: LinkedList<number> = new LinkedList<number>([1, 2, 3]);

		list.clear();

		expect(list.length).toBe(0);
	});

	test('contains', () => {
		const list: LinkedList<number> = new LinkedList<number>([1, 2, 3]);

		expect(list.contains(2)).toBeTruthy();
	});

	test('toArray', () => {
		const arr: number[] = [1, 2, 3];
		const list: LinkedList<number> = new LinkedList<number>(arr);

		expect(list.toArray()).toEqual(arr);
	});
});
