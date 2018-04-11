import React from 'react';
import Header from './Header';
import { bindActionCreators } from 'redux'
import Footer from './Footer';
import { getUserSessionAction } from '../redux/action/appState'
import Routes from '../router/routes'
import { Layout } from 'react-toolbox';

const Home = () => (
    <Layout>
        <Header />
        <Routes />
        <Footer />
    </Layout>
);
export default Home;