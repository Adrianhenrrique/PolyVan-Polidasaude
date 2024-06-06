import './App.css';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import InformacaoExtra from './components/informacaoExtra/informacaoExtra';
import TestFirebase from './components/testeFirebase';

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <InformacaoExtra/>
    </>
  );
}

export default App;
