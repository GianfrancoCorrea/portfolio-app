import { Card } from '@gianjsx/component-library';
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
                <p onClick={() => handleGroupByPrice(50)} aria-hidden="true">&nbsp; 50 &nbsp;</p>
                <p onClick={() => handleGroupByPrice(100)} aria-hidden="true">&nbsp; 100 &nbsp;</p>
                <p onClick={() => handleGroupByPrice(500)} aria-hidden="true">&nbsp; 500 &nbsp;</p>
            </div>
            <div style={{ display: 'flex' }}>
                <Card
                    title="Bitcoin Bids orderbook"
                    content={(
                        <div style={{ display: 'flex' }}>
                            <table className="table-orderbook">
                                <tbody>
                                    <tr>
                                        <td>Price</td>
                                        <td>qty</td>
                                        <td>total</td>
                                    </tr>
                                    {
                                        parsedOrders?.bids.map((x, i) => (
                                            <tr style={bidStyle(x, totalBids)} key={String(`bid_${i}`)}>
                                                <td>{x.price}</td>
                                                <td>{x.qty}</td>
                                                <td>{x.total}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>

                        </div>
                    )}
                    largePadding
                    className={'orderbook-card'}
                />
                <Card
                    title="Bitcoin Asks orderbook"
                    content={(
                        <div style={{ display: 'flex' }}>
                            <table className="table-orderbook">
                                <tbody>
                                    <tr>
                                        <td>Price</td>
                                        <td>qty</td>
                                        <td>total</td>
                                    </tr>
                                    {
                                        parsedOrders?.asks.map((x, i) => (
                                            <tr style={askStyle(x, totalAsks)} key={String(`ask_${i}`)}>
                                                <td>{x.price}</td>
                                                <td>{x.qty}</td>
                                                <td>{x.total}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )}
                    largePadding
                    className={'orderbook-card'}
                />
            </div>
        </div>
    );
}

export default Orderbook;

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
