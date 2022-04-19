import countapi from 'countapi-js';

import logo from './logo.svg';
import './App.css';

function updateAndReport()
{
  countapi.visits('1ccb732e-b55a-4404-ad3f-0f99c02fe44e').then((result) => {
    console.log(result.value);
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={updateAndReport}>Click me</button>
      </header>
    </div>
  );
}

export default App;
