import React from 'react';
import logo from './logo.svg';
import Menu from './components/Menu';
import Tree from './components/Tree';
import Calendar from './components/Calendar';
import Form from './components/Form';
import Index from './components/Index';
import Balance from './components/Balance';
import ArraySpiral from './components/ArraySpiral';
import ArrayAdd from './components/ArrayAdd';
import './main.css';
import {BrowserRouter, Route} from "react-router-dom";


class App extends React.Component{

    

    


    render (){
        return <div>
            <Menu/>
            <div className="contentBlock">
                <BrowserRouter>
                    <Route path='/' component={Index} />
                    <Route path='/tree/' component={Tree} />
                    <Route path='/calendar/' component={Calendar} />
                    <Route path='/balance/' component={Balance} />
                    <Route path='/array-spiral/' component={ArraySpiral} />
                    <Route path='/array-add/' component={ArrayAdd} />
                </BrowserRouter>
            </div>
        </div>
    }
} 




export default App;
