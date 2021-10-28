import React from 'react';
import '../styles/App.scss';
import { Currency } from "../model/Currency";

interface Props {
    prices: Array<Currency>,
}

export const Table: React.FC<Props> = ({
    prices
}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Symbol</th>
                    <th>Ask Price</th>
                    <th>Price Change</th>
                    <th>%</th>
                </tr>

                {prices.map((price: Currency, index: number) => {
                    return (
                        <tr key={index}>
                            <td>{price.symbol}</td>
                            <td>{price.askPrice}</td>
                            <td>{price.priceChange}</td>
                            <td>{price.priceChangePercent}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}