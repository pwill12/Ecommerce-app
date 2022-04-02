
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from '../data'


const Container = styled.div`
  width:100%;
  height:100%;
  display:flex;
  background-color: white;
  position:relative;
  overflow:hidden;


`

const Arrow = styled.div`
  width:50px;
  height:50px;
  background: white;
  border-radius:50%;
  display: flex;
  align-items:center;
  justify-content: center;
  position: absolute;
  top:0;
  bottom:0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin:auto;
  cursor:pointer;
  opacity:0.3;
  z-index:2;

`

const Wrapper = styled.div`
  height:100%;
  display: flex;
  transition: all 0.5s ease;
  transform:translateX(${(props)=> props.slideIndex * -100}vw);
`

const Slide = styled.div`
  display:flex;
  align-items:center;
  width:100vw;
  height:85vh;
  background-color: ${props=>props.bg};
`
const ImgContainer = styled.div`
  flex: 1;
  height: 90%;
  text-align: center;
`

const Image = styled.img`
  height:100%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding:30px;
  
`
const Title = styled.h1`
  font-size:78px;

  
`
const Description = styled.p`
  margin:50px 0px;
  font-size:20px;
  font-weight:400;
  letter-spacing:3px;

  
`
const Button = styled.button`
  padding:10px;
  font-size:30px;
  background-color:transparent;
  cursor:pointer;
`

function Slider() {

  const [slideIndex, setSetIndex] = useState(0)
  function handleClick(direction) {
    if (direction === 'left') {
      setSetIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSetIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick('left')}>
                <ArrowLeftOutlined/>
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
              <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                  <Title>{item.Title}</Title>
                  <Description>{item.Description}</Description>
                  <Button>show more</Button>
                </InfoContainer>
              </Slide>
            ))}
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick('right')}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider