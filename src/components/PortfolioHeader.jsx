import PropTypes from 'prop-types';

/* a react component called PortfolioHeader */

function PortfolioHeader({ name, description, image }) {
    /* this component have a profile image, a description, and a name */
    /* the image is in the left side and the text in the right side */
    /* the image is a circle */
    /* the component have a mailto link */

    return (
        <div className="portfolio-header">
            <div className="portfolio-header-image">
                <img src={image} alt={name} />
            </div>
            <div className="portfolio-header-text">
                <h1>{name}</h1>
                <p>{description}</p>
                <p className="portfolio-header-text-email">
                    <a c href="mailto:example@gmail.com">Contact me</a>
                </p>
                {/* there is a link to my github profile */}
                <p className="portfolio-header-text-github">
                    <a c href="github.com/example">Github</a>
                </p>
            </div>
        </div>
    );
}

PortfolioHeader.propTypes = {
    name        : PropTypes.string,
    description : PropTypes.string,
    image       : PropTypes.string,
};
PortfolioHeader.defaultProps = {
    name        : 'Portfolio',
    description : 'This is a portfolio website',
    image       : 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
};

export default PortfolioHeader;
/* end of PortfolioHeader */
