let totalQty = 0;
const getTotal = (qty) => {
    totalQty += qty;
    return totalQty.toFixed(2);
};

const parseOrders = (fixed, items) => {
    totalQty = 0;
    return items.map((x) => (
        {
            price : parseFloat(x.px.toFixed(fixed)),
            qty   : parseFloat(x.qty.toFixed(2)),
            total : parseFloat(getTotal(x.qty)),
        }

    ));
};

const groupBy = (n, items) => {
    const result = [];
    const Orders = parseOrders(0, items);

    Orders.forEach((a) => {
        let price = parseFloat(a.price.toFixed(0));

        const debt = price % n; // TODO: bug with number like: 1500 % 50 = 0 && 1500 % 500 = 0
        if (debt > 0) {
            price += (n - debt);
        }

        const samePrice = result.some(x => x.price === price)
            ? result.find(x => x.price === price)
            : false;

        if (samePrice) {
            samePrice.qty = parseFloat(parseFloat(samePrice.qty + a.qty).toFixed(2));
            samePrice.total = a.total;
        } else if (result.length <= 14) {
            result.push({
                ...a,
                price,
            });
        }
    });

    return result;
};

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const apiGet = (url) => fetch(url).then((response) => response.json());

const bidStyle = (x, totalBids) => ({
    backgroundImage:
    `linear-gradient(to right,
        rgba(255, 0, 0, 0) ${Math.abs(((x.total * 100) / totalBids) - 100)}%,
        rgba(46, 204, 113, 0.3) 0.1%,
        rgba(46, 204, 113, 0.3) ${(x.total * 100) / totalBids}%)`,
});
const askStyle = (x, totalAsks) => ({
    backgroundImage:
    `linear-gradient(to left,
        rgba(255, 0, 0, 0) ${Math.abs(((x.total * 100) / totalAsks) - 100)}%,
        rgba(231, 76, 60, 0.3) 0.1%,
        rgba(231, 76, 60, 0.3) ${(x.total * 100) / totalAsks}%)`,
});

export { groupBy, capitalize, apiGet, bidStyle, askStyle };
