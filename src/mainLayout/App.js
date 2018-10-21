import React, { Component } from 'react';
import { Route } from 'react-router'
import Nav from './NavBar';
import Footer from './Footer';
import PageHome from '../pages/PageHome';
import PageGraph from '../pages/PageGraph';
import PageDenounce   from '../pages/PageDenounce';
import PageLivingcost from '../pages/PageLivingcost';
import PageViolence from '../pages/PageViolence';



class App extends Component {
    render() {
        return (
            <div id="page-top" className="App">
                <Nav />
                <Route path="/" exact component={PageHome} />
                <Route path="/map" component={PageGraph} />
                <Route path="/denounce" component={PageDenounce} />
                <Route path="/violence" component={PageViolence} />
                <Route path="/livingcost" component={PageLivingcost} />
                <Footer />
            </div>
        );
    }
}

export default App;
