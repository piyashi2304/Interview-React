import logo from './logo.svg';
import './App.css';
import Counter from './Day1/Counter'
import RouterCompo from './Day2/Route/RouterCompo';
import Parent from './Day2/Props/Parent';
// import DisplayCompo from './Day2/Props/DisplayCompo';

function App() {
  return (
    <div className="App">
      <Parent />
      <Counter />
      <RouterCompo />
     
    </div>
  );
}

export default App;
