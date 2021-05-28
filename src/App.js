import './App.css';
import Weather from './components/Weather';

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Weather city_name="London"/>
    </div>
  );
}

export default App;
