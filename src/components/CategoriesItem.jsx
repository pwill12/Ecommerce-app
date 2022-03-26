import { InsertEmoticon } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
  font-size:20px;
  ${'' /* flex: 1; */}
  margin:3px;
  height:70vh;
  flex: 1;
  position:relative;

`

const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;

`
const Info = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  bottom:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`
const Title = styled.h1`
  color:white;
  margin-bottom:20px;
`

const Button = styled.button`
  padding:10px;
  border: none;
  color:gray;
  cursor:pointer;
  font-weight:600;
`

const CategoriesItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>shop now</Button>
            </Info>
        </Container>
    )
}

export default CategoriesItem

