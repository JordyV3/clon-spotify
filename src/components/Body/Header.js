import React from 'react'
import {HeaderContainer, HeaderLeft, HeaderRight} from './Styles';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <SearchIcon/>
                <input type="text" placeholder="Search for Artists, Songs, on other"/>
            </HeaderLeft>
            <HeaderRight>
                <Avatar/>
                <h4>JordyVe3</h4>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header
