
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  flex: 1;
  
`

const Circle = styled.div`
  flex: 1;
`

const Image = styled.img`
  flex: 1;
`
const Info = styled.h1`
  flex: 1;
`
const Icon = styled.div`
  flex: 1;
`
const Button = styled.button`
  flex: 1;
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
                <Button>shop now</Button>
            </Info>
    </Container>
  )
}
