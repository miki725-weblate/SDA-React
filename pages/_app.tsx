import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../i18n';

import HeadTag from '../components/shared/_head';
import Header from '../components/shared/header';
import Footer from '../components/shared/footer';

import '../styles/style.css';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <div>
                <HeadTag />
                <Header />

                <Component {...pageProps} />

                <Footer />
            </div>
        );
    }
}

export default appWithTranslation(MyApp);
