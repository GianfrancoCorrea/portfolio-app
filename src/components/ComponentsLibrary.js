function ComponentsLibrary({ source, width, height }) { // eslint-disable-line
    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;
    return (
        <iframe title="iframe" src={src} width={width} height={height} frameBorder="0" />
    );
}

export default ComponentsLibrary;
