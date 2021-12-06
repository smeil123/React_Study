import React, {Component} from 'react';
import {render} from 'react-dom';
import {Routes, Route, Link} from 'react-router-dom';

import Header from "./components/Header"

import Home from "./containers/Home";
import About from "./containers/About";
import Posts from "./containers/Posts";
import Invoices from "./containers/Invoices.jsx";
import Invoice from "./containers/Invoice";

import Signin from './containers/Signin';
import Profile from './containers/Profile';

function App(){

    const token = localStorage.getItem('acessToken');

    if(!token){
        return <Signin />
    }

        return (
            <div className="App">
                <h1>WaterMelon Market</h1>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="about" element={<About />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="invoices" element={<Invoices />}>
                        <Route
                            index element={
                                <main style={{padding:"1rem"}}>
                                    <p>Select an invoice</p>
                                </main>
                            }/>
                        <Route path=":invoiceId" element={<Invoice />} /> 
                    </Route>
                    <Route path="*"
                        element={
                            <main style={{padding:"1rem"}}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </div>
        );
}

export default App;