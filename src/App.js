import logo from './logo.svg';
import './App.css';
import Counter from './Day1/Counter'
import RouterCompo from './Day2/Route/RouterCompo';
import Parent from './Day2/Props/Parent';
import Parent1 from './Day3/UseCallbackhook/Parent1';
import UseMemoCompo from './Day3/UseMemoHook/UseMemoCompo';
import UseRefCompo from './Day3/UseRefhook/UseRefCompo';
import UseReducerCompo from './Day3/UseReducerHook/UseReducerCompo';
// import DisplayCompo from './Day2/Props/DisplayCompo';

function App() {
  return (
    <div className="App">
      {/* <Parent /> */}
      {/* <Counter /> */}
      {/* <RouterCompo /> */}
      {/* <Parent1 /> */}
      {/* <UseMemoCompo /> */}
      {/* <UseRefCompo /> */}
      <UseReducerCompo />
     
    </div>
  );
}

export default App;
