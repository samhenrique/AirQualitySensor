import { Toaster } from 'sonner';
import logo from './ICONEbranco.png';
import DisplayCircle from './components/displayCircle';
import AppHeader from './components/header';
import AppFooter from './components/footer';

function App() {
  return (
    <div className="App">
      <Toaster position="bottom-right" richColors toastOptions={{
        duration: 5000,
    style: {
      background: '#2b2a2f',
      border:'1px solid'
    },
    className: 'class',
  }}/>

      <div className="App-header">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Sensor de Qualidade do Ar</h1>
        </header>
      </div>
      <AppHeader/>

      <div className='body'>
        
        <DisplayCircle tagInfo={'40°C'} tagTitle={'Temperatura'} critical={2}/>

        <DisplayCircle tagInfo={'1000 ppm'} tagTitle={'Qualidade do Ar'} critical={1}/>

        <DisplayCircle tagInfo={'100%'} tagTitle={'Umidade'} critical={0}/>

        <DisplayCircle tagInfo={'21%'} tagTitle={'Concentração de CO²'} critical={0}/>
        
        
      </div>
      <AppFooter/>
    </div>
  );
}

export default App;
