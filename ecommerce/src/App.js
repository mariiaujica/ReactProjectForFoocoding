import './App.css';
import TopBar from './TopBar';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import IndexContent from './pages/IndexContent';
import About from './pages/about';
import Murals from './pages/Murals';
import Contact from './pages/contact';
import Shop from './pages/shop';
import Checkout from './pages/checkout';
import NotFound from './pages/NotFound';
import Product from './pages/product';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="App-logo">
            <a hreh="/">
              <img src="/images/mylogo.jpg" alt="logo" />
              Ossian
              Theselius
            </a>
          </div>
          <TopBar />
        </header>
        <div className="App-content">
          <Routes>
            <Route exact path='/' element={<IndexContent />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
            <Route exact path='/shop' element={< Shop />}></Route>
            <Route exact path='/murals' element={< Murals />}></Route>
            <Route exact path='/checkout' element={< Checkout />}></Route>
            <Route path='/product/:productid' element={<Product />}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
