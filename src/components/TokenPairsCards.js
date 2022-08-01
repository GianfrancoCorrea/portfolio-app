import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PriceCard } from '@gianjsx/component-library';

function TokenPairsCards({ tokenPairs }) {
    return (
        <TokenPairsCardsGrid>
            {tokenPairs.map(({ token, price, name }) => (
                <PriceCard
                    key={token}
                    name={name}
                    token={token}
                    price={price}
                />
            ))}

        </TokenPairsCardsGrid>
    );
}

export default TokenPairsCards;

const TokenPairsCardsGrid = styled.div` 
    display: flex;
    gap: 40px;
    justify-content: center;
`;

TokenPairsCards.propTypes = {
    tokenPairs: PropTypes.arrayOf(PropTypes.shape({
        token : PropTypes.string.isRequired,
        price : PropTypes.number.isRequired,
        name  : PropTypes.string.isRequired,
    })).isRequired,
};
