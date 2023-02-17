import './App.css';
import Greet from './componenets/Greet';
import Welcome from './componenets/Welcome';
import Counter from './componenets/Counter';
function App() {
  return (
    <div className="App">
      <Greet name='Lohit'>
        <button>action</button>
      </Greet>
      <Welcome name='Lohit'/>
      <Counter></Counter>
    </div>
  );
}

export default App;
