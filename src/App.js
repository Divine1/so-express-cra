import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import HomeTour from './components/HomeTour';

import About from './components/About';
import Contact from './components/Contact';

class App extends Component{

    render(){
        return(
            <div>
                <BrowserRouter>
                    <>
                        <Header />
                        <Route path="/" component={Home} exact />
                        <Route path="/home/tour" component={HomeTour} exact />

                        <Route path="/about" component={About} exact />
                        <Route path="/contact" component={Contact} exact />
                    </>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;