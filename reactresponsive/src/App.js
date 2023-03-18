import logo from './logo.svg';
import Header from './Components/Header'
import Main from './Components/Main'
import Aside from './Components/Aside'
import Footer from './Components/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />
      <div class="container container-flex">
      <Main />
      <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
