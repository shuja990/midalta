import '../styles/bootstrap.min.css'
import '../styles/animate.min.css'
import '../styles/boxicons.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import '../styles/style.css'
import '../styles/responsive.css'

import React from 'react'
import App from 'next/app'
import Head from "next/head"
import Loader from '../components/Shared/Loader'
import GoTop from '../components/Shared/GoTop'

export default class MyApp extends App {

    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props
        return (
            <>
                <Head>
                    <title>Midalta | It’s about growth</title>
                    <meta name="description" content="Midalta | It’s about growth" />
                    <meta name="og:title" property="og:title" content="Midalta | It’s about growth"></meta>
                    <meta name="twitter:card" content="Midalta | It’s about growth"></meta>
                    <link rel="canonical" href="http://www.midalta.com/"></link>                
                </Head>

                <Component {...pageProps} />
                
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="100" delayInMs="10.50" />
            </>
        );
    }
}