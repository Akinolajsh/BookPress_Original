import React from "react";
import styled from "styled-components";
import {GoSearch} from "react-icons/go"
import {BsCart} from "react-icons/bs"
import {FaAngleDown} from "react-icons/fa"
import img from "../../assets/logo.png"
import Button from "../reUse/Button";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>
            <Img src={img}/>
          </Logo>
          <NavHolder>
            <Nav2>Home</Nav2>
            <Nav>About</Nav>
            <Nav1>Book Store 
            <Icon2 />
            </Nav1>
            <Nav>Blogs</Nav>
            <Nav>Contact</Nav>
            <Nav1>More
            <Icon2 />
            </Nav1>
          </NavHolder>
          <ButtonHolder>
          <IconHolder>
          <Icon />
            <Icon1 />
          </IconHolder>
            <Button wid="150px" text="Upload Book"/>
          </ButtonHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Img = styled.img`
width: 150px;
`;
const Icon2 = styled(FaAngleDown)`
margin-top: 5px;
margin-left: 5px;

`;
const Icon1 = styled(BsCart)`
font-size: 20px;
color: #0275d8;

`;
const Icon = styled(GoSearch)`
margin-right: 20px;
font-size: 20px;
color: #0275d8;

`;

const IconHolder= styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const ButtonHolder = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: red; */
width: 270px;
`;
const Nav1 = styled.div`
margin: 0 20px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;

`;
const Nav2 = styled.div`
margin: 0 20px;
font-weight: 700;
color: #0275d8;
`;
const Nav = styled.div`
margin: 0 20px;
font-weight: 700;
`;
const NavHolder = styled.div`
display: flex;
`;
const Logo = styled.div`

`;
const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
position: fixed;
`;
