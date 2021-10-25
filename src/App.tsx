import React from 'react';
import TokenList from 'components/token-list/TokenList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import Roadmap from './components/roadmap/Roadmap';
import Footer from './elements/Footer';
import Header from './elements/Header';
import TokenListPolygon from 'components/token-list-polygon/TokenListPolygon';
import TokenDetails from 'components/token-details/TokenDetails';
import Details from 'components/details/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/roadmap" component={Roadmap} />
          <Route exact path="/token-list" component={TokenList} />
          <Route exact path="/token-list-polygon" component={TokenListPolygon} />
          <Route exact path="/token-details" component={TokenDetails} />
          <Route exact path="/details" component={Details} />
          
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
