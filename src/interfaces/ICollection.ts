export interface ICollection<T> {
	length: number;
	add(value: T): void;
	clear(): void;
	contains(value: T): boolean;
	remove(value: T): boolean;
	toArray(index: number): T[];
}
