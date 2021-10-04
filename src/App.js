import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Support from './components/Facilities/Facilities';
import Services from './components/Services/Services';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/services/:serviceId">
              <ServiceDetail></ServiceDetail>
            </Route>
            <Route path="/facilities">
              <Support></Support>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
