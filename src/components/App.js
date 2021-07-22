import Navbar from './Navbar';
import Presentation from './Presentation';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Presentation/>
      </div>
    </div>
  );
}

export default App;
