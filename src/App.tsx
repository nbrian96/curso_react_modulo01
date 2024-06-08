import './App.css'
import Header from './Header';
import SignUp from './SignUp';


function App() {
  const title = "Trabajo Práctico - Modulo 01";

  return (
    <>
      <div className="Header" id="header">
        <Header title={title} />
      </div>
      <div className="App">
        <SignUp />
      </div>
    </>
  )
}

export default App
