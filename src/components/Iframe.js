function Iframe({ source, width, height }) { // eslint-disable-line
    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;
    return (
        <div>
            <div>
                <iframe title="iframe" src={src} width={width} height={height} frameBorder="0" />
            </div>
        </div>
    );
}

export default Iframe;
