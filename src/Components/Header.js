import React from "react"
import {Link} from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color:white;
    position: fixed;
    top:0px;
    left:0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items:center;
    background-color: rgba(20,20,20,0.8);
`;

const List = styled.ul`
display:flex;
`;

const Item = styled.li`
width: 80 px;
height : 50px;
text-align:center`;

const SLink = styled(Link)`
height : 50px;
display : flex;
align-items : center;
justify-content: center;`;