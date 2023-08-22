import './App.css';
import Section1 from './Section1';
import Section2 from './Section2';

function App() {
  return (
    <div className="App">
      <div id='main'>
        <div id='s1'><Section1 /></div>
        <div id='s2'><Section2 /></div>
      </div>
    </div>
  );
}

export default App;
