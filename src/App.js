import { PortfolioIntro } from '@gianjsx/component-library';
import BlockchainSection from './components/sections/BlockchainSection';
import ChartSection from './components/sections/ChartSection';
import ContactSection from './components/sections/ContactSection';
import './App.less';
import IframeSection from './components/sections/IframeSection';

function App() {
    console.log('render');

    return (
        <div className="App">
            <PortfolioIntro />
            <IframeSection />
            <BlockchainSection />
            <ChartSection />
            <ContactSection />
        </div>
    );
}

export default App;
