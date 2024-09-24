import './App.css';
import Festivals from './components/Festivals';

const App = () => {
  return (
    <div className="App">
      <img className="img" src="/src/assets/img/banner.png" alt="Festival Banner" />
      <h1 className="h1">Festival Lineup 🎉</h1>
      <h2>Explore the best festivals around NYC!</h2>
      <Festivals />
    </div>
  );
};

export default App;
