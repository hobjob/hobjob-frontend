import { Rate } from "./models/IRate";

export const rates: { [key: string]: Rate } = {
	month: {
		sale: 0,
		subtitle: "1 месяц",
		title: "Для тех, кто пробует",
		price: 299,
		fullPrice: 299,
		subprice: "в месяц",
		subbtn: "Ежемесячная оплата",
		type: "month",
	},

	threeMonths: {
		sale: 20,
		subtitle: "3 месяца",
		title: "Для тех, кто настроен серьезно",
		price: 249,
		fullPrice: 749,
		subprice: "в месяц",
		subbtn: "При оплате 749₽ за 3 месяца",
		type: "threeMonths",
	},

	year: {
		sale: 50,
		subtitle: "1 год",
		title: "Для тех, кто ищет максимальную выгоду",
		price: 166,
		fullPrice: 1990,
		subprice: "в месяц",
		subbtn: "При оплате 1990₽ за 1 год",
		type: "year",
	},
};
