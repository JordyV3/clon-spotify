import styled from 'styled-components';

const SidebarContainer = styled.div `
    flex: 0.2;
    height:100vh;
    background-color:#322E2D;
    min-width: 240px;
    color:#fff;
        & img {
            width: 75px;
            padding: 10px;
            display: block; 
            margin: auto;
        }
        & hr {
            border: 1px solid smockegray;
            width:90%;
            margin: 10px auto;
        }
    `;
const PlayList = styled.div `
    margin: 5px 10px;
`;

const Choices = styled.div `
    display: flex;
    align-items: center;
    color: gray;
    height: 40px;
    cursor: pointer;
    transition: 300ms color ease-in;
    &:hover {
        color: #fff;
    }
    & h5 {
        margin: 10px 0 0 20px;
    }
`;

export {SidebarContainer, PlayList, Choices };