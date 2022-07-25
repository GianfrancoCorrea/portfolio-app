import { createChart, CrosshairMode } from 'lightweight-charts';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// import priceData from '../helpers/data/priceData';
import { useTheme } from 'styled-components';
import volumeData from '../helpers/data/volumeData';

export default function Chart({ prices }) {
    const chartContainerRef = useRef();
    const chart = useRef();
    const theme = useTheme();
    // const resizeObserver = useRef();

    useEffect(() => {
        chart.current = createChart(chartContainerRef.current, {
            width  : 900,
            height : 500, // "300px", //chartContainerRef.current.clientHeight,
            layout : {
                textColor: theme.text,
            },
            grid: {
                vertLines: {
                    color: '#334158',
                },
                horzLines: {
                    color: '#334158',
                },
            },
            crosshair: {
                mode: CrosshairMode.Normal,
            },
            priceScale: {
                borderColor: '#485c7b',
            },
            timeScale: {
                borderColor: '#485c7b',
            },
        });

        const candleSeries = chart.current.addCandlestickSeries({
            upColor         : '#4bffb5',
            downColor       : '#ff4976',
            borderDownColor : '#ff4976',
            borderUpColor   : '#4bffb5',
            wickDownColor   : '#838ca1',
            wickUpColor     : '#838ca1',
        });

        candleSeries.setData(prices);

        // const areaSeries = chart.current.addAreaSeries({
        //   topColor: 'rgba(38,198,218, 0.56)',
        //   bottomColor: 'rgba(38,198,218, 0.04)',
        //   lineColor: 'rgba(38,198,218, 1)',
        //   lineWidth: 2
        // });

        // areaSeries.setData(areaData);

        const volumeSeries = chart.current.addHistogramSeries({
            color       : '#182233',
            lineWidth   : 2,
            priceFormat : {
                type: 'volume',
            },
            overlay      : true,
            scaleMargins : {
                top    : 0.8,
                bottom : 0,
            },
        });

        volumeSeries.setData(volumeData);
    }, []);

    // Resize chart on container resizes.
    /*  useEffect(() => {
        resizeObserver.current = new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
            chart.current.applyOptions({ width, height });
            setTimeout(() => {
                chart.current.timeScale().fitContent();
            }, 0);
        });

        resizeObserver.current.observe(chartContainerRef.current);

        return () => resizeObserver.current.disconnect();
    }, []); */

    return (

        <div
            ref={chartContainerRef}
            className="chart-container"
            style={{ width: '100%' }}
        />

    );
}

Chart.propTypes = {
    prices: PropTypes.arrayOf(PropTypes.shape({
        time   : PropTypes.number.isRequired,
        open   : PropTypes.number.isRequired,
        high   : PropTypes.number.isRequired,
        low    : PropTypes.number.isRequired,
        close  : PropTypes.number.isRequired,
        volume : PropTypes.number.isRequired,
    })).isRequired,
};
