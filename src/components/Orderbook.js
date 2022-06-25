import { Card } from 'component-library';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { askStyle, bidStyle, groupBy } from '../helpers/helpers';

function Orderbook({ orders: { bids, asks } }) {
    const [parsedOrders, setParsedOrders] = useState(null);

    const handleGroupBy = useCallback((n) => setParsedOrders(
        prev => ({
            ...prev,
            bids : groupBy(n, bids),
            asks : groupBy(n, asks),
        }),
    ), [bids, asks]);

    useEffect(() => {
        if (bids && asks) {
            handleGroupBy(100);
        }
    }, [bids, asks, handleGroupBy]);

    const totalBids = parsedOrders?.bids[parsedOrders.bids.length - 1].total;
    const totalAsks = parsedOrders?.asks[parsedOrders.bids.length - 1].total;

    return (
        <div>
            Group by:
            <div style={{ display: 'flex' }}>
                <p onClick={() => handleGroupBy(50)} aria-hidden="true">&nbsp; 50 &nbsp;</p>
                <p onClick={() => handleGroupBy(100)} aria-hidden="true">&nbsp; 100 &nbsp;</p>
                <p onClick={() => handleGroupBy(500)} aria-hidden="true">&nbsp; 500 &nbsp;</p>
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
            price : PropTypes.number.isRequired,
            qty   : PropTypes.number.isRequired,
            total : PropTypes.number.isRequired,
        })).isRequired,
        asks: PropTypes.arrayOf(PropTypes.shape({
            price : PropTypes.number.isRequired,
            qty   : PropTypes.number.isRequired,
            total : PropTypes.number.isRequired,
        })).isRequired,
    }).isRequired,
};
