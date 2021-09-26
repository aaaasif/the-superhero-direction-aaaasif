import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  
  return (
    <div className="App">
      <div className="header">
        <div className="container">
            {/* Header is Here */}
            <Header></Header>
          </div>
      </div>
      
      <div className="container mt-4">
        {/*developer & List is here */}
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
