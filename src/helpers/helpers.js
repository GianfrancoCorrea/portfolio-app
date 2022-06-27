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

function groupByPrice(orderBook, n) {
    const groupFind = (arrGroup, price) => arrGroup.find(item => item.price === price);
    const group = [];
    for (let i = 0; i < orderBook.length; i += 1) {
        const groupPrice = Math.floor(orderBook[i].price / n) * n;
        const groupItem = groupFind(group, groupPrice);
        if (groupItem === undefined) {
            group.push({
                price : groupPrice,
                qty   : orderBook[i].qty,
                total : orderBook[i].total,
            });
        } else {
            const groupQty = parseFloat(groupItem?.qty || 0);
            const groupTotal = parseFloat(groupItem?.total || 0);
            const newQty = groupQty + orderBook[i].qty;
            const newTotal = groupTotal + orderBook[i].qty;

            // editing memory reference of group
            groupItem.qty = parseFloat(newQty.toFixed(2));
            groupItem.total = parseFloat(newTotal.toFixed(2));
        }
    }
    return group;
}

const handleChartData = (data) => {
    const volumeData = [];
    const candleData = [];
    data.forEach(x => {
        volumeData.push({
            time  : x[0],
            value : x[5],
        });
        candleData.push({
            time  : x[0],
            open  : x[1],
            high  : x[2],
            low   : x[3],
            close : x[4],
        });
    });
    /*  const chartData = data.map((x) => {
        const volumeData = {
            time  : x[0],
            value : x[5].toString(),
        };
        const candleData = {
            time  : x[0],
            open  : x[1].toString(),
            high  : x[2].toString(),
            low   : x[3].toString(),
            close : x[4].toString(),
        };
        return ({
            volumeData,
            candleData,
        });
    }); */
    return ({ volumeData, candleData });
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

export { groupByPrice, capitalize, apiGet, bidStyle, askStyle, parseOrders, handleChartData };
