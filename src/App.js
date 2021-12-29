import React, {Component} from 'react';
import {render} from 'react-dom';
import {Routes, Route, Link} from 'react-router-dom';

import Header from "./components/Header"
import useToken from "./components/useToken"
import Logout from './components/Logout';

import Home from "./containers/Home";
import About from "./containers/About";
import Posts from "./containers/Posts.jsx";
import Invoices from "./containers/Invoices.jsx";
import Invoice from "./containers/Invoice";

import Signin from './containers/Login';
import Signup from './containers/Signup';
import Profile from './containers/Profile';


function App(){

    const { token, setToken } = useToken();
    // if(!token || token==undefined){
    // }
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
                    <Route path="signin" element={<Signin setToken={setToken}/>} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="signup" element={<Signup />} />
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