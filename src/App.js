import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassCounterOne from './components/ClassCounterOne';
import ClassCounterTwo from './components/ClassCounterTwo';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <p>Class Counters</p>
      <ClassCounter/>
      <br></br>
      <p>Hook Counter</p>
      <HookCounter/>
      <br></br>
      <HookCounterTwo/>
      <br></br>
      Class Counter 
      <ClassCounterTwo/>
      <p>useState on objects</p>
      <HookCounterThree/>
      <p>UseState on Array</p>
      <HookCounterFour/>
      <p>useEffect example</p>
      <ClassCounterOne/>
      <br></br>
      <HookCounterOne/>
    </div>
  );
}

export default App;
