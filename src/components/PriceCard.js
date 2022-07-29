import { Card } from '@gianjsx/component-library';
import PropTypes from 'prop-types';
import { capitalize } from '../helpers/helpers';
import useImage from '../hooks/useImage';

function PriceCard({ price, token, name, className }) {
    const { loading, error, image } = useImage(`${name}.svg`);
    const alt = `${name} logo`;

    if (error) return <div>{alt}</div>;

    return (
        <Card className={className}>
            <div>
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
        </Card>
    );
}

PriceCard.defaultProps = {
    className: '',
};

PriceCard.propTypes = {
    price     : PropTypes.number.isRequired,
    name      : PropTypes.string.isRequired,
    token     : PropTypes.string.isRequired,
    className : PropTypes.string,
};

export default PriceCard;
