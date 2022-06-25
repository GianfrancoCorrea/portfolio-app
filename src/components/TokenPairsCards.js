import PropTypes from 'prop-types';
import PriceCard from './PriceCard';

function TokenPairsCards({ tokenPairs }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {tokenPairs.map(({ token, price, name }) => (
                <PriceCard
                    key={token}
                    name={name}
                    token={token}
                    price={price}
                />
            ))}

        </div>
    );
}

export default TokenPairsCards;

TokenPairsCards.propTypes = {
    tokenPairs: PropTypes.arrayOf(PropTypes.shape({
        token : PropTypes.string.isRequired,
        price : PropTypes.number.isRequired,
        name  : PropTypes.string.isRequired,
    })).isRequired,
};
