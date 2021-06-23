import styled from 'styled-components'

const Container = styled.div `
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: #000;
    & img {
        width: 100%;
    }
`;

const LoginButton = styled.a `
    padding: 20px;
    background-color: #fff;
    border-radius: 30px;
    color: #1db954;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
`

export {Container, LoginButton}
