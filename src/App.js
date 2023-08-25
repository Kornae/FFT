import './App.css';
import Section1 from './Section1';
import Section2 from './Section2';

function App() {
  const scrollToSection2 = (e) => {
    e.preventDefault()
    const section2 = document.getElementById("s2");

    if (section2) {
      section2.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App">
      <div id='main'>
        <div id='s1'><Section1 
          scroll={scrollToSection2}
        /></div>
        <div id='s2'><Section2 /></div>
      </div>
    </div>
  );
}

export default App;
