import './App.css';
import About from './components/about/about';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import InformacaoExtra from './components/informacaoExtra/informacaoExtra';
import Services from './components/services/Services';

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <InformacaoExtra/>
      <About/>
      <Services/>
    </>
  );
}

export default App;
