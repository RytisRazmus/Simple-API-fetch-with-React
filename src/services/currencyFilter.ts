import { Currency } from "../model/Currency";

export function findPairs(baseCurrency: string, prices: Array<Currency>): Array<Currency> {
    const searchedPairs = prices.filter(price => price.symbol.includes(baseCurrency))
    return searchedPairs;
}