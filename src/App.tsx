import React from 'react';
import TokenList from 'components/token-list/TokenList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import Roadmap from './components/roadmap/Roadmap';
import Footer from './elements/Footer';
import Header from './elements/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/roadmap" component={Roadmap} />
          <Route exact path="/token-list" component={TokenList} />
          
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
