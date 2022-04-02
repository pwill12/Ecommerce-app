import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
 height:60vh;
 display: flex;
 align-items:center;
 justify-content: center;flex-direction: column;

`
const Title = styled.h1`
font-size:70px;
margin-bottom:20px;

`

const Description = styled.div`
  font-size:24px;
  margin-bottom:20px;
  font-weight:500;

`

const InputContainer = styled.div`
  width:50%;
  background-color:white;
  height:40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;


`
const Input = styled.input`
  border: none;
  flex: 8;
  color:black;
  padding-left:20px;


`
const Button = styled.button`
  flex: 1;
  border: none;
  background:black;
  color:white;

`
export default function Newsletter() {
  return (
    <Container>
        <Title>Sign up Newsletter</Title>
        <Description>Get weekly deals on coupons</Description>
        <InputContainer>
            <Input type="email" name="" id="" placeholder="email address" />
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}
