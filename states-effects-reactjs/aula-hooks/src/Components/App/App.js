import './App.css';
import Counter from '../Counter/Counter';
import SmartCounter from '../Smartcounter/Smartcounter';
import IfoodCounter from '../Ifoodcounter/Ifoodcounter';

function App() {
  return (
    <>
      <h1>Contador 1</h1>
      <Counter/>
      <h1>Contador 2</h1>
      <SmartCounter/>
      <h1>Contador do Ifood</h1>
      <IfoodCounter/>
    </>
  );
}

export default App;
