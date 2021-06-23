import styled from 'styled-components';

const BodyContainer = styled.div `
    flex:0.8;
    background-color: #EEEBEB;
`;

const HeaderContainer = styled.div `
    display: flex;
    justify-content:space-around;
    margin-bottom: 35px;
`;

const HeaderLeft = styled.div `
    display: flex;
    align-items: center;
    flex: 0.5;
    min-width: 75px;
    background-color: #fff;
    color: #181818;
    padding: 10px;
    justify-content: center;
    & input {
     border: none;
     width:100%;

    }
`;

const HeaderRight = styled.div `
    display: flex;
    align-items: center;
    flex: 0.5;
    justify-content:center;
    & h4{
        margin-left:15px;
    }
`;


export {BodyContainer, HeaderContainer, HeaderLeft, HeaderRight};