
import './App.css';
import Main from './components/Main';

const App = () => {
  return (
    <div className="App">
      <WeatherContextProvider>
        <Main />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
