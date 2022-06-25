export default function tokenPairs(getTokenPrices) {
    return ([
        { token: 'BTC', price: getTokenPrices('BTC-USD'), name: 'bitcoin' },
        { token: 'ETH', price: getTokenPrices('ETH-USD'), name: 'ethereum' },
        { token: 'LTC', price: getTokenPrices('LTC-USD'), name: 'litecoin' },
        { token: 'XLM', price: getTokenPrices('XLM-USD'), name: 'stellar' },
    ]);
}
