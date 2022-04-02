// import { Input } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { AddShoppingCartOutlined, SearchRounded } from "@material-ui/icons";

import React from "react";

import styled from "styled-components";

const Container = styled.div`
  font-size: 1.5em;
  ${'' /* background: hsl(210, 36%, 96%); */}
  ${'' /* padding:10px 20px; */}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  cursor: pointer;
  font-size: 15px;
  display: flex;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.div`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

function Mynavbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>eng</Language>
          <SearchContainer className="fff">
            <Input />
            <SearchRounded style={{color:'grey',fontSize:15}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Willgeeks</Logo>
        </Center>
        <Right>
          <MenuItems>Register</MenuItems>
          <MenuItems>Sign In</MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color="secondary">
              <AddShoppingCartOutlined color="action" />
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Mynavbar;
