import React from 'react';
import Header from './Header';
import { bindActionCreators } from 'redux'
import Footer from './Footer';
import { getUserSessionAction } from '../redux/action/appState'
import Routes from '../router/routes'

const Home = () => (
    <div>
        <Header />
        <Routes />
        <Footer />
    </div>
);
export default Home;