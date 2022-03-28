
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  flex: 1;
  margin:5px;
  display: flex;
  min-width: 280px;
  height:350px;
  justify-content: center;
  overflow:hidden;
  align-items: center;
  background-color: hsl(205, 90%, 88%);
  position:relative;

`

const Circle = styled.div`
  width:200px;
  height:200px;
  border-radius: 50%;
  background-color:white;
  position:absolute;

`

const Image = styled.img`
  height: 75%;
  ${'' /* width: 80%; */}
  object-fit:cover;
  z-index:2;
`
const Info = styled.div`

  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  background-color:gray;
  z-index:3;
  display: flex;
  align-items:center;
  justify-content: center;

`
const Icon = styled.div`
  width:40px;
  height:40px;
  border-radius: 50%;
  background:white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:10px;


  &:hover{
      background:black;
      transform: scale(1.1);
  }
`

export default function Product({item}) {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
            <Info>
                <Icon>
                <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
    </Container>
  )
}
