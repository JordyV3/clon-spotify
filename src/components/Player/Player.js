import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import { SpotifyBody } from './styles';
import Footer from '../Footer/Footer';

const Player = () => {
    return (
        <>
        <SpotifyBody>
            <Sidebar/>
            <Body/>
        </SpotifyBody>
        <Footer/>
        </>
    )
}

export default Player