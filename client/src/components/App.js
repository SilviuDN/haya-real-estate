import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Routes from './Routes'
import Footer from './Footer/Footer';
import Navigation from './layout/Navigation/Navigation';

function App() {
  return (
    <>
      <Navigation/>
      <Routes/>
      <Footer/>
    </>

  );
}

export default App;
