function Iframe({ source }) { // eslint-disable-line
    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;
    return (
        <div>
            <div>
                <iframe title="iframe" src={src} width="1000" height="700" frameBorder="0" />
            </div>
        </div>
    );
}

export default Iframe;
