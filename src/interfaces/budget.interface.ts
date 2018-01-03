import { Spend } from './spend.interface';

export interface Budget {
	date: string,
	amount: number,
	spent: Array<Spend>,
	bank: number
}