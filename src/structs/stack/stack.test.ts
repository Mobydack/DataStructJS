import { Stack } from './index';

describe('Stack', () => {
	test('create class', () => {
		expect(new Stack()).not.toBeUndefined();
	});
	test('without arguments', () => {
		const stack = new Stack<string>();
		expect(stack.length).toBe(0);
	});
	test('with arguments', () => {
		const stack = new Stack<number>(1, 2, 3, 4);
		expect(stack.length).toBe(4);
	});
	test('checking the stack for the contents of a value', () => {
		const stack = new Stack<number>(1, 2, 3, 4);
		expect(stack.toArray()).toEqual([1, 2, 3, 4]);
	});
	test('cheking clear method', () => {
		const stack = new Stack<number>(1, 2, 3, 4);
		stack.clear();
		expect(stack.toArray()).toEqual([]);
	});
	test('checking push method' , () => {
		const stack = new Stack<number>();
		stack.push(12);
		expect(stack.toArray()).toEqual([12]);
	});
	test('checking pop method', () => {
		const stack = new Stack<number>(1, 2, 3, 4);
		stack.pop();
		expect(stack.toArray()).toEqual([1, 2, 3]);
	});
});
