// import { Input } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { AddShoppingCartOutlined, SearchRounded } from "@material-ui/icons";
import {Mobile} from "../Responsive";

import React from "react";

import styled from "styled-components";

const Container = styled.div`
  font-size: 1.5em;
  ${Mobile({ height: "50px" })}
  ${Mobile({overflow: 'hidden'})}

  ${'' /* background: hsl(210, 36%, 96%); */}
  ${'' /* padding:10px 20px; */}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${Mobile({ padding: "10px 0px" })}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items:center;
  ${Mobile({ marginRight: "10px" })}

`;
const Language = styled.span`
  cursor: pointer;
  font-size: 15px;
  display: flex;
  ${Mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${Mobile({ marginLeft: "15px" })}

`;

const Input = styled.input`
  border: none;
  ${Mobile({ width: "50px" })}
  
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.div`
  font-weight: bold;
  ${Mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${Mobile({ flex: 2, justifyContent: "center",marginRight: '10px'})}
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${Mobile({ fontSize: "12px", marginLeft: " 10px" })}
`;

function Mynavbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>eng</Language>
          <SearchContainer className="fff">
            <Input placeholder="search"/>
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
