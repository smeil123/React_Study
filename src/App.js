import React, {Component} from 'react';
import {render} from 'react-dom';
import {Routes, Route, Link} from 'react-router-dom';

import Header from "./containers/common/Header";
import useToken from "./components/common/useToken";
import Logout from './components/user/logout';

import Home from "./containers/common/Home";
import About from "./containers/About";
import Posts from "./containers/post/Posts.jsx";
import MyPosts from "./containers/post/MyPosts.js";
import PostList from "./containers/post/PostList.jsx";
import Invoices from "./containers/Invoices.jsx";
import Invoice from "./containers/Invoice";

import Signin from './containers/user/SingIn';
import Signup from './containers/user/Signup';
import Profile from './containers/user/Profile';


function App(){

        return (
            <div className="App">
                <h1>WaterMelon Market</h1>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="about" element={<About />} />
                    <Route path="post-save" element={<Posts />} />
                    <Route path="post-list" element={<PostList />} />
                    <Route path="my-posts" element={<MyPosts />} />
                    <Route path="invoices" element={<Invoices />}>
                        <Route
                            index element={
                                <main style={{padding:"1rem"}}>
                                    <p>Select an invoice</p>
                                </main>
                            }/>
                        <Route path=":invoiceId" element={<Invoice />} /> 
                    </Route>
                    <Route path="signin" element={<Signin />} />
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