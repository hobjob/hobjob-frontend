import {Rate} from "./models/IRate";

export const rates: {[key: string]: Rate} = {
    month: {
        sale: 0,
        subtitle: "30 дней",
        title: "Для тех, кто пробует",
        price: 299,
        fullPrice: 299,
        subprice: "в месяц",
        subbtn: "Ежемесячная оплата",
        type: "month",
    },

    year: {
        sale: 20,
        subtitle: "1 год",
        title: "Для тех, кто настроен серьезно",
        price: 299,
        fullPrice: 4788,
        subprice: "в месяц",
        subbtn: "При оплате 4788₽ за год",
        type: "year",
    },

    twoYears: {
        sale: 50,
        subtitle: "2 года",
        title: "Для тех, кто ищет максимальную выгоду",
        price: 299,
        fullPrice: 5990,
        subprice: "в месяц",
        subbtn: "При оплате 5990₽ за 2 года",
        type: "twoYears",
    },
};
