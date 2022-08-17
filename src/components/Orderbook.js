import { Table, TableHead, TableCell } from '@gianjsx/component-library/dist/esm/styles';
import PropTypes from 'prop-types';
import { Card } from '@gianjsx/component-library';
import styled, { ThemeProvider } from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { lightTheme, darkTheme } from '../theme';
import { askStyle, bidStyle, parseOrders, groupByPrice } from '../helpers/helpers';

function Orderbook({ orders: { bids, asks }, isDarkTheme }) {
    const [parsedOrders, setParsedOrders] = useState(null);

    const handleGroupByPrice = useCallback((n) => setParsedOrders(
        prev => ({
            ...prev,
            bids: groupByPrice(parseOrders(0, bids), n)
                .sort((a, b) => b.price - a.price)
                .slice(0, 14),
            asks: groupByPrice(parseOrders(0, asks), n)
                .sort((a, b) => a.price - b.price)
                .slice(0, 14),
        }),
    ), [bids, asks]);

    useEffect(() => {
        if (bids && asks) {
            console.log('%c 🍜 bids: ', 'font-size:12px;background-color: #EA7E5C;color:#fff;', bids);
            handleGroupByPrice(50);
        }
    }, [bids, asks, handleGroupByPrice]);

    const totalBids = parsedOrders?.bids[parsedOrders.bids.length - 1].total;
    const totalAsks = parsedOrders?.asks[parsedOrders.bids.length - 1].total;

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <div>
                <OrderbookTablesOptions>
                    <OrderbookTablesOptionsLabel>Group by</OrderbookTablesOptionsLabel>
                    <GroupByPriceTrigger className="ahsfvasfvas" onClick={() => handleGroupByPrice(50)}>
                        50
                    </GroupByPriceTrigger>
                    <GroupByPriceTrigger className="ahsfvasfvas" onClick={() => handleGroupByPrice(100)}>
                        100
                    </GroupByPriceTrigger>
                    <GroupByPriceTrigger className="ahsfvasfvas" onClick={() => handleGroupByPrice(500)}>
                        500
                    </GroupByPriceTrigger>
                </OrderbookTablesOptions>
                <OrderbookTablesWrapper>
                    <Card title="Bitcoin Bids orderbook">
                        <Table>
                            <thead>
                                <tr>
                                    <TableHead>Price</TableHead>
                                    <TableHead>qty</TableHead>
                                    <TableHead>total</TableHead>
                                </tr>
                            </thead>
                            <tbody>
                                { parsedOrders?.bids.map((x, i) => (
                                    <tr style={bidStyle(x, totalBids)} key={String(`bid_${i}`)}>
                                        <TableCell>{x.price}</TableCell>
                                        <TableCell>{x.qty}</TableCell>
                                        <TableCell>{x.total}</TableCell>
                                    </tr>
                                )) }
                            </tbody>
                        </Table>
                    </Card>
                    <Card title="Bitcoin Asks orderbook">
                        <Table>
                            <thead>
                                <tr>
                                    <TableHead>Price</TableHead>
                                    <TableHead>qty</TableHead>
                                    <TableHead>total</TableHead>
                                </tr>
                            </thead>
                            <tbody>
                                { parsedOrders?.asks.map((x, i) => (
                                    <tr style={askStyle(x, totalAsks)} key={String(`ask_${i}`)}>
                                        <TableCell>{x.price}</TableCell>
                                        <TableCell>{x.qty}</TableCell>
                                        <TableCell>{x.total}</TableCell>
                                    </tr>
                                )) }
                            </tbody>
                        </Table>
                    </Card>
                </OrderbookTablesWrapper>
            </div>
        </ThemeProvider>
    );
}

Orderbook.propTypes = {
    orders: PropTypes.shape({
        bids: PropTypes.arrayOf(PropTypes.shape({
            px  : PropTypes.number.isRequired,
            qty : PropTypes.number.isRequired,
        })).isRequired,
        asks: PropTypes.arrayOf(PropTypes.shape({
            px  : PropTypes.number.isRequired,
            qty : PropTypes.number.isRequired,
        })).isRequired,
    }).isRequired,
    isDarkTheme: PropTypes.bool.isRequired,
};

export default Orderbook;

const OrderbookTablesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`;

const OrderbookTablesOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    font-size: 12px;
`;

const OrderbookTablesOptionsLabel = styled.span`
    text-transform: uppercase;
`;

const GroupByPriceTrigger = styled.span`
    cursor: pointer;
    padding: 5px;
    border-width: 2px;
    border-style: solid;
    border-color: ${({ theme }) => theme.borderColor};
    border-radius: 999px;
    width: 35px;
    text-align: center;

    &:hover {
        box-shadow: 0 2px 10px ${({ theme }) => theme.borderColor}
    }

`;
