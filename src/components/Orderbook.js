import { Table, TableHead, TableCell } from '@gianjsx/component-library/dist/esm/styles';
import { Card } from '@gianjsx/component-library';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { askStyle, bidStyle, parseOrders, groupByPrice } from '../helpers/helpers';

function Orderbook({ orders: { bids, asks } }) {
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
        <div>
            Group by:
            <div style={{ display: 'flex' }}>
                <p onClick={() => handleGroupByPrice(50)} aria-hidden="true">50</p>
                <p onClick={() => handleGroupByPrice(100)} aria-hidden="true">100</p>
                <p onClick={() => handleGroupByPrice(500)} aria-hidden="true">500</p>
            </div>
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
    );
}

const OrderbookTablesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`;

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
};

export default Orderbook;
