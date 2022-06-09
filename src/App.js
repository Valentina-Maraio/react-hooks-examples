import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import UseState from './components/hooks/UseState';
import UseReducer from './components/hooks/UseReducer';
import UseEffect from './components/hooks/UseEffect';
import UseRef from './components/hooks/UseRef';
import UseLayoutEffect from './components/hooks/UseLayoutEffect';
import UseImperativeHandle from './components/hooks/UseImperativeHandle';
import UseContext from './components/hooks/UseContext';
import UseMemo from './components/hooks/UseMemo';
import UseCallback from './components/hooks/UseCallback';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseState />
        <UseReducer />
        <UseEffect />
        <UseRef />
        <UseLayoutEffect />
        <UseImperativeHandle />
        <UseContext />
        <UseMemo />
        <UseCallback />
      </header>
    </div>
  );
}

export default App;
