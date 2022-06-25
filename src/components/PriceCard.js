import { Card } from '@gianjsx/component-library';
import PropTypes from 'prop-types';
import { capitalize } from '../helpers/helpers';
import useImage from '../hooks/useImage';

function PriceCard({ price, token, name, largePadding, className }) {
    const { loading, error, image } = useImage(`${name}.svg`);
    const alt = `${name} logo`;

    if (error) return <div>{alt}</div>;

    const content = (
        <div style={{ width: '8vw', maxHeight: '8vw' }}>
            { loading ? (
                <div>loading</div>
            ) : (
                <embed type="image/svg+xml" height={40} src={image} />
            )}
            <div>
                <p>
                    <span>{capitalize(name)}</span>
                    &nbsp;
                    <span className="text-muted"><b>{token}</b></span>
                </p>
            </div>
            <div>
                <div>{price || 0}</div>
            </div>
        </div>
    );
    return (
        <Card
            title={''}
            content={content}
            largePadding={largePadding}
            className={className || 'orderbook-card'}
        />
    );
}

PriceCard.defaultProps = {
    largePadding : false,
    className    : '',
};
PriceCard.propTypes = {
    price        : PropTypes.number.isRequired,
    name         : PropTypes.string.isRequired,
    token        : PropTypes.string.isRequired,
    largePadding : PropTypes.bool,
    className    : PropTypes.string,
};

export default PriceCard;
