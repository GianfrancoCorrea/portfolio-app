import ReactDOM from 'react-dom/client';
import './index.less';
import '@gianjsx/component-library/src/styles/global.less';

/* eslint-disable */
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
/* eslint-enable */

root.render(
    <App />,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
